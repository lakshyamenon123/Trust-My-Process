import { Link } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, Award, Zap, Target, ArrowRight, Lightbulb } from 'lucide-react'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { studentProfile, interests, strengths, skills, careers, progress } from '@/data/studentData'

function SectionHeader({ title, actionLabel, actionTo }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="font-display text-base font-semibold text-ink">{title}</h2>
      {actionTo && (
        <Link to={actionTo} className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
          {actionLabel} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  )
}

const STRENGTH_COLORS = ['bg-primary', 'bg-accent', 'bg-highlight', 'bg-primary-deep']

export default function ParentDashboard() {
  const avgStrength = Math.round(strengths.reduce((sum, s) => sum + s.level, 0) / strengths.length)
  const topMatch = Math.max(...careers.map((c) => c.matchPct))
  const firstName = studentProfile.name.split(' ')[0]

  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-10">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-primary-deep via-primary to-accent p-8 text-white shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 font-display text-lg font-bold backdrop-blur">
              {studentProfile.initials}
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold">{firstName}'s Development</h1>
              <p className="text-sm text-white/80">
                {studentProfile.grade} · {studentProfile.streak}-day streak · Level {studentProfile.level}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <ProgressRing value={progress.overall} size={80} trackClass="stroke-white/25" progressClass="stroke-white">
              <span className="font-display text-lg font-bold text-white">{progress.overall}%</span>
            </ProgressRing>
            <p className="mt-1 text-xs text-white/80">overall</p>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card className="flex items-center gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">{progress.overall}%</p>
            <p className="text-xs text-muted">Overall progress</p>
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
            <p className="text-xs text-muted">Skills tracked</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-deep/10 text-primary-deep">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">{topMatch}%</p>
            <p className="text-xs text-muted">Top career match</p>
          </div>
        </Card>
      </div>

      {/* Progress over time */}
      <Card className="p-6">
        <SectionHeader title="Progress over time" actionLabel="Details" actionTo="/parent/progress" />
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={progress.weeklyTrend} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="parentTrendFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5145cd" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#5145cd" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4ee" />
              <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#6b6a85' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#6b6a85' }} axisLine={false} tickLine={false} width={32} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e4e4ee', fontSize: 12 }} />
              <Area type="monotone" dataKey="score" stroke="#5145cd" strokeWidth={2} fill="url(#parentTrendFill)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Interests */}
      <Card className="p-6">
        <SectionHeader title="Child's Interests" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {interests.map(({ id, title, icon: Icon, level, category }) => (
            <Link
              key={id}
              to={`/parent/interest/${id}`}
              className="flex items-center gap-3 rounded-xl bg-bg-soft p-4 transition-colors hover:bg-primary/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="text-xs text-muted">{category}</p>
              </div>
              <ProgressRing value={level} size={36} strokeWidth={4} showLabel={false} />
            </Link>
          ))}
        </div>
      </Card>

      {/* Strengths */}
      <Card className="p-6">
        <SectionHeader title="Strengths & Talents" />
        <div className="space-y-4">
          {strengths.map(({ id, subject, level, delta }, index) => (
            <Link key={id} to={`/parent/strength/${id}`} className="block">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{subject}</span>
                <span className="text-muted">
                  {level}%{delta ? <span className="ml-1.5 font-medium text-accent">(+{delta})</span> : null}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-bg-soft">
                <div
                  className={`h-full rounded-full ${STRENGTH_COLORS[index % STRENGTH_COLORS.length]}`}
                  style={{ width: `${level}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
      </Card>

      {/* Skills */}
      <Card className="p-6">
        <SectionHeader title="Skills Development" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {skills.map(({ id, name, icon: Icon, level }) => (
            <Link
              key={id}
              to={`/parent/skill/${id}`}
              className="flex items-center gap-3 rounded-xl bg-bg-soft p-4 transition-colors hover:bg-primary/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-highlight/10 text-highlight">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">{name}</p>
                <p className="text-xs text-muted">{level}%</p>
              </div>
            </Link>
          ))}
        </div>
      </Card>

      {/* Careers */}
      <Card className="p-6">
        <SectionHeader title="Career Interests" />
        <div className="space-y-2">
          {careers.map(({ id, title, icon: Icon, category, matchPct, salaryRange }) => (
            <Link
              key={id}
              to={`/parent/career/${id}`}
              className="flex items-center gap-3 rounded-xl bg-bg-soft p-4 transition-colors hover:bg-primary/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-deep/10 text-primary-deep">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="text-xs text-muted">{category} · {salaryRange}</p>
              </div>
              <span className="text-sm font-semibold text-accent">{matchPct}%</span>
            </Link>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6">
        <SectionHeader title="Activities & Achievements" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {progress.achievements.map(({ title, icon: Icon, date }) => (
            <div key={title} className="flex flex-col items-center gap-2 rounded-xl bg-bg-soft p-4 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-highlight/10 text-highlight">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold text-ink">{title}</p>
              <p className="text-[10px] text-muted">{date}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Insights */}
      <Card className="p-6">
        <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
          <Lightbulb className="h-4 w-4 text-primary" />
          Personalized Insights
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
  )
}
