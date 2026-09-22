import { View, StyleSheet } from 'react-native'
import { colors } from '../theme'
import type { IconType } from '../data/studentData'

export default function IconBadge({ icon: Icon, size = 44, color = colors.primary }: { icon: IconType; size?: number; color?: string }) {
  return (
    <View style={[styles.badge, { width: size, height: size, borderRadius: size * 0.32, backgroundColor: `${color}1a` }]}>
      <Icon size={size * 0.5} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  badge: { alignItems: 'center', justifyContent: 'center' },
})
