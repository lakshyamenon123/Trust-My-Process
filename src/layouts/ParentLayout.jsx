import { Outlet, useNavigate } from 'react-router-dom'
import { LayoutDashboard, TrendingUp, MessageSquare, Settings } from 'lucide-react'
import AppShell from '@/components/AppShell'

const navItems = [
  { to: '/parent', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/parent/progress', label: 'Progress', icon: TrendingUp },
  { to: '/parent/message', label: 'Message', icon: MessageSquare },
  { to: '/parent/settings', label: 'Settings', icon: Settings },
]

export default function ParentLayout() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('ttp_role')
    navigate('/login')
  }

  return (
    <AppShell navItems={navItems} roleLabel="Parent View" onLogout={handleLogout}>
      <Outlet />
    </AppShell>
  )
}
