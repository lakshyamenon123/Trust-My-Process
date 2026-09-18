import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme'
import type { Alert } from '../context/AppContext'

// pulled out of ParentDashboard/ChildDevice — was copy-pasted in both, bit me
// once already when I edited one and not the other
export default function AlertRow({ alert }: { alert: Alert }) {
  return (
    <View style={[styles.row, alert.type === 'warning' ? styles.warning : styles.info]}>
      <Text style={styles.icon}>{alert.type === 'warning' ? '⚠️' : 'ℹ️'}</Text>
      <View>
        <Text style={styles.text}>{alert.text}</Text>
        <Text style={styles.time}>{alert.time}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    borderRadius: 8,
    alignItems: 'flex-start',
  },
  warning: { backgroundColor: '#fdecec' },
  info: { backgroundColor: '#eaf1fd' },
  icon: { fontSize: 14 },
  text: { fontSize: 13, fontWeight: '500', color: colors.text },
  time: { fontSize: 11, color: colors.textMuted, marginTop: 2 },
})
