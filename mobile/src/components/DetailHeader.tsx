import { View, Text, StyleSheet } from 'react-native'
import { colors, fonts } from '../theme'
import type { IconType } from '../data/studentData'
import IconBadge from './IconBadge'

export default function DetailHeader({
  icon,
  title,
  subtitle,
  color = colors.primary,
}: {
  icon: IconType
  title: string
  subtitle?: string
  color?: string
}) {
  return (
    <View style={styles.wrap}>
      <IconBadge icon={icon} size={56} color={color} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 8 },
  text: { flex: 1, gap: 4 },
  title: { fontFamily: fonts.display, fontSize: 19, color: colors.ink },
  subtitle: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, lineHeight: 18 },
})
