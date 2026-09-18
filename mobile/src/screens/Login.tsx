import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useApp } from '../context/AppContext'
import { colors } from '../theme'

export default function Login() {
  const { setView } = useApp()

  // no actual auth here — this screen just picks which demo you want to see
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.icon}>🛡️</Text>
        <Text style={styles.title}>Trust the Process</Text>
        <Text style={styles.subtitle}>Parental monitoring & family safety</Text>
        <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={() => setView('parent')}>
          <Text style={styles.btnText}>👨‍💼 Parent Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnSecondary]} onPress={() => setView('child')}>
          <Text style={styles.btnText}>👧 Child Device (Demo)</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
    padding: 24,
  },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 20,
    padding: 36,
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
    shadowColor: '#1e2846',
    shadowOpacity: 0.12,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  icon: { fontSize: 44, marginBottom: 14 },
  title: { color: colors.navy, fontSize: 26, fontWeight: '700', marginBottom: 6 },
  subtitle: { color: colors.textMuted, marginBottom: 28, textAlign: 'center' },
  btn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  btnPrimary: { backgroundColor: colors.blueLight },
  btnSecondary: { backgroundColor: colors.navy },
  btnText: { color: colors.white, fontSize: 15, fontWeight: '600' },
})
