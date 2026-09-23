import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { GraduationCap } from 'lucide-react-native'
import { colors, fonts } from '../theme'

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <LinearGradient
      colors={['#10b981', '#3b82f6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.mark, { width: size, height: size, borderRadius: size * 0.32 }]}
    >
      <GraduationCap size={size * 0.56} color={colors.white} />
    </LinearGradient>
  )
}

export default function Logo({ size = 28, textColor = colors.white }: { size?: number; textColor?: string }) {
  return (
    <View style={styles.row}>
      <LogoMark size={size} />
      <Text style={[styles.brand, { color: textColor, fontSize: size * 0.5 }]}>Trust the Process</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mark: { alignItems: 'center', justifyContent: 'center' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  brand: { fontFamily: fonts.displaySemibold },
})
