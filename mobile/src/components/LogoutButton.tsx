import { Pressable } from 'react-native'
import { LogOut } from 'lucide-react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { useSession } from '../context/SessionContext'
import { colors } from '../theme'

export default function LogoutButton() {
  const navigation = useNavigation()
  const { logout } = useSession()

  function handleLogout() {
    logout()
    let root = navigation
    while (root.getParent()) root = root.getParent()!
    root.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Login' }] }))
  }

  return (
    <Pressable onPress={handleLogout} hitSlop={10} style={{ marginRight: 16 }}>
      <LogOut size={20} color={colors.white} />
    </Pressable>
  )
}
