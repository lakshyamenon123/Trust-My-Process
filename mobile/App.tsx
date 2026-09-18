import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { AppProvider, useApp } from './src/context/AppContext'
import Login from './src/screens/Login'
import ParentDashboard from './src/screens/ParentDashboard'
import ChildDevice from './src/screens/ChildDevice'

function Screens() {
  const { view } = useApp()
  if (view === 'parent') return <ParentDashboard />
  if (view === 'child') return <ChildDevice />
  return <Login />
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <AppProvider>
          <Screens />
        </AppProvider>
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
