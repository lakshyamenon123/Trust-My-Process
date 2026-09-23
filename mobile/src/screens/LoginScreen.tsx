import { useState } from 'react'
import { View, Text, Pressable, TextInput, StyleSheet, ScrollView } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { GraduationCap, Users } from 'lucide-react-native'
import { colors, fonts } from '../theme'
import { useSession } from '../context/SessionContext'
import { LogoMark } from '../components/Logo'
import type { RootStackParamList, Role } from '../navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>

export default function LoginScreen({ navigation }: Props) {
  const { login } = useSession()
  const [role, setRole] = useState<Role>('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function enter() {
    login(role)
    navigation.reset({ index: 0, routes: [{ name: role === 'student' ? 'StudentTabs' : 'ParentTabs' }] })
  }

  return (
    <ScrollView contentContainerStyle={styles.scroll} style={{ backgroundColor: colors.bgSoft }}>
      <View style={styles.hero}>
        <View style={styles.logoWrap}>
          <LogoMark size={56} />
        </View>
        <Text style={styles.brand}>Trust the Process</Text>
        <Text style={styles.tagline}>See every student's interests, strengths, and growth in one place.</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.roleSwitch}>
          <RoleButton label="Student" icon={GraduationCap} active={role === 'student'} onPress={() => setRole('student')} />
          <RoleButton label="Parent" icon={Users} active={role === 'parent'} onPress={() => setRole('parent')} />
        </View>

        <Pressable style={styles.googleButton} onPress={enter}>
          <View style={styles.googleG}>
            <Text style={styles.googleGText}>G</Text>
          </View>
          <Text style={styles.googleText}>Continue with Google</Text>
        </Pressable>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.muted}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.muted}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.primaryButton} onPress={enter}>
          <Text style={styles.primaryButtonText}>Sign in as {role === 'student' ? 'Student' : 'Parent'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

function RoleButton({
  label,
  icon: Icon,
  active,
  onPress,
}: {
  label: string
  icon: typeof GraduationCap
  active: boolean
  onPress: () => void
}) {
  return (
    <Pressable style={[styles.roleButton, active && styles.roleButtonActive]} onPress={onPress}>
      <Icon size={18} color={active ? colors.white : colors.muted} />
      <Text style={[styles.roleButtonText, active && styles.roleButtonTextActive]}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1, padding: 24, paddingTop: 72, gap: 32 },
  hero: { alignItems: 'center', gap: 10 },
  logoWrap: { marginBottom: 4 },
  brand: { fontFamily: fonts.display, fontSize: 24, color: colors.ink, textAlign: 'center' },
  tagline: { fontFamily: fonts.body, fontSize: 14, color: colors.muted, textAlign: 'center', maxWidth: 280 },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    gap: 16,
  },
  roleSwitch: { flexDirection: 'row', backgroundColor: colors.bgSoft, borderRadius: 14, padding: 4, gap: 4 },
  roleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 10,
  },
  roleButtonActive: { backgroundColor: colors.primary },
  roleButtonText: { fontFamily: fonts.bodyMedium, fontSize: 14, color: colors.muted },
  roleButtonTextActive: { color: colors.white },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 12,
  },
  googleG: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.bgSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleGText: { fontFamily: fonts.bodySemibold, fontSize: 12, color: colors.primary },
  googleText: { fontFamily: fonts.bodyMedium, fontSize: 14, color: colors.ink },
  dividerRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  dividerLine: { flex: 1, height: 1, backgroundColor: colors.border },
  dividerText: { fontFamily: fonts.body, fontSize: 12, color: colors.muted },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.ink,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
  },
  primaryButtonText: { fontFamily: fonts.bodySemibold, fontSize: 14, color: colors.white },
})
