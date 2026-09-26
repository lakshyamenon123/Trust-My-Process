import { useParams, useLocation, Link } from 'react-router-dom'
import { ArrowRight, DollarSign, Compass, GraduationCap, Smartphone } from 'lucide-react'
import DetailShell from '@/components/DetailShell'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { careers, skills, findById } from '@/data/studentData'
import { badgeStyle } from '@/lib/colors'

export default function CareerDetail() {
  const { id } = useParams()
  const location = useLocation()
  const isParent = location.pathname.startsWith('/parent')
  const item = findById(careers, id)

  if (!item) return <p className="text-sm text-muted">Career not found.</p>

  const related = item.relatedSkills.map((sid) => findById(skills, sid)).filter(Boolean)

  return (
    <DetailShell icon={item.icon} title={item.title} subtitle="Career match" color={item.color}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto]">
        <Card className="p-6">
          <h2 className="font-display text-base font-semibold text-ink">Overview</h2>
          <p className="mt-2 text-sm text-muted">{item.description}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: item.color }}>
            <DollarSign className="h-4 w-4" />
            {item.avgSalary}
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-6">
          <ProgressRing value={item.matchPct} size={88} color={item.color} />
          <p className="mt-2 text-xs font-medium text-muted">Match score</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">A day in the life</h2>
        <ul className="mt-3 space-y-2">
          {item.dayInLife.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-ink">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
              {d}
            </li>
          ))}
        </ul>
      </Card>

      {item.afterTenth && (
        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
            <Compass className="h-4 w-4" style={{ color: item.color }} />
            What to choose after 10th
          </h2>
          <p className="mt-3 rounded-xl bg-bg-soft p-3 text-sm text-ink">{item.afterTenth}</p>
        </Card>
      )}

      {item.educationPath?.length > 0 && (
        <Card className="p-6">
          <h2 className="font-display text-base font-semibold text-ink">Education pathway</h2>
          <ol className="mt-3 space-y-3">
            {item.educationPath.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-ink">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={badgeStyle(item.color)}
                >
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </Card>
      )}

      {item.topUniversities?.length > 0 && (
        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
            <GraduationCap className="h-4 w-4" style={{ color: item.color }} />
            Top universities
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {item.topUniversities.map((uni) => (
              <div key={uni.name} className="flex items-start gap-2 rounded-xl bg-bg-soft p-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                <div>
                  <p className="text-sm font-semibold text-ink">{uni.name}</p>
                  <p className="text-xs text-muted">{uni.program}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">Suggested path</h2>
        <ol className="mt-3 space-y-3">
          {item.suggestedPath.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-sm text-ink">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={badgeStyle(item.color)}
              >
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </Card>

      {item.usefulApps?.length > 0 && (
        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
            <Smartphone className="h-4 w-4" style={{ color: item.color }} />
            Useful apps
          </h2>
          <div className="mt-3 space-y-2">
            {item.usefulApps.map((app) => (
              <div key={app.name} className="flex items-start gap-3 rounded-xl bg-bg-soft p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={badgeStyle(item.color)}>
                  <app.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{app.name}</p>
                  <p className="text-xs text-muted">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {related.length > 0 && (
        <Card className="p-6">
          <h2 className="font-display text-base font-semibold text-ink">Related skills</h2>
          <div className="mt-3 space-y-2">
            {related.map((s) => (
              <Link
                key={s.id}
                to={isParent ? `/parent/skill/${s.id}` : `/student/skills/${s.id}`}
                className="flex items-center justify-between rounded-xl bg-bg-soft p-3 transition-colors hover:bg-primary/5"
              >
                <span className="text-sm font-medium text-ink">{s.name}</span>
                <ArrowRight className="h-4 w-4 text-muted" />
              </Link>
            ))}
          </div>
        </Card>
      )}
    </DetailShell>
  )
}
