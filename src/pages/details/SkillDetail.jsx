import { useParams, useLocation, Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Sparkles, Flame } from 'lucide-react'
import DetailShell from '@/components/DetailShell'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { skills, careers, findById } from '@/data/studentData'
import { TOTAL_DAYS } from '@/data/growthPlanData'
import { useGrowthPlan } from '@/hooks/useGrowthPlan'

export default function SkillDetail() {
  const { id } = useParams()
  const location = useLocation()
  const isParent = location.pathname.startsWith('/parent')
  const item = findById(skills, id)
  const plan = useGrowthPlan(id)

  if (!item) return <p className="text-sm text-muted">Skill not found.</p>

  const related = careers.filter((c) => c.relatedSkills.includes(item.id))

  return (
    <DetailShell icon={item.icon} title={item.name} subtitle={item.category} color={item.color}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto]">
        <Card className="p-6">
          <h2 className="font-display text-base font-semibold text-ink">Overview</h2>
          <p className="mt-2 text-sm text-muted">{item.description}</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <ProgressRing value={item.level} size={88} color={item.color} />
          <p className="mt-2 text-xs font-medium text-muted">Skill level</p>
        </Card>
      </div>

      {!isParent && (
        <Card className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-ink">10-Week Growth Plan</p>
                <p className="text-xs text-muted">
                  {plan.totalCompleted === 0
                    ? 'Small daily steps that build this skill over 10 weeks.'
                    : `${plan.totalCompleted}/${TOTAL_DAYS} days · ${plan.streak}-day streak`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {plan.streak > 0 && (
                <span className="flex items-center gap-1 text-xs font-semibold text-highlight">
                  <Flame className="h-3.5 w-3.5" /> {plan.streak}
                </span>
              )}
              <Link
                to={`/student/skills/${id}/growth-plan`}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: item.color }}
              >
                {plan.totalCompleted === 0 ? 'Start plan' : plan.isComplete ? 'View report' : 'Continue'}
              </Link>
            </div>
          </div>
        </Card>
      )}

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
