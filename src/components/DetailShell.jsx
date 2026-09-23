import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/cn'
import { badgeStyle } from '@/lib/colors'

export default function DetailShell({ icon: Icon, title, subtitle, accent = 'bg-primary/10 text-primary', color, children }) {
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-10">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <div className="flex items-center gap-4">
        <div
          className={cn('flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl', !color && accent)}
          style={color ? badgeStyle(color) : undefined}
        >
          {Icon && <Icon className="h-7 w-7" />}
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">{title}</h1>
          {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        </div>
      </div>

      {children}
    </div>
  )
}
