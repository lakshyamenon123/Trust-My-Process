import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useApp } from '../context/AppContext'
import type { ScenarioKey } from '../context/AppContext'
import Header from '../components/Header'
import AlertRow from '../components/AlertRow'
import { colors } from '../theme'

const HOME_APPS = [
  { name: 'WhatsApp', icon: '📱', color: '#25d366' },
  { name: 'Camera', icon: '📷', color: '#3a3a3a' },
  { name: '', icon: '🔍', color: '#ffffff' }, // Spotlight-style search, no label on real iOS either
  { name: 'Facebook', icon: 'f', color: '#3b5998' },
  { name: 'Instagram', icon: '📸', color: 'gradient' },
  { name: 'TikTok', icon: '🎵', color: '#000000' },
  { name: 'YouTube', icon: '📺', color: '#ff0000' },
  { name: 'Gaming', icon: '🎮', color: '#7b2ff7' },
  { name: 'Email', icon: '✉️', color: '#2b6cb0' },
  { name: 'Settings', icon: '⚙️', color: '#e2e2e2' },
  { name: 'Private Browse', icon: '🔒', color: '#000000' },
]

const SCENARIOS: { key: ScenarioKey; label: string; color: string }[] = [
  { key: 'home', label: '🏠  Show Home Screen', color: '#2f3b52' },
  { key: 'instagram', label: '📷  Open Instagram (Normal Use)', color: 'gradient' },
  { key: 'private-blocked', label: '🔒  Try Private Browsing (Blocked)', color: '#3b73d6' },
  { key: 'inappropriate', label: '⚠️  Detect Inappropriate Content', color: '#e15b5b' },
  { key: 'limit-hit', label: '⏰  Screen Time Limit Hit', color: '#e08a2e' },
]

const GRADIENT = '#c23a8f' // flat stand-in for the web version's CSS gradient — RN core has no linear-gradient

// this is basically a state machine but if/else reads fine for 5 cases —
// worth revisiting as a lookup table if we add more scenarios
function PhoneScreen({
  app,
  emergencyLocked,
  onUnlockAttempt,
}: {
  app: ScenarioKey
  emergencyLocked: boolean
  onUnlockAttempt: () => void
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
      </View>
    )
  }

  if (app === 'inappropriate') {
    return (
      <View style={styles.blockedScreen}>
        <Text style={styles.blockedIcon}>⚠️</Text>
        <Text style={styles.blockedTitle}>Content Blocked</Text>
        <Text style={styles.blockedText}>This content was flagged as inappropriate.</Text>
      </View>
    )
  }

  if (app === 'limit-hit') {
    return (
      <View style={styles.blockedScreen}>
        <Text style={styles.blockedIcon}>⏰</Text>
        <Text style={styles.blockedTitle}>Time's Up!</Text>
        <Text style={styles.blockedText}>Daily screen time limit reached.</Text>
      </View>
    )
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
    <View style={styles.home}>
      <View style={styles.appIconGrid}>
        {HOME_APPS.map((a, i) => (
          <View style={styles.appIcon} key={i}>
            <View
              style={[
                styles.appIconGlyph,
                { backgroundColor: a.color === 'gradient' ? GRADIENT : a.color },
              ]}
            >
              <Text style={[styles.appIconGlyphText, a.color === '#ffffff' || a.color === '#e2e2e2' ? { color: '#333' } : null]}>
                {a.icon}
              </Text>
            </View>
            <Text style={styles.appIconLabel}>{a.name}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default function ChildDevice() {
  const { alerts, currentApp, triggerScenario, emergencyLocked, addAlert } = useApp()
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
  home: { backgroundColor: '#2c2560', height: 480, padding: 16 },
  appIconGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  appIcon: { width: 70, alignItems: 'center', gap: 6 },
  appIconGlyph: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIconGlyphText: { fontSize: 22, fontWeight: '700', color: colors.white },
  appIconLabel: { color: colors.white, fontSize: 11, textAlign: 'center' },
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
  appScreen: { height: 480, padding: 16 },
  appScreenInstagram: { backgroundColor: colors.white },
  appTopbar: { fontWeight: '700', paddingBottom: 14, color: colors.text },
  igStoryRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  igStory: { alignItems: 'center', gap: 4 },
  igStoryRing: { width: 44, height: 44, borderRadius: 22, backgroundColor: GRADIENT },
  igStoryLabel: { fontSize: 10, color: '#333' },
  igPost: { height: 140, backgroundColor: '#eee', borderRadius: 10, marginBottom: 12 },
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
