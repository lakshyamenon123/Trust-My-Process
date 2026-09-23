import { Link } from 'react-router-dom'
import { Flame, Zap, Star, Sparkles, Award, Target, ArrowRight, Lightbulb } from 'lucide-react'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { studentProfile, interests, strengths, skills, careers, progress } from '@/data/studentData'

function QuickLinkCard({ to, icon: Icon, accent, title, count, tags }) {
  return (
    <Card className="p-5">
      <Link to={to} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-base font-semibold text-ink">{title}</p>
            <p className="text-xs text-muted">{count} items</p>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-muted" />
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-bg-soft px-3 py-1 text-xs font-medium text-muted">
            {tag}
          </span>
        ))}
      </div>
    </Card>
  )
}

export default function StudentDashboard() {
  const xpPct = Math.round((studentProfile.xp / studentProfile.xpToNext) * 100)
  const avgStrength = Math.round(strengths.reduce((sum, s) => sum + s.level, 0) / strengths.length)
  const topMatch = Math.max(...careers.map((c) => c.matchPct))
  const firstName = studentProfile.name.split(' ')[0]

  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-10">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-primary-deep via-primary to-accent p-8 text-white shadow-card">
        <p className="text-sm text-white/80">Welcome back</p>
        <h1 className="font-display text-3xl font-bold">Hi, {firstName} 👋</h1>
        <p className="mt-1 text-sm text-white/80">
          Keep up the momentum — you're on a {studentProfile.streak}-day learning streak.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
            <Flame className="h-3.5 w-3.5 text-highlight" />
            {studentProfile.streak} day streak
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
            <Zap className="h-3.5 w-3.5" />
            Level {studentProfile.level}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
            <Star className="h-3.5 w-3.5" />
            {progress.achievements.length} achievements
          </span>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-white/80">
            <span>Level {studentProfile.level} progress</span>
            <span>{studentProfile.xp} / {studentProfile.xpToNext} XP</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-white transition-all" style={{ width: `${xpPct}%` }} />
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card className="flex items-center gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">{interests.length}</p>
            <p className="text-xs text-muted">Interests</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">{avgStrength}%</p>
            <p className="text-xs text-muted">Avg. strength</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-highlight/10 text-highlight">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">{skills.length}</p>
            <p className="text-xs text-muted">Skills</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-deep/10 text-primary-deep">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">{topMatch}%</p>
            <p className="text-xs text-muted">Top match</p>
          </div>
        </Card>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <QuickLinkCard
          to="/student/interests"
          icon={Sparkles}
          accent="bg-primary/10 text-primary"
          title="My Interests"
          count={interests.length}
          tags={interests.map((i) => i.title)}
        />
        <QuickLinkCard
          to="/student/strengths"
          icon={Award}
          accent="bg-accent/10 text-accent"
          title="My Strengths"
          count={strengths.length}
          tags={strengths.map((s) => s.subject)}
        />
        <QuickLinkCard
          to="/student/skills"
          icon={Zap}
          accent="bg-highlight/10 text-highlight"
          title="Skills & Talents"
          count={skills.length}
          tags={skills.map((s) => s.name)}
        />
        <QuickLinkCard
          to="/student/careers"
          icon={Target}
          accent="bg-primary-deep/10 text-primary-deep"
          title="Career Interests"
          count={careers.length}
          tags={careers.map((c) => c.title)}
        />
      </div>

      {/* Overall progress + insights */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr]">
        <Card className="flex flex-col items-center justify-center gap-2 p-6">
          <ProgressRing value={progress.overall} size={104} strokeWidth={9} />
          <p className="text-xs font-medium text-muted">Overall progress</p>
          <Link to="/student/progress" className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
            View details <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Card>

        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
            <Lightbulb className="h-4 w-4 text-primary" />
            Personalized for you
          </h2>
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
    </div>
  )
}
