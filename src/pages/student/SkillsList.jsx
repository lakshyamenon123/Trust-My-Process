import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Card from '@/components/Card'
import { skills } from '@/data/studentData'
import { badgeStyle } from '@/lib/colors'

export default function SkillsList() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Skills & Talents</h1>
        <p className="text-sm text-muted">Creativity, communication, leadership, and more.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map(({ id, name, icon: Icon, level, category, description, color }) => (
          <Link key={id} to={`/student/skills/${id}`}>
            <Card className="p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={badgeStyle(color)}>
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <p className="font-display text-base font-semibold text-ink">{name}</p>
                <span className="rounded-full bg-bg-soft px-2 py-0.5 text-[10px] font-medium text-muted">{category}</span>
              </div>
              <p className="mt-1 text-xs text-muted line-clamp-2">{description}</p>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-bg-soft">
                <div className="h-full rounded-full" style={{ width: `${level}%`, backgroundColor: color }} />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
