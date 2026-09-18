import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useApp } from '../context/AppContext'
import { colors } from '../theme'

export default function Header() {
  const { view, setView } = useApp()
  const [now, setNow] = useState(new Date())

  // real clock, unlike the one on the phone mockup — this one's shown to the parent
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const dateStr = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })
  const timeStr = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' })

  return (
    <View style={styles.header}>
      <View style={styles.titleRow}>
        <Text style={styles.icon}>🛡️</Text>
        <View>
          <Text style={styles.title}>Trust the Process</Text>
          <Text style={styles.datetime}>
            {dateStr} · {timeStr}
          </Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.chip} onPress={() => setView(view === 'parent' ? 'child' : 'parent')}>
          <Text style={styles.chipText}>{view === 'parent' ? '📱 Child View' : '📊 Parent View'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chip} onPress={() => setView('login')}>
          <Text style={styles.chipText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.navy,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  icon: { fontSize: 24 },
  title: { color: colors.white, fontSize: 17, fontWeight: '700' },
  datetime: { color: colors.white, opacity: 0.75, fontSize: 11 },
  actions: { flexDirection: 'row', gap: 8 },
  chip: {
    backgroundColor: 'rgba(255,255,255,0.14)',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 8,
  },
  chipText: { color: colors.white, fontSize: 12, fontWeight: '600' },
})
