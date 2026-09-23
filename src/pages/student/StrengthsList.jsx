import { Link } from 'react-router-dom'
import { TrendingUp } from 'lucide-react'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { strengths } from '@/data/studentData'
import { badgeStyle } from '@/lib/colors'

export default function StrengthsList() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">My Strengths</h1>
        <p className="text-sm text-muted">Subjects and skills you perform well in.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map(({ id, subject, icon: Icon, level, delta, description, category, color }) => (
          <Link key={id} to={`/student/strengths/${id}`}>
            <Card className="flex h-full flex-col p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={badgeStyle(color)}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-base font-semibold text-ink">{subject}</p>
                  <p className="text-xs text-muted">{category}</p>
                </div>
              </div>
              <p className="mt-3 flex-1 text-xs text-muted line-clamp-2">{description}</p>
              <div className="mt-4 flex items-center justify-between">
                <ProgressRing value={level} size={44} strokeWidth={4} color={color} showLabel={false} />
                {delta ? (
                  <span className="flex items-center gap-1 text-sm font-semibold text-accent">
                    <TrendingUp className="h-4 w-4" />
                    +{delta}
                  </span>
                ) : null}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
