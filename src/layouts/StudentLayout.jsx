import { Outlet, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Sparkles, Star, Zap, Briefcase, TrendingUp } from 'lucide-react'
import AppShell from '@/components/AppShell'

const navItems = [
  { to: '/student', label: 'Home', icon: LayoutDashboard },
  { to: '/student/interests', label: 'Interests', icon: Sparkles },
  { to: '/student/strengths', label: 'Strengths', icon: Star },
  { to: '/student/skills', label: 'Skills', icon: Zap },
  { to: '/student/careers', label: 'Careers', icon: Briefcase },
  { to: '/student/progress', label: 'Progress', icon: TrendingUp },
]

export default function StudentLayout() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('ttp_role')
    navigate('/login')
  }

  return (
    <AppShell navItems={navItems} roleLabel="Student View" onLogout={handleLogout}>
      <Outlet />
    </AppShell>
  )
}
