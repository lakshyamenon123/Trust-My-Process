import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type AlertType = 'warning' | 'info'
export type Alert = { id: number; type: AlertType; text: string; time: string }
export type View = 'login' | 'parent' | 'child'
export type ScenarioKey = 'home' | 'instagram' | 'private-blocked' | 'inappropriate' | 'limit-hit'
// tapping an app icon on the child's home screen produces one of these,
// rather than only the five fixed demo-panel scenarios above
export type AppKey = ScenarioKey | `open:${string}` | `blocked-app:${string}`

const AppContext = createContext<ReturnType<typeof buildValue> | null>(null)

// everything below is hardcoded demo data — once there's a real backend this
// whole file basically becomes API calls + a bit of local UI state
const initialAlerts: Alert[] = [
  { id: 1, type: 'warning', text: 'Inappropriate content blocked', time: '10:45 AM' },
  { id: 2, type: 'info', text: 'Screen time limit approaching (85%)', time: '10:12 AM' },
  { id: 3, type: 'warning', text: 'Private browsing attempt blocked', time: '9:33 AM' },
  { id: 4, type: 'info', text: 'Device connected and monitoring active', time: '8:55 AM' },
]

export const weeklyData = [
  { day: 'Mon', minutes: 170 },
  { day: 'Tue', minutes: 118 },
  { day: 'Wed', minutes: 195 },
  { day: 'Thu', minutes: 105 },
  { day: 'Fri', minutes: 150 },
]

export const topApps = [
  { name: 'TikTok', label: '1h 32m', pct: 85 },
  { name: 'Instagram', label: '45m', pct: 42 },
  { name: 'YouTube', label: '1h', pct: 58 },
]

// derived from the student's assessments/activities/achievements in a real
// backend — hardcoded here the same way weeklyData/topApps are, so the card
// has something realistic to render
export const studentProfile = {
  interests: ['Robotics', 'Creative Writing', 'Basketball', 'Video Editing', 'Astronomy'],
  strengths: [
    { subject: 'Mathematics', level: 88 },
    { subject: 'Science', level: 82 },
    { subject: 'English', level: 74 },
  ],
  skills: [
    { name: 'Problem Solving', level: 90 },
    { name: 'Technology', level: 92 },
    { name: 'Creativity', level: 85 },
    { name: 'Communication', level: 70 },
    { name: 'Leadership', level: 65 },
  ],
  careerInterests: ['Software Engineer', 'Game Designer', 'Data Scientist'],
  progress: [
    { name: 'Public Speaking', note: 'Improving steadily', level: 60 },
    { name: 'Time Management', note: 'Needs more practice', level: 45 },
  ],
}

// maps a demo button to the alert it should fire — 'home' and 'instagram'
// intentionally have no entry, they're just "normal use" and don't alert
const SCENARIO_ALERTS: Partial<Record<ScenarioKey, [AlertType, string]>> = {
  'private-blocked': ['warning', 'Private browsing attempt blocked'],
  inappropriate: ['warning', 'Inappropriate content blocked'],
  'limit-hit': ['info', 'Daily screen time limit reached'],
}

function timeNow() {
  return new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

function buildValue(state: {
  view: View
  setView: (v: View) => void
  alerts: Alert[]
  addAlert: (type: AlertType, text: string) => void
  dailyLimitHours: number
  setDailyLimitHours: (h: number) => void
  usedMinutes: number
  blockedApps: string[]
  currentApp: AppKey
  triggerScenario: (key: ScenarioKey) => void
  openApp: (name: string) => void
  emergencyLocked: boolean
  emergencyLock: () => void
  unlockDevice: () => void
  connected: boolean
}) {
  return { ...state, weeklyData, topApps, studentProfile }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>('login')
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts)
  const [dailyLimitHours, setDailyLimitHours] = useState(4)
  const [usedMinutes] = useState(165)
  const [blockedApps] = useState(['TikTok', 'Snapchat', 'Facebook', 'Instagram', 'Gaming'])
  const [currentApp, setCurrentApp] = useState<AppKey>('home')
  const [emergencyLocked, setEmergencyLocked] = useState(false)
  const [connected] = useState(true)

  function addAlert(type: AlertType, text: string) {
    setAlerts((prev) => [{ id: Date.now(), type, text, time: timeNow() }, ...prev])
  }

  function triggerScenario(key: ScenarioKey) {
    setCurrentApp(key)
    const alert = SCENARIO_ALERTS[key]
    if (alert) addAlert(...alert)
  }

  // tapping any icon on the child's home screen goes through here — apps on
  // the parent's blocked list get stopped, everything else "opens"
  function openApp(name: string) {
    if (blockedApps.includes(name)) {
      setCurrentApp(`blocked-app:${name}`)
      addAlert('warning', `${name} blocked by parental controls`)
    } else {
      setCurrentApp(`open:${name}`)
    }
  }

  function emergencyLock() {
    setEmergencyLocked(true)
    addAlert('warning', 'Emergency lock activated by parent')
  }

  function unlockDevice() {
    setEmergencyLocked(false)
    addAlert('info', 'Device unlocked by parent')
  }

  const value = useMemo(
    () =>
      buildValue({
        view,
        setView,
        alerts,
        addAlert,
        dailyLimitHours,
        setDailyLimitHours,
        usedMinutes,
        blockedApps,
        currentApp,
        triggerScenario,
        openApp,
        emergencyLocked,
        emergencyLock,
        unlockDevice,
        connected,
      }),
    // functions aren't in this list on purpose — they're stable closures,
    // only the actual values need to trigger a re-render downstream
    [view, alerts, dailyLimitHours, usedMinutes, blockedApps, currentApp, emergencyLocked, connected]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
