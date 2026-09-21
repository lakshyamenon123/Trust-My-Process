import { useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useApp } from '../context/AppContext'
import type { AppKey, ScenarioKey } from '../context/AppContext'
import Header from '../components/Header'
import AlertRow from '../components/AlertRow'
import { colors } from '../theme'

type AppKind = 'list' | 'tiles' | 'search' | 'dialpad' | 'assistant' | 'clock'

type HomeApp = {
  name: string
  icon: string
  color: string
  kind: AppKind
  items?: string[]
  dark?: boolean // light glyph background needs dark icon/text instead of white
}

const HOME_APPS: HomeApp[] = [
  { name: 'Messages', icon: '💬', color: '#25c1c1', kind: 'list', items: ['Mom: Dinner at 6? 🍝', 'Alex: homework done?', 'Study group: meet tmrw 4pm'] },
  { name: 'Weather', icon: '⛅', color: '#4a90e2', kind: 'list', items: ['Today · 72°F · Sunny', 'Tomorrow · 68°F · Cloudy', 'Wednesday · 75°F · Sunny'] },
  { name: 'Calendar', icon: '📅', color: '#e0463c', kind: 'list', items: ['3:00 PM · Soccer practice', '5:00 PM · Piano lesson', '7:00 PM · Family dinner'] },
  { name: 'Settings', icon: '⚙️', color: '#eceff3', dark: true, kind: 'list', items: ['Wi-Fi: Home Network', 'Bluetooth: On', 'Screen Time: Managed by parent'] },
  { name: 'Contacts', icon: '👤', color: '#f5a623', kind: 'list', items: ['Mom', 'Dad', 'Grandma', 'Sam (best friend)'] },
  { name: 'Camera', icon: '📷', color: '#3a3a3a', kind: 'tiles' },
  { name: 'Clock', icon: '🕐', color: '#eceff3', dark: true, kind: 'clock' },
  { name: 'Music', icon: '🎧', color: '#e0368f', kind: 'list', items: ['Sunny Day — Pop Mix', 'Study Beats — Lo-fi', 'Road Trip — Favorites'] },
  { name: 'Video', icon: '🎥', color: '#d9534f', kind: 'tiles' },
  { name: 'Transit', icon: '🚆', color: '#27ae60', kind: 'list', items: ['Bus 12 · 4 min away', 'Bus 47 · 11 min away', 'Train · on time'] },
  { name: 'Health', icon: '❤️', color: '#e0463c', kind: 'list', items: ['Steps today: 6,240', 'Active minutes: 38', 'Sleep last night: 8h 10m'] },
  { name: 'Maps', icon: '📍', color: '#2f7ed8', kind: 'tiles' },
  { name: 'Flights', icon: '✈️', color: '#1fa896', kind: 'list', items: ['No upcoming flights'] },
  { name: 'Rides', icon: '🚗', color: '#2b2b2f', kind: 'list', items: ['No ride requested'] },
  { name: 'Assistant', icon: '🎙️', color: '#6f42c1', kind: 'assistant' },
  { name: 'Search', icon: '🔍', color: '#1f6feb', kind: 'search' },
  { name: 'Shopping', icon: '🛒', color: '#2f7ed8', kind: 'list', items: ['Sneakers — $45', 'Notebook set — $12', 'Water bottle — $9'] },
  { name: 'Gifts', icon: '🎁', color: '#e08a2e', kind: 'list', items: ['Birthday wishlist: 3 items'] },
  { name: 'Phone', icon: '📞', color: '#2ecc71', kind: 'dialpad' },
  { name: 'Mail', icon: '✉️', color: '#e0463c', kind: 'list', items: ['School: Report card posted', 'Coach: Practice moved to 4pm'] },
  { name: 'Instagram', icon: '📸', color: 'gradient', kind: 'tiles' },
  { name: 'TikTok', icon: '🎵', color: '#000000', kind: 'tiles' },
  { name: 'Facebook', icon: 'f', color: '#3b5998', kind: 'tiles' },
  { name: 'Gaming', icon: '🎮', color: '#7b2ff7', kind: 'tiles' },
  { name: 'Private Browse', icon: '🔒', color: '#000000', kind: 'tiles' },
]

const SCENARIOS: { key: ScenarioKey; label: string; color: string }[] = [
  { key: 'home', label: '🏠  Show Home Screen', color: '#2f3b52' },
  { key: 'instagram', label: '📷  Open Instagram (Normal Use)', color: 'gradient' },
  { key: 'private-blocked', label: '🔒  Try Private Browsing (Blocked)', color: '#3b73d6' },
  { key: 'inappropriate', label: '⚠️  Detect Inappropriate Content', color: '#e15b5b' },
  { key: 'limit-hit', label: '⏰  Screen Time Limit Hit', color: '#e08a2e' },
]

const GRADIENT = '#c23a8f' // flat stand-in for the web version's CSS gradient — RN core has no linear-gradient
const SEARCH_SUGGESTIONS = [
  'dinosaurs', 'soccer highlights', 'how to draw', 'math homework help',
  'funny cat videos', 'weather tomorrow', 'space facts', 'science fair ideas',
]

function iconFor(name: string) {
  return HOME_APPS.find((a) => a.name === name)
}

function AppHeader({ title, onGoHome }: { title: string; onGoHome: () => void }) {
  return (
    <View style={styles.appOpenHeader}>
      <TouchableOpacity onPress={onGoHome} hitSlop={8}>
        <Text style={styles.appOpenBack}>← Home</Text>
      </TouchableOpacity>
      <Text style={styles.appTopbar}>{title}</Text>
      <View style={{ width: 46 }} />
    </View>
  )
}

function ListAppScreen({ app, onGoHome }: { app: HomeApp; onGoHome: () => void }) {
  return (
    <View style={styles.appScreen}>
      <AppHeader title={app.name} onGoHome={onGoHome} />
      {(app.items ?? []).map((item, i) => (
        <View style={styles.listRow} key={i}>
          <Text style={styles.listRowText}>{item}</Text>
        </View>
      ))}
    </View>
  )
}

function TilesAppScreen({ app, onGoHome }: { app: HomeApp; onGoHome: () => void }) {
  return (
    <View style={styles.appScreen}>
      <AppHeader title={app.name} onGoHome={onGoHome} />
      <View style={styles.tileGrid}>
        {[0, 1, 2, 3].map((i) => (
          <View style={styles.tile} key={i} />
        ))}
      </View>
    </View>
  )
}

function SearchAppScreen({ onGoHome }: { onGoHome: () => void }) {
  const [query, setQuery] = useState('')
  const results = query.trim()
    ? SEARCH_SUGGESTIONS.filter((s) => s.toLowerCase().includes(query.trim().toLowerCase()))
    : SEARCH_SUGGESTIONS

  return (
    <View style={styles.appScreen}>
      <AppHeader title="Search" onGoHome={onGoHome} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search the web..."
        placeholderTextColor={colors.textMuted}
        value={query}
        onChangeText={setQuery}
      />
      <Text style={styles.searchSectionLabel}>{query.trim() ? `Results for "${query}"` : 'Trending searches'}</Text>
      {results.length === 0 ? (
        <Text style={styles.listRowText}>No results found.</Text>
      ) : (
        results.map((r) => (
          <View style={styles.listRow} key={r}>
            <Text style={styles.listRowText}>🔎 {r}</Text>
          </View>
        ))
      )}
    </View>
  )
}

function DialPadAppScreen({ onGoHome }: { onGoHome: () => void }) {
  const [digits, setDigits] = useState('')
  const [calling, setCalling] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  function press(key: string) {
    if (calling) return
    setDigits((d) => (d + key).slice(0, 15))
  }

  function call() {
    if (!digits || calling) return
    setCalling(true)
    timeoutRef.current = setTimeout(() => {
      setCalling(false)
      setDigits('')
    }, 2000)
  }

  return (
    <View style={styles.appScreen}>
      <AppHeader title="Phone" onGoHome={onGoHome} />
      <Text style={styles.dialDisplay}>{calling ? `Calling ${digits}… (demo)` : digits || 'Enter a number'}</Text>
      <View style={styles.dialGrid}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((k) => (
          <TouchableOpacity key={k} style={styles.dialKey} onPress={() => press(k)}>
            <Text style={styles.dialKeyText}>{k}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.dialActions}>
        <TouchableOpacity style={styles.dialClear} onPress={() => setDigits((d) => d.slice(0, -1))}>
          <Text style={styles.dialActionText}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dialCall} onPress={call}>
          <Text style={styles.dialActionText}>📞</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ASSISTANT_RESPONSES = [
  "You have 3 new messages and soccer practice at 3 PM today.",
  "It's sunny and 72°F right now — good day to be outside.",
  "Your screen time today is within your daily limit.",
]

function AssistantAppScreen({ onGoHome }: { onGoHome: () => void }) {
  const [state, setState] = useState<'idle' | 'listening' | 'responded'>('idle')
  const [response, setResponse] = useState('')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  function press() {
    if (state === 'listening') return
    if (state === 'responded') {
      setState('idle')
      return
    }
    setState('listening')
    timeoutRef.current = setTimeout(() => {
      setResponse(ASSISTANT_RESPONSES[Math.floor(Math.random() * ASSISTANT_RESPONSES.length)])
      setState('responded')
    }, 1200)
  }

  return (
    <View style={styles.appScreen}>
      <AppHeader title="Assistant" onGoHome={onGoHome} />
      <TouchableOpacity style={styles.assistantMic} onPress={press}>
        <Text style={styles.assistantMicIcon}>🎙️</Text>
      </TouchableOpacity>
      <Text style={styles.assistantStatus}>
        {state === 'idle' && 'Tap the mic and ask something'}
        {state === 'listening' && 'Listening…'}
        {state === 'responded' && response}
      </Text>
    </View>
  )
}

function ClockAppScreen({ onGoHome }: { onGoHome: () => void }) {
  const [now, setNow] = useState(new Date())
  const [running, setRunning] = useState(false)
  const [elapsedMs, setElapsedMs] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setElapsedMs((ms) => ms + 100), 100)
    return () => clearInterval(id)
  }, [running])

  const totalSeconds = Math.floor(elapsedMs / 1000)
  const stopwatch = `${String(Math.floor(totalSeconds / 60)).padStart(2, '0')}:${String(totalSeconds % 60).padStart(2, '0')}`

  return (
    <View style={styles.appScreen}>
      <AppHeader title="Clock" onGoHome={onGoHome} />
      <Text style={styles.clockTime}>{now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' })}</Text>
      <Text style={styles.clockDate}>{now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
      <View style={styles.stopwatchBox}>
        <Text style={styles.stopwatchLabel}>Stopwatch</Text>
        <Text style={styles.stopwatchTime}>{stopwatch}</Text>
        <View style={styles.stopwatchActions}>
          <TouchableOpacity style={styles.stopwatchBtn} onPress={() => setRunning((r) => !r)}>
            <Text style={styles.stopwatchBtnText}>{running ? 'Stop' : 'Start'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.stopwatchBtn, styles.stopwatchReset]} onPress={() => { setRunning(false); setElapsedMs(0) }}>
            <Text style={styles.stopwatchBtnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

function OpenAppScreen({ name, onGoHome }: { name: string; onGoHome: () => void }) {
  const app = iconFor(name)
  if (!app) return <ListAppScreen app={{ name, icon: '📱', color: colors.navy, kind: 'list', items: [] }} onGoHome={onGoHome} />
  if (app.kind === 'search') return <SearchAppScreen onGoHome={onGoHome} />
  if (app.kind === 'dialpad') return <DialPadAppScreen onGoHome={onGoHome} />
  if (app.kind === 'assistant') return <AssistantAppScreen onGoHome={onGoHome} />
  if (app.kind === 'clock') return <ClockAppScreen onGoHome={onGoHome} />
  if (app.kind === 'tiles') return <TilesAppScreen app={app} onGoHome={onGoHome} />
  return <ListAppScreen app={app} onGoHome={onGoHome} />
}

// this is basically a state machine but if/else reads fine for a handful of
// cases — worth revisiting as a lookup table if this keeps growing
function PhoneScreen({
  app,
  emergencyLocked,
  onUnlockAttempt,
  onOpenApp,
  onPrivateBrowse,
  onGoHome,
}: {
  app: AppKey
  emergencyLocked: boolean
  onUnlockAttempt: () => void
  onOpenApp: (name: string) => void
  onPrivateBrowse: () => void
  onGoHome: () => void
}) {
  if (emergencyLocked) {
    return (
      <View style={styles.blockedScreen}>
        <Text style={styles.blockedIcon}>🔒</Text>
        <Text style={styles.blockedTitle}>Device Locked</Text>
        <Text style={styles.blockedText}>Your parent has locked this device.</Text>
        <TouchableOpacity style={styles.unlockHint} onPress={onUnlockAttempt}>
          <Text style={styles.unlockHintText}>Ask a parent to unlock</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (app === 'private-blocked') {
    return (
      <View style={styles.blockedScreen}>
        <Text style={styles.blockedIcon}>🔒</Text>
        <Text style={styles.blockedTitle}>Private Browsing Blocked</Text>
        <Text style={styles.blockedText}>This feature is disabled by parental controls.</Text>
        <TouchableOpacity style={styles.unlockHint} onPress={onGoHome}>
          <Text style={styles.unlockHintText}>← Home</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (app === 'inappropriate') {
    return (
      <View style={styles.blockedScreen}>
        <Text style={styles.blockedIcon}>⚠️</Text>
        <Text style={styles.blockedTitle}>Content Blocked</Text>
        <Text style={styles.blockedText}>This content was flagged as inappropriate.</Text>
        <TouchableOpacity style={styles.unlockHint} onPress={onGoHome}>
          <Text style={styles.unlockHintText}>← Home</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (app === 'limit-hit') {
    return (
      <View style={styles.blockedScreen}>
        <Text style={styles.blockedIcon}>⏰</Text>
        <Text style={styles.blockedTitle}>Time's Up!</Text>
        <Text style={styles.blockedText}>Daily screen time limit reached.</Text>
        <TouchableOpacity style={styles.unlockHint} onPress={onGoHome}>
          <Text style={styles.unlockHintText}>← Home</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (app.startsWith('blocked-app:')) {
    const name = app.slice('blocked-app:'.length)
    return (
      <View style={styles.blockedScreen}>
        <Text style={styles.blockedIcon}>{iconFor(name)?.icon ?? '🔒'}</Text>
        <Text style={styles.blockedTitle}>{name} Blocked</Text>
        <Text style={styles.blockedText}>{name} is blocked by parental controls.</Text>
        <TouchableOpacity style={styles.unlockHint} onPress={onGoHome}>
          <Text style={styles.unlockHintText}>← Home</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (app.startsWith('open:')) {
    return <OpenAppScreen name={app.slice('open:'.length)} onGoHome={onGoHome} />
  }

  if (app === 'instagram') {
    return (
      <View style={[styles.appScreen, styles.appScreenInstagram]}>
        <Text style={styles.appTopbar}>Instagram</Text>
        <View style={styles.igStoryRow}>
          {['You', 'mia', 'lee', 'sam', 'ava'].map((n) => (
            <View style={styles.igStory} key={n}>
              <View style={styles.igStoryRing} />
              <Text style={styles.igStoryLabel}>{n}</Text>
            </View>
          ))}
        </View>
        <View style={styles.igPost} />
        <View style={styles.igPost} />
      </View>
    )
  }

  return (
    <ScrollView style={styles.home} contentContainerStyle={styles.homeContent} nestedScrollEnabled>
      <View style={styles.appIconGrid}>
        {HOME_APPS.map((a) => (
          <TouchableOpacity
            style={styles.appIcon}
            key={a.name}
            activeOpacity={0.65}
            onPress={() => (a.name === 'Private Browse' ? onPrivateBrowse() : onOpenApp(a.name))}
          >
            <View style={[styles.appIconGlyph, { backgroundColor: a.color === 'gradient' ? GRADIENT : a.color }]}>
              <Text style={[styles.appIconGlyphText, a.dark ? { color: '#333' } : null]}>{a.icon}</Text>
            </View>
            <Text style={styles.appIconLabel}>{a.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

export default function ChildDevice() {
  const { alerts, currentApp, triggerScenario, openApp, emergencyLocked, addAlert } = useApp()
  const [now, setNow] = useState(new Date())

  // just for the fake status bar clock, doesn't need to be anywhere near real-time accurate
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })

  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView contentContainerStyle={styles.layout}>
        <View style={styles.phoneFrame}>
          <View style={styles.phoneStatusbar}>
            <Text style={styles.statusbarText}>{timeStr}</Text>
            <Text style={styles.statusbarText}>📶 🔋 89%</Text>
          </View>
          <PhoneScreen
            app={currentApp}
            emergencyLocked={emergencyLocked}
            onUnlockAttempt={() => addAlert('info', 'Child attempted to request unlock')}
            onOpenApp={openApp}
            onPrivateBrowse={() => triggerScenario('private-blocked')}
            onGoHome={() => triggerScenario('home')}
          />
          {currentApp === 'home' && !emergencyLocked && (
            <View style={styles.phoneDock}>
              <Text style={styles.dockIcon}>📞</Text>
              <Text style={styles.dockIcon}>💬</Text>
              <Text style={styles.dockIcon}>📷</Text>
              <Text style={styles.dockIcon}>⚙️</Text>
            </View>
          )}
        </View>

        <View style={styles.demoPanel}>
          <Text style={styles.demoHeading}>Demo Controls</Text>
          <Text style={styles.demoSubtitle}>Simulate scenarios on the phone</Text>
          {SCENARIOS.map((s) => (
            <TouchableOpacity
              key={s.key}
              style={[
                styles.demoBtn,
                { backgroundColor: s.color === 'gradient' ? GRADIENT : s.color },
                currentApp === s.key && styles.demoBtnActive,
              ]}
              onPress={() => triggerScenario(s.key)}
            >
              <Text style={styles.demoBtnText}>{s.label}</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.currentStateBox}>
            <Text style={styles.currentStateTitle}>Current state</Text>
            <Text style={styles.currentStateText}>App: {currentApp}</Text>
          </View>

          <Text style={[styles.demoHeading, styles.alertsHeading]}>Recent Alerts</Text>
          <View style={styles.alertList}>
            {alerts.map((a) => (
              <AlertRow alert={a} key={a.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  layout: { padding: 20, gap: 24, alignItems: 'center' },
  phoneFrame: {
    width: 300,
    backgroundColor: '#14162a',
    borderRadius: 36,
    padding: 12,
    shadowColor: '#14162a',
    shadowOpacity: 0.35,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 16 },
    elevation: 8,
  },
  phoneStatusbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 6,
    backgroundColor: '#2c2560',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  statusbarText: { color: colors.white, fontSize: 13 },
  home: { backgroundColor: '#2c2560', height: 480 },
  homeContent: { padding: 16, paddingBottom: 24 },
  appIconGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 16 },
  appIcon: { width: '23%', alignItems: 'center', gap: 6 },
  appIconGlyph: {
    width: 54,
    height: 54,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIconGlyphText: { fontSize: 21, fontWeight: '700', color: colors.white },
  appIconLabel: { color: colors.white, fontSize: 10, textAlign: 'center' },
  phoneDock: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  dockIcon: { fontSize: 20 },
  blockedScreen: {
    height: 480,
    backgroundColor: '#1a1d33',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  blockedIcon: { fontSize: 42, marginBottom: 14 },
  blockedTitle: { fontSize: 17, fontWeight: '700', color: colors.white, marginBottom: 8, textAlign: 'center' },
  blockedText: { fontSize: 13, color: '#b9bdd6', textAlign: 'center' },
  unlockHint: {
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.14)',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },
  unlockHintText: { color: colors.white, fontSize: 12 },
  appScreen: { minHeight: 480, padding: 16, backgroundColor: colors.white },
  appScreenInstagram: { backgroundColor: colors.white },
  appTopbar: { fontWeight: '700', color: colors.text },
  appOpenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 14,
  },
  appOpenBack: { fontSize: 12, color: colors.blueLight, fontWeight: '600', width: 46 },
  igStoryRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  igStory: { alignItems: 'center', gap: 4 },
  igStoryRing: { width: 44, height: 44, borderRadius: 22, backgroundColor: GRADIENT },
  igStoryLabel: { fontSize: 10, color: '#333' },
  igPost: { height: 140, backgroundColor: '#eee', borderRadius: 10, marginBottom: 12 },
  listRow: {
    backgroundColor: '#f4f6fa',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  listRowText: { fontSize: 13, color: colors.text },
  tileGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  tile: { width: '47%', height: 100, backgroundColor: '#eee', borderRadius: 10 },
  searchInput: {
    borderWidth: 1,
    borderColor: '#d8dce3',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 16,
    color: colors.text,
  },
  searchSectionLabel: { fontSize: 12, color: colors.textMuted, marginBottom: 8, fontWeight: '600' },
  dialDisplay: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 18,
    minHeight: 30,
  },
  dialGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'center' },
  dialKey: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f4f6fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialKeyText: { fontSize: 20, fontWeight: '600', color: colors.text },
  dialActions: { flexDirection: 'row', justifyContent: 'center', gap: 24, marginTop: 20 },
  dialClear: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#e6e9f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialCall: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialActionText: { fontSize: 20 },
  assistantMic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  assistantMicIcon: { fontSize: 34 },
  assistantStatus: { textAlign: 'center', fontSize: 13, color: colors.textMuted, paddingHorizontal: 10 },
  clockTime: { fontSize: 40, fontWeight: '700', color: colors.text, textAlign: 'center', marginTop: 10 },
  clockDate: { fontSize: 13, color: colors.textMuted, textAlign: 'center', marginBottom: 24 },
  stopwatchBox: { backgroundColor: '#f4f6fa', borderRadius: 12, padding: 18, alignItems: 'center' },
  stopwatchLabel: { fontSize: 12, color: colors.textMuted, fontWeight: '600', marginBottom: 6 },
  stopwatchTime: { fontSize: 28, fontWeight: '700', color: colors.text, marginBottom: 14 },
  stopwatchActions: { flexDirection: 'row', gap: 12 },
  stopwatchBtn: {
    backgroundColor: colors.blueLight,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  stopwatchReset: { backgroundColor: '#8b93a5' },
  stopwatchBtnText: { color: colors.white, fontWeight: '600', fontSize: 13 },
  demoPanel: { width: '100%', maxWidth: 420 },
  demoHeading: { fontSize: 18, fontWeight: '700', color: colors.navy, marginBottom: 4 },
  demoSubtitle: { color: colors.textMuted, marginBottom: 16, fontSize: 13 },
  demoBtn: {
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 18,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  demoBtnActive: { borderColor: '#1f2430' },
  demoBtnText: { color: colors.white, fontWeight: '600', fontSize: 14 },
  currentStateBox: { backgroundColor: '#eaf1fd', borderRadius: 10, padding: 14, marginVertical: 4 },
  currentStateTitle: { color: colors.navy, fontWeight: '700', marginBottom: 4 },
  currentStateText: { fontSize: 13, color: colors.text },
  alertsHeading: { marginTop: 20 },
  alertList: { gap: 10 },
})
