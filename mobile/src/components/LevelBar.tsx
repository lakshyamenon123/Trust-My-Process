import { View, Text, StyleSheet } from 'react-native'
import { colors, fonts } from '../theme'

export default function LevelBar({ label, value, color = colors.primary }: { label?: string; value: number; color?: string }) {
  return (
    <View style={styles.wrap}>
      {label ? (
        <View style={styles.row}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.pct}>{value}%</Text>
        </View>
      ) : null}
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${Math.min(Math.max(value, 0), 100)}%`, backgroundColor: color }]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: { gap: 6 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { fontFamily: fonts.bodyMedium, color: colors.ink, fontSize: 13 },
  pct: { fontFamily: fonts.bodySemibold, color: colors.muted, fontSize: 13 },
  track: { height: 8, borderRadius: 999, backgroundColor: colors.bgSoft, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 999 },
})
