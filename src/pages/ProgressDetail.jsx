import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { progress } from '@/data/studentData'

export default function ProgressDetail() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Progress & Development</h1>
        <p className="text-sm text-muted">Your growth over time.</p>
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
              <AreaChart data={progress.weeklyTrend} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5145cd" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#5145cd" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#6b6a85' }} axisLine={false} tickLine={false} />
                <Area type="monotone" dataKey="score" stroke="#5145cd" strokeWidth={2.5} fill="url(#trendFill)" />
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
                <span className="text-muted">
                  {s.level}%{s.delta ? <span className="ml-1.5 font-medium text-accent">(+{s.delta})</span> : null}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-bg-soft">
                <div className="h-full rounded-full bg-primary" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
