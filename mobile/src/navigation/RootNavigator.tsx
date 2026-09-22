import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import StudentTabs from './StudentTabs'
import ParentTabs from './ParentTabs'
import InterestsListScreen from '../screens/lists/InterestsListScreen'
import StrengthsListScreen from '../screens/lists/StrengthsListScreen'
import SkillsListScreen from '../screens/lists/SkillsListScreen'
import CareersListScreen from '../screens/lists/CareersListScreen'
import InterestDetailScreen from '../screens/details/InterestDetailScreen'
import StrengthDetailScreen from '../screens/details/StrengthDetailScreen'
import SkillDetailScreen from '../screens/details/SkillDetailScreen'
import CareerDetailScreen from '../screens/details/CareerDetailScreen'
import { colors, fonts } from '../theme'
import type { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: colors.primaryDeep },
        headerTintColor: colors.white,
        headerTitleStyle: { fontFamily: fonts.displaySemibold, fontSize: 17 },
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="StudentTabs" component={StudentTabs} options={{ headerShown: false }} />
      <Stack.Screen name="ParentTabs" component={ParentTabs} options={{ headerShown: false }} />
      <Stack.Screen name="InterestsList" component={InterestsListScreen} options={{ title: 'Interests' }} />
      <Stack.Screen name="InterestDetail" component={InterestDetailScreen} options={{ title: 'Interest' }} />
      <Stack.Screen name="StrengthsList" component={StrengthsListScreen} options={{ title: 'Strengths' }} />
      <Stack.Screen name="StrengthDetail" component={StrengthDetailScreen} options={{ title: 'Strength' }} />
      <Stack.Screen name="SkillsList" component={SkillsListScreen} options={{ title: 'Skills' }} />
      <Stack.Screen name="SkillDetail" component={SkillDetailScreen} options={{ title: 'Skill' }} />
      <Stack.Screen name="CareersList" component={CareersListScreen} options={{ title: 'Careers' }} />
      <Stack.Screen name="CareerDetail" component={CareerDetailScreen} options={{ title: 'Career' }} />
    </Stack.Navigator>
  )
}
