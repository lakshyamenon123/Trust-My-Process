import { StyleSheet, Text, View } from 'react-native'
import { useApp } from '../context/AppContext'
import { colors } from '../theme'

function TagRow({ items, color }: { items: string[]; color: string }) {
  return (
    <View style={styles.tagRow}>
      {items.map((label) => (
        <View style={[styles.tag, { backgroundColor: `${color}1a`, borderColor: color }]} key={label}>
          <Text style={[styles.tagText, { color }]}>{label}</Text>
        </View>
      ))}
    </View>
  )
}

function LevelBar({ label, level, color, note }: { label: string; level: number; color: string; note?: string }) {
  return (
    <View style={styles.levelRow}>
      <View style={styles.levelHeader}>
        <Text style={styles.levelLabel}>{label}</Text>
        <Text style={styles.levelPct}>{level}%</Text>
      </View>
      <View style={styles.levelTrack}>
        <View style={[styles.levelFill, { width: `${level}%`, backgroundColor: color }]} />
      </View>
      {note ? <Text style={styles.levelNote}>{note}</Text> : null}
    </View>
  )
}

export default function StudentInsights() {
  const { studentProfile } = useApp()
  const { interests, strengths, skills, careerInterests, progress } = studentProfile

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Student Interests & Strengths</Text>
      <Text style={styles.cardSubtitle}>Auto-updated from assessments, activities & achievements</Text>

      <Text style={styles.sectionLabel}>Interests</Text>
      <TagRow items={interests} color={colors.blueLight} />

      <Text style={styles.sectionLabel}>Areas of Strength</Text>
      {strengths.map((s) => (
        <LevelBar key={s.subject} label={s.subject} level={s.level} color={colors.navy} />
      ))}

      <Text style={styles.sectionLabel}>Skills & Talents</Text>
      {skills.map((s) => (
        <LevelBar key={s.name} label={s.name} level={s.level} color={colors.teal} />
      ))}

      <Text style={styles.sectionLabel}>Career Interests</Text>
      <TagRow items={careerInterests} color={colors.purple} />

      <Text style={styles.sectionLabel}>Progress & Development</Text>
      {progress.map((p) => (
        <LevelBar key={p.name} label={p.name} level={p.level} color={colors.orange} note={p.note} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
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
  cardTitle: { fontSize: 15, fontWeight: '700', color: colors.text },
  cardSubtitle: { fontSize: 12, color: colors.textMuted, marginTop: 2, marginBottom: 16 },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginTop: 14,
    marginBottom: 10,
  },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagText: { fontSize: 12, fontWeight: '600' },
  levelRow: { marginBottom: 12 },
  levelHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  levelLabel: { fontSize: 13, color: colors.text, fontWeight: '500' },
  levelPct: { fontSize: 12, color: colors.textMuted },
  levelTrack: { backgroundColor: '#e6e9f0', borderRadius: 6, height: 8, overflow: 'hidden' },
  levelFill: { height: '100%', borderRadius: 6 },
  levelNote: { fontSize: 11, color: colors.textMuted, marginTop: 4, fontStyle: 'italic' },
})
