import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, LineChart } from 'lucide-react-native'
import ParentDashboardScreen from '../screens/parent/ParentDashboardScreen'
import ProgressScreen from '../screens/ProgressScreen'
import LogoutButton from '../components/LogoutButton'
import Logo from '../components/Logo'
import { colors, fonts } from '../theme'
import type { ParentTabParamList } from './types'

const Tab = createBottomTabNavigator<ParentTabParamList>()

export default function ParentTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primaryDeep },
        headerTintColor: colors.white,
        headerTitleStyle: { fontFamily: fonts.displaySemibold, fontSize: 17 },
        headerTitle: () => <Logo size={26} />,
        headerRight: () => <LogoutButton />,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
        tabBarLabelStyle: { fontFamily: fonts.bodyMedium, fontSize: 11 },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={ParentDashboardScreen}
        options={{ tabBarIcon: ({ color, size }) => <Home color={color} size={size} /> }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{ tabBarIcon: ({ color, size }) => <LineChart color={color} size={size} /> }}
      />
    </Tab.Navigator>
  )
}
