import { Link } from 'react-router-dom'
import { Flame, Sparkles, Star, Zap, Briefcase, ArrowRight } from 'lucide-react'
import Card from '@/components/Card'
import { studentProfile, interests, strengths, skills, careers, progress } from '@/data/studentData'

const SECTIONS = [
  { to: '/student/interests', label: 'Interests', icon: Sparkles, count: interests.length, accent: 'bg-primary/10 text-primary' },
  { to: '/student/strengths', label: 'Strengths', icon: Star, count: strengths.length, accent: 'bg-accent/10 text-accent' },
  { to: '/student/skills', label: 'Skills', icon: Zap, count: skills.length, accent: 'bg-highlight/10 text-highlight' },
  { to: '/student/careers', label: 'Careers', icon: Briefcase, count: careers.length, accent: 'bg-primary-deep/10 text-primary-deep' },
]

export default function StudentDashboard() {
  const xpPct = Math.round((studentProfile.xp / studentProfile.xpToNext) * 100)
  const topStrength = [...strengths].sort((a, b) => b.level - a.level)[0]
  const topCareer = [...careers].sort((a, b) => b.matchPct - a.matchPct)[0]

  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-10">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-primary-deep via-primary to-accent p-8 text-white shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm text-white/80">Welcome back,</p>
            <h1 className="font-display text-3xl font-bold">{studentProfile.name.split(' ')[0]} 👋</h1>
            <p className="mt-1 text-sm text-white/80">{studentProfile.grade}</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
            <Flame className="h-4 w-4 text-highlight" />
            {studentProfile.streak}-day streak
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-white/80">
            <span>Level {studentProfile.level}</span>
            <span>{studentProfile.xp} / {studentProfile.xpToNext} XP</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-white transition-all" style={{ width: `${xpPct}%` }} />
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card className="p-5">
          <p className="text-xs font-medium text-muted">Interests Explored</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{interests.length}</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-medium text-muted">Strongest Subject</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{topStrength.subject}</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-medium text-muted">Skills Tracked</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{skills.length}</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-medium text-muted">Top Career Match</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{topCareer.matchPct}%</p>
          <p className="text-xs text-muted">{topCareer.title}</p>
        </Card>
      </div>

      {/* Section cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {SECTIONS.map(({ to, label, icon: Icon, count, accent }) => (
          <Link key={to} to={to}>
            <Card className="flex items-center justify-between p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-4">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-ink">{label}</p>
                  <p className="text-xs text-muted">{count} tracked</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted" />
            </Card>
          </Link>
        ))}
      </div>

      {/* Recommendations */}
      <Card className="p-6">
        <h2 className="font-display text-lg font-bold text-ink">Recommended for you</h2>
        <p className="text-sm text-muted">Based on your recent activity and progress</p>
        <div className="mt-4 space-y-3">
          {progress.recommendations.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex items-start gap-3 rounded-xl bg-bg-soft p-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="text-xs text-muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
