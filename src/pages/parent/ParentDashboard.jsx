import { Link } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Flame, ArrowRight, Lightbulb } from 'lucide-react'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { studentProfile, interests, strengths, skills, careers, progress } from '@/data/studentData'

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="font-display text-base font-semibold text-ink">{title}</h2>
      {subtitle && <p className="text-xs text-muted">{subtitle}</p>}
    </div>
  )
}

export default function ParentDashboard() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-10">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-primary-deep via-primary to-accent p-8 text-white shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 font-display text-xl font-bold backdrop-blur">
              {studentProfile.initials}
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold">{studentProfile.name}</h1>
              <p className="text-sm text-white/80">{studentProfile.grade}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-white/80">
                <Flame className="h-3.5 w-3.5 text-highlight" />
                {studentProfile.streak}-day streak
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <ProgressRing value={progress.overall} size={80} trackClass="stroke-white/25" progressClass="stroke-white">
              <span className="font-display text-lg font-bold text-white">{progress.overall}%</span>
            </ProgressRing>
            <p className="mt-1 text-xs text-white/80">Overall progress</p>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card className="p-5">
          <p className="text-xs font-medium text-muted">Interests</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{interests.length}</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-medium text-muted">Strengths</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{strengths.length}</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-medium text-muted">Skills</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{skills.length}</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-medium text-muted">Career Matches</p>
          <p className="mt-2 font-display text-2xl font-bold text-ink">{careers.length}</p>
        </Card>
      </div>

      {/* Progress over time */}
      <Card className="p-6">
        <SectionHeader title="Progress over time" subtitle="Weekly performance trend" />
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={progress.weeklyTrend} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="parentTrendFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0fb67d" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#0fb67d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4ee" />
              <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#6b6a85' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#6b6a85' }} axisLine={false} tickLine={false} width={32} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e4e4ee', fontSize: 12 }} />
              <Area type="monotone" dataKey="score" stroke="#0fb67d" strokeWidth={2} fill="url(#parentTrendFill)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <Link
          to="/parent/progress"
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          View full progress <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </Card>

      {/* Interests */}
      <Card className="p-6">
        <SectionHeader title="Interests" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {interests.map(({ id, title, icon: Icon, level, summary }) => (
            <Link
              key={id}
              to={`/parent/interest/${id}`}
              className="flex items-center gap-3 rounded-xl bg-bg-soft p-3 transition-colors hover:bg-primary/5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="truncate text-xs text-muted">{summary}</p>
              </div>
              <span className="text-xs font-medium text-muted">{level}%</span>
            </Link>
          ))}
        </div>
      </Card>

      {/* Strengths */}
      <Card className="p-6">
        <SectionHeader title="Strengths" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {strengths.map(({ id, subject, icon: Icon, level }) => (
            <Link
              key={id}
              to={`/parent/strength/${id}`}
              className="flex items-center gap-3 rounded-xl bg-bg-soft p-3 transition-colors hover:bg-primary/5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-4 w-4" />
              </div>
              <p className="flex-1 text-sm font-semibold text-ink">{subject}</p>
              <span className="text-xs font-medium text-muted">{level}%</span>
            </Link>
          ))}
        </div>
      </Card>

      {/* Skills */}
      <Card className="p-6">
        <SectionHeader title="Skills & Talents" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {skills.map(({ id, name, icon: Icon, level }) => (
            <Link
              key={id}
              to={`/parent/skill/${id}`}
              className="flex items-center gap-3 rounded-xl bg-bg-soft p-3 transition-colors hover:bg-primary/5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-highlight/10 text-highlight">
                <Icon className="h-4 w-4" />
              </div>
              <p className="flex-1 text-sm font-semibold text-ink">{name}</p>
              <span className="text-xs font-medium text-muted">{level}%</span>
            </Link>
          ))}
        </div>
      </Card>

      {/* Careers */}
      <Card className="p-6">
        <SectionHeader title="Career Interests" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {careers.map(({ id, title, icon: Icon, matchPct }) => (
            <Link
              key={id}
              to={`/parent/career/${id}`}
              className="flex items-center gap-3 rounded-xl bg-bg-soft p-3 transition-colors hover:bg-primary/5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-deep/10 text-primary-deep">
                <Icon className="h-4 w-4" />
              </div>
              <p className="flex-1 text-sm font-semibold text-ink">{title}</p>
              <span className="text-xs font-medium text-muted">{matchPct}% match</span>
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
          Personalized insights
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
