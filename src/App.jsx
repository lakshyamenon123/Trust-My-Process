import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MonitoringProvider } from './context/MonitoringContext'
import Login from './pages/Login'
import Phone from './pages/Phone'
import StudentLayout from './layouts/StudentLayout'
import ParentLayout from './layouts/ParentLayout'
import StudentDashboard from './pages/student/StudentDashboard'
import InterestsList from './pages/student/InterestsList'
import StrengthsList from './pages/student/StrengthsList'
import SkillsList from './pages/student/SkillsList'
import CareersList from './pages/student/CareersList'
import ParentDashboard from './pages/parent/ParentDashboard'
import InterestDetail from './pages/details/InterestDetail'
import StrengthDetail from './pages/details/StrengthDetail'
import SkillDetail from './pages/details/SkillDetail'
import CareerDetail from './pages/details/CareerDetail'
import ProgressDetail from './pages/ProgressDetail'
import Settings from './pages/parent/Settings'
import Monitoring from './pages/parent/Monitoring'
import GrowthPlanOverview from './pages/student/GrowthPlanOverview'
import GrowthPlanDay from './pages/student/GrowthPlanDay'

function RoleRedirect() {
  const role = localStorage.getItem('ttp_role')
  if (role === 'parent') return <Navigate to="/parent" replace />
  if (role === 'student') return <Navigate to="/student" replace />
  return <Navigate to="/login" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <MonitoringProvider>
        <Routes>
          <Route path="/" element={<RoleRedirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/phone" element={<Phone />} />

          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="interests" element={<InterestsList />} />
            <Route path="interests/:id" element={<InterestDetail />} />
            <Route path="strengths" element={<StrengthsList />} />
            <Route path="strengths/:id" element={<StrengthDetail />} />
            <Route path="skills" element={<SkillsList />} />
            <Route path="skills/:id" element={<SkillDetail />} />
            <Route path="skills/:id/growth-plan" element={<GrowthPlanOverview />} />
            <Route path="skills/:id/growth-plan/day/:day" element={<GrowthPlanDay />} />
            <Route path="careers" element={<CareersList />} />
            <Route path="careers/:id" element={<CareerDetail />} />
            <Route path="progress" element={<ProgressDetail />} />
          </Route>

          <Route path="/parent" element={<ParentLayout />}>
            <Route index element={<ParentDashboard />} />
            <Route path="interest/:id" element={<InterestDetail />} />
            <Route path="strength/:id" element={<StrengthDetail />} />
            <Route path="skill/:id" element={<SkillDetail />} />
            <Route path="career/:id" element={<CareerDetail />} />
            <Route path="progress" element={<ProgressDetail />} />
            <Route path="monitoring" element={<Monitoring />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MonitoringProvider>
    </BrowserRouter>
  )
}
