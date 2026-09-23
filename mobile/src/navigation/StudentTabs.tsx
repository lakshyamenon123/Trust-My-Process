import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Compass, LineChart } from 'lucide-react-native'
import StudentDashboardScreen from '../screens/student/StudentDashboardScreen'
import ExploreScreen from '../screens/student/ExploreScreen'
import ProgressScreen from '../screens/ProgressScreen'
import LogoutButton from '../components/LogoutButton'
import Logo from '../components/Logo'
import { colors, fonts } from '../theme'
import type { StudentTabParamList } from './types'

const Tab = createBottomTabNavigator<StudentTabParamList>()

export default function StudentTabs() {
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
        component={StudentDashboardScreen}
        options={{ tabBarIcon: ({ color, size }) => <Home color={color} size={size} /> }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ tabBarIcon: ({ color, size }) => <Compass color={color} size={size} /> }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{ tabBarIcon: ({ color, size }) => <LineChart color={color} size={size} /> }}
      />
    </Tab.Navigator>
  )
}
