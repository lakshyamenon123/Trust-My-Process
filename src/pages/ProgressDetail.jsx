import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Award } from 'lucide-react'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { progress } from '@/data/studentData'

export default function ProgressDetail() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Progress</h1>
        <p className="text-sm text-muted">Growth over time, across every area being tracked.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr]">
        <Card className="flex flex-col items-center justify-center p-6">
          <ProgressRing value={progress.overall} size={104} strokeWidth={9} />
          <p className="mt-2 text-xs font-medium text-muted">Overall progress</p>
        </Card>

        <Card className="p-6">
          <h2 className="font-display text-base font-semibold text-ink">Weekly trend</h2>
          <div className="mt-4 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={progress.weeklyTrend} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5145cd" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#5145cd" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4ee" />
                <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#6b6a85' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#6b6a85' }} axisLine={false} tickLine={false} width={32} />
                <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e4e4ee', fontSize: 12 }} />
                <Area type="monotone" dataKey="score" stroke="#5145cd" strokeWidth={2} fill="url(#trendFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">By subject</h2>
        <div className="mt-4 space-y-4">
          {progress.subjects.map((s) => (
            <div key={s.name}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{s.name}</span>
                <span className="text-muted">{s.level}%</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-bg-soft">
                <div className="h-full rounded-full bg-primary" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">Milestones</h2>
        <div className="mt-4 space-y-5 border-l border-border/60 pl-5">
          {progress.milestones.map((m) => (
            <div key={m.title} className="relative">
              <span className="absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="text-xs font-medium text-muted">{m.date}</p>
              <p className="text-sm font-semibold text-ink">{m.title}</p>
              <p className="text-xs text-muted">{m.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">Achievements</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
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

      <Card className="p-6">
        <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
          <Award className="h-4 w-4 text-primary" />
          Recommendations
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
