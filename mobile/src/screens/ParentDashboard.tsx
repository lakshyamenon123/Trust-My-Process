import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useApp } from '../context/AppContext'
import Header from '../components/Header'
import AlertRow from '../components/AlertRow'
import StudentInsights from '../components/StudentInsights'
import { colors } from '../theme'

export default function ParentDashboard() {
  const {
    alerts,
    dailyLimitHours,
    setDailyLimitHours,
    usedMinutes,
    blockedApps,
    connected,
    weeklyData,
    topApps,
    emergencyLock,
    emergencyLocked,
    unlockDevice,
  } = useApp()

  // local draft so the input isn't fighting the "real" value on every keystroke
  const [limitInput, setLimitInput] = useState(String(dailyLimitHours))

  const limitMinutes = dailyLimitHours * 60
  const pctUsed = Math.min(100, Math.round((usedMinutes / limitMinutes) * 100))
  const hours = Math.floor(usedMinutes / 60)
  const mins = usedMinutes % 60
  const avgMinutes = Math.round(weeklyData.reduce((s, d) => s + d.minutes, 0) / weeklyData.length)
  const maxMinutes = Math.max(...weeklyData.map((d) => d.minutes))

  // only show the first couple so the card doesn't blow out in height —
  // fine for the demo list, might need a "view all" if this grows
  const visibleBlocked = blockedApps.slice(0, 2)
  const moreCount = blockedApps.length - visibleBlocked.length

  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView contentContainerStyle={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Child Device Status</Text>
          <View style={styles.statusRow}>
            <Text style={styles.statusLockIcon}>🔒</Text>
            <View>
              <View style={styles.statusConnected}>
                <View style={[styles.dot, connected && !emergencyLocked ? styles.dotGreen : styles.dotRed]} />
                <Text style={styles.statusConnectedText}>
                  {emergencyLocked ? 'Locked by parent' : 'Connected & Monitoring'}
                </Text>
              </View>
              <Text style={styles.statusDetail}>iPhone 14 · iOS 17 · Last sync: now</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today's Screen Time</Text>
          <View style={styles.screenTimeRow}>
            <Text style={styles.screenTimeValue}>
              {hours}h {mins}m
            </Text>
            <Text style={styles.screenTimeLimit}>{dailyLimitHours}h limit</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${pctUsed}%` }]} />
          </View>
          <Text style={styles.progressCaption}>{pctUsed}% of daily limit used</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>This Week</Text>
          <View style={styles.barChart}>
            {weeklyData.map((d) => (
              <View style={styles.barCol} key={d.day}>
                <View style={[styles.bar, { height: Math.max(10, (d.minutes / maxMinutes) * 100) }]} />
                <Text style={styles.barLabel}>{d.day}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.progressCaption}>
            Average: {Math.floor(avgMinutes / 60)}h {avgMinutes % 60}m/day
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Top Apps Used</Text>
          {topApps.map((app) => (
            <View style={styles.appRow} key={app.name}>
              <View style={styles.appRowHeader}>
                <Text style={styles.appRowText}>{app.name}</Text>
                <Text style={styles.appRowText}>{app.label}</Text>
              </View>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, styles.progressFillDark, { width: `${app.pct}%` }]} />
              </View>
            </View>
          ))}
        </View>

        <StudentInsights />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Alerts</Text>
          <View style={styles.alertList}>
            {alerts.map((a) => (
              <AlertRow alert={a} key={a.id} />
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Controls</Text>
          <Text style={styles.controlLabel}>Daily Screen Time Limit</Text>
          <View style={styles.limitRow}>
            <TextInput
              style={styles.limitInput}
              keyboardType="number-pad"
              value={limitInput}
              onChangeText={setLimitInput}
            />
            <Text>hrs</Text>
            <TouchableOpacity style={styles.btnSave} onPress={() => setDailyLimitHours(Number(limitInput) || 1)}>
              <Text style={styles.btnSaveText}>Save</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.blockedAppsLine}>
            <Text style={{ fontWeight: '700' }}>Blocked Apps: </Text>
            {visibleBlocked.join(', ')}
            {moreCount > 0 && `, +${moreCount} more`}
          </Text>
          {emergencyLocked ? (
            <TouchableOpacity style={styles.btnUnlock} onPress={unlockDevice}>
              <Text style={styles.btnActionText}>🔓 Unlock Device</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btnEmergency} onPress={emergencyLock}>
              <Text style={styles.btnActionText}>🔒 Emergency Lock</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  grid: { padding: 16, gap: 16 },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 14,
    padding: 18,
    shadowColor: '#141e3c',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: { fontSize: 15, fontWeight: '700', color: colors.text, marginBottom: 14 },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  statusLockIcon: { fontSize: 22, backgroundColor: '#fff3e0', padding: 10, borderRadius: 10 },
  statusConnected: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  statusConnectedText: { fontWeight: '600', color: colors.text },
  dot: { width: 8, height: 8, borderRadius: 4 },
  dotGreen: { backgroundColor: colors.green },
  dotRed: { backgroundColor: colors.red },
  statusDetail: { color: colors.textMuted, fontSize: 13, marginTop: 2 },
  screenTimeRow: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 },
  screenTimeValue: { fontSize: 28, fontWeight: '700', color: colors.navy },
  screenTimeLimit: { color: colors.textMuted, fontSize: 13 },
  progressTrack: { backgroundColor: '#e6e9f0', borderRadius: 6, height: 8, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.blueLight, borderRadius: 6 },
  progressFillDark: { backgroundColor: colors.navy },
  progressCaption: { color: colors.textMuted, fontSize: 12, marginTop: 8 },
  barChart: { flexDirection: 'row', alignItems: 'flex-end', gap: 12, height: 130, marginBottom: 8 },
  barCol: { flex: 1, alignItems: 'center', justifyContent: 'flex-end', height: '100%' },
  bar: { width: '100%', maxWidth: 40, backgroundColor: colors.blueLight, borderRadius: 6 },
  barLabel: { marginTop: 8, fontSize: 12, color: colors.textMuted },
  appRow: { marginBottom: 14 },
  appRowHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  appRowText: { fontSize: 13, color: colors.text },
  alertList: { gap: 10 },
  controlLabel: { fontSize: 13, color: colors.textMuted, marginBottom: 8 },
  limitRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 16 },
  limitInput: {
    width: 64,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#d8dce3',
    borderRadius: 8,
    fontSize: 14,
  },
  btnSave: { backgroundColor: colors.blueLight, paddingHorizontal: 16, paddingVertical: 9, borderRadius: 8 },
  btnSaveText: { color: colors.white, fontWeight: '600' },
  blockedAppsLine: { fontSize: 13, color: colors.textMuted, marginBottom: 18 },
  btnEmergency: { backgroundColor: colors.red, paddingVertical: 14, borderRadius: 12, alignItems: 'center' },
  btnUnlock: { backgroundColor: colors.green, paddingVertical: 14, borderRadius: 12, alignItems: 'center' },
  btnActionText: { color: colors.white, fontWeight: '700', fontSize: 14 },
})
