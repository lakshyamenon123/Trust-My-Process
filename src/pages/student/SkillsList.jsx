import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import { skills } from '@/data/studentData'
import { badgeStyle } from '@/lib/colors'

export default function SkillsList() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Skills & Talents</h1>
        <p className="text-sm text-muted">Skills you're building and the projects that show them.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ id, name, icon: Icon, level, category, description, color }) => (
          <Link key={id} to={`/student/skills/${id}`}>
            <Card className="flex h-full flex-col p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={badgeStyle(color)}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-base font-semibold text-ink">{name}</p>
                  <p className="text-xs text-muted">{category}</p>
                </div>
              </div>
              <p className="mt-3 flex-1 text-xs text-muted line-clamp-2">{description}</p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-muted">Proficiency</span>
                  <span className="font-semibold" style={{ color }}>{level}%</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-bg-soft">
                  <div className="h-full rounded-full" style={{ width: `${level}%`, backgroundColor: color }} />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
