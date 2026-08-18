import { AppProvider, useApp } from './context/AppContext'
import Login from './components/Login'
import ParentDashboard from './components/ParentDashboard'
import ChildDevice from './components/ChildDevice'
import './App.css'

function Screens() {
  const { view } = useApp()
  if (view === 'parent') return <ParentDashboard />
  if (view === 'child') return <ChildDevice />
  return <Login />
}

export default function App() {
  return (
    <AppProvider>
      <Screens />
    </AppProvider>
  )
}
