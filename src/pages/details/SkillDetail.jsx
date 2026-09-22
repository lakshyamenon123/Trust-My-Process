import { useParams, useLocation, Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import DetailShell from '@/components/DetailShell'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { skills, careers, findById } from '@/data/studentData'

export default function SkillDetail() {
  const { id } = useParams()
  const location = useLocation()
  const isParent = location.pathname.startsWith('/parent')
  const item = findById(skills, id)

  if (!item) return <p className="text-sm text-muted">Skill not found.</p>

  const related = careers.filter((c) => c.relatedSkills.includes(item.id))

  return (
    <DetailShell icon={item.icon} title={item.name} subtitle={item.category} accent="bg-highlight/10 text-highlight">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto]">
        <Card className="p-6">
          <h2 className="font-display text-base font-semibold text-ink">Overview</h2>
          <p className="mt-2 text-sm text-muted">{item.description}</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <ProgressRing value={item.level} size={88} progressClass="stroke-highlight" />
          <p className="mt-2 text-xs font-medium text-muted">Skill level</p>
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
          <h2 className="font-display text-base font-semibold text-ink">Careers that use this skill</h2>
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
