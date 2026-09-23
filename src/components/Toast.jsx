import { BellRing, X } from 'lucide-react'

export default function Toast({ toast, onDismiss }) {
  if (!toast) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:justify-end sm:px-6">
      <div className="pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border border-border/60 bg-surface p-4 shadow-card animate-toast-in">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <BellRing className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink">{toast.title}</p>
          <p className="mt-0.5 text-xs text-muted">{toast.detail}</p>
        </div>
        <button onClick={onDismiss} className="shrink-0 text-muted hover:text-ink">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
