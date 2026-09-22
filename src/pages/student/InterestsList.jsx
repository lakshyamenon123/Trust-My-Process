import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Card from '@/components/Card'
import { interests } from '@/data/studentData'

export default function InterestsList() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Interests</h1>
        <p className="text-sm text-muted">Subjects, hobbies, and topics you keep coming back to.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {interests.map(({ id, title, icon: Icon, level, summary }) => (
          <Link key={id} to={`/student/interests/${id}`}>
            <Card className="p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted" />
              </div>
              <p className="mt-4 font-display text-base font-semibold text-ink">{title}</p>
              <p className="mt-1 text-xs text-muted">{summary}</p>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-bg-soft">
                <div className="h-full rounded-full bg-primary" style={{ width: `${level}%` }} />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
