import { Outlet, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Sparkles, Award, Zap, Target, TrendingUp } from 'lucide-react'
import AppShell from '@/components/AppShell'

const navItems = [
  { to: '/student', label: 'Home', icon: LayoutDashboard },
  { to: '/student/interests', label: 'Interests', icon: Sparkles },
  { to: '/student/strengths', label: 'Strengths', icon: Award },
  { to: '/student/skills', label: 'Skills', icon: Zap },
  { to: '/student/careers', label: 'Careers', icon: Target },
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
