import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Minus } from 'lucide-react'
import Card from '@/components/Card'
import { strengths } from '@/data/studentData'
import { badgeStyle } from '@/lib/colors'

export default function StrengthsList() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Strengths</h1>
        <p className="text-sm text-muted">Subjects and areas where performance stands out.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {strengths.map(({ id, subject, icon: Icon, level, delta, trend, description, color }) => (
          <Link key={id} to={`/student/strengths/${id}`}>
            <Card className="p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={badgeStyle(color)}>
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted" />
              </div>
              <p className="mt-4 font-display text-base font-semibold text-ink">{subject}</p>
              <p className="mt-1 text-xs text-muted line-clamp-2">{description}</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-soft">
                  <div className="h-full rounded-full" style={{ width: `${level}%`, backgroundColor: color }} />
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-muted">
                  {trend === 'up' ? <TrendingUp className="h-3.5 w-3.5" style={{ color }} /> : <Minus className="h-3.5 w-3.5" />}
                  {level}%{delta ? <span className="text-accent">(+{delta})</span> : null}
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
