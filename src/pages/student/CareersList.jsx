import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { careers } from '@/data/studentData'

export default function CareersList() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Career Interests</h1>
        <p className="text-sm text-muted">Careers matched to your interests and strengths.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {careers.map(({ id, title, icon: Icon, category, matchPct, salaryRange, description }) => (
          <Link key={id} to={`/student/careers/${id}`}>
            <Card className="flex h-full flex-col p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-deep/10 text-primary-deep">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-base font-semibold text-ink">{title}</p>
                  <p className="text-xs text-muted">{category}</p>
                </div>
              </div>
              <p className="mt-3 flex-1 text-xs text-muted line-clamp-2">{description}</p>
              <div className="mt-4 flex items-center justify-between">
                <ProgressRing value={matchPct} size={44} strokeWidth={4} progressClass="stroke-primary-deep">
                  <span className="font-display text-[10px] font-bold text-ink">{matchPct}%</span>
                </ProgressRing>
                <div className="text-right">
                  <p className="text-xs font-semibold text-accent">{matchPct}% match</p>
                  <p className="text-xs text-muted">{salaryRange}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
