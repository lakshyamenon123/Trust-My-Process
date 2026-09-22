import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { careers } from '@/data/studentData'

export default function CareersList() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Career Interests</h1>
        <p className="text-sm text-muted">Fields that match your interests, strengths, and skills.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {careers.map(({ id, title, icon: Icon, matchPct, salaryRange, description }) => (
          <Link key={id} to={`/student/careers/${id}`}>
            <Card className="flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5">
              <ProgressRing value={matchPct} size={56} strokeWidth={5} progressClass="stroke-primary-deep">
                <span className="font-display text-xs font-bold text-ink">{matchPct}%</span>
              </ProgressRing>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary-deep" />
                  <p className="font-display text-base font-semibold text-ink">{title}</p>
                </div>
                <p className="mt-1 text-xs text-muted line-clamp-2">{description}</p>
                <p className="mt-1 text-xs font-medium text-accent">{salaryRange}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted" />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
