import { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext(null)

// everything below is hardcoded demo data — once there's a real backend this
// whole file basically becomes API calls + a bit of local UI state
const initialAlerts = [
  { id: 1, type: 'warning', text: 'Inappropriate content blocked', time: '10:45 AM' },
  { id: 2, type: 'info', text: 'Screen time limit approaching (85%)', time: '10:12 AM' },
  { id: 3, type: 'warning', text: 'Private browsing attempt blocked', time: '9:33 AM' },
  { id: 4, type: 'info', text: 'Device connected and monitoring active', time: '8:55 AM' },
]

const weeklyData = [
  { day: 'Mon', minutes: 170 },
  { day: 'Tue', minutes: 118 },
  { day: 'Wed', minutes: 195 },
  { day: 'Thu', minutes: 105 },
  { day: 'Fri', minutes: 150 },
]

const topApps = [
  { name: 'TikTok', label: '1h 32m', pct: 85 },
  { name: 'Instagram', label: '45m', pct: 42 },
  { name: 'YouTube', label: '1h', pct: 58 },
]

const APP_SCENARIOS = {
  home: { label: 'home' },
  instagram: { label: 'instagram' },
  'private-blocked': { label: 'private_browse (blocked)' },
  inappropriate: { label: 'content_blocked' },
  'limit-hit': { label: 'limit_reached' },
}

function timeNow() {
  return new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

export function AppProvider({ children }) {
  const [view, setView] = useState('login') // 'login' | 'parent' | 'child'
  const [alerts, setAlerts] = useState(initialAlerts)
  const [dailyLimitHours, setDailyLimitHours] = useState(4)
  const [usedMinutes, setUsedMinutes] = useState(165)
  const [blockedApps] = useState(['TikTok', 'Snapchat', 'Facebook', 'Instagram', 'Gaming'])
  const [currentApp, setCurrentApp] = useState('home')
  const [emergencyLocked, setEmergencyLocked] = useState(false)
  const [connected] = useState(true)

  function addAlert(type, text) {
    setAlerts((prev) => [{ id: Date.now(), type, text, time: timeNow() }, ...prev])
  }

  // maps a demo button to the alert it should fire — 'home' and 'instagram'
  // intentionally have no entry, they're just "normal use" and don't alert
  const SCENARIO_ALERTS = {
    'private-blocked': ['warning', 'Private browsing attempt blocked'],
    inappropriate: ['warning', 'Inappropriate content blocked'],
    'limit-hit': ['info', 'Daily screen time limit reached'],
  }

  function triggerScenario(key) {
    setCurrentApp(key)
    const alert = SCENARIO_ALERTS[key]
    if (alert) addAlert(...alert)
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
    () => ({
      view,
      setView,
      alerts,
      addAlert,
      dailyLimitHours,
      setDailyLimitHours,
      usedMinutes,
      blockedApps,
      currentApp,
      setCurrentApp,
      triggerScenario,
      emergencyLocked,
      emergencyLock,
      unlockDevice,
      connected,
      weeklyData,
      topApps,
      APP_SCENARIOS,
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
