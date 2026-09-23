import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { interests } from '@/data/studentData'
import { badgeStyle } from '@/lib/colors'

export default function InterestsList() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">My Interests</h1>
        <p className="text-sm text-muted">Subjects, hobbies, and topics you enjoy.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map(({ id, title, icon: Icon, level, summary, category, color }) => (
          <Link key={id} to={`/student/interests/${id}`}>
            <Card className="flex h-full flex-col p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={badgeStyle(color)}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-base font-semibold text-ink">{title}</p>
                  <p className="text-xs text-muted">{category}</p>
                </div>
              </div>
              <p className="mt-3 flex-1 text-xs text-muted line-clamp-2">{summary}</p>
              <div className="mt-4 flex items-center gap-3">
                <ProgressRing value={level} size={44} strokeWidth={4} color={color} showLabel={false} />
                <span className="text-sm font-semibold text-ink">{level}% interest</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
