import { useParams, useLocation, Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, TrendingUp, Minus } from 'lucide-react'
import DetailShell from '@/components/DetailShell'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { strengths, careers, findById } from '@/data/studentData'

export default function StrengthDetail() {
  const { id } = useParams()
  const location = useLocation()
  const isParent = location.pathname.startsWith('/parent')
  const item = findById(strengths, id)

  if (!item) return <p className="text-sm text-muted">Strength not found.</p>

  const related = item.relatedCareers.map((cid) => findById(careers, cid)).filter(Boolean)

  return (
    <DetailShell icon={item.icon} title={item.subject} subtitle="Strength" accent="bg-accent/10 text-accent">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto]">
        <Card className="p-6">
          <h2 className="font-display text-base font-semibold text-ink">Overview</h2>
          <p className="mt-2 text-sm text-muted">{item.description}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
            {item.trend === 'up' ? <TrendingUp className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5" />}
            {item.trend === 'up' ? 'Trending up' : 'Holding steady'}
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <ProgressRing value={item.level} size={88} progressClass="stroke-accent" />
          <p className="mt-2 text-xs font-medium text-muted">Performance</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">Evidence</h2>
        <ul className="mt-3 space-y-2">
          {item.evidence.map((e) => (
            <li key={e} className="flex items-start gap-2 text-sm text-ink">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {e}
            </li>
          ))}
        </ul>
      </Card>

      {related.length > 0 && (
        <Card className="p-6">
          <h2 className="font-display text-base font-semibold text-ink">Related careers</h2>
          <div className="mt-3 space-y-2">
            {related.map((c) => (
              <Link
                key={c.id}
                to={isParent ? `/parent/career/${c.id}` : `/student/careers/${c.id}`}
                className="flex items-center justify-between rounded-xl bg-bg-soft p-3 transition-colors hover:bg-primary/5"
              >
                <span className="text-sm font-medium text-ink">{c.title}</span>
                <ArrowRight className="h-4 w-4 text-muted" />
              </Link>
            ))}
          </div>
        </Card>
      )}
    </DetailShell>
  )
}
