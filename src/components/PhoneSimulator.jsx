import { Wifi, Signal } from 'lucide-react'
import { badgeStyle } from '@/lib/colors'

const SCREENS = {
  idle: { time: '2:15', bg: 'linear-gradient(160deg, #5145cd 0%, #8b5cf6 100%)' },
  'app-usage': { time: '2:47', bg: 'linear-gradient(160deg, #2d2a6e 0%, #ef4444 120%)' },
  'daily-limit': { time: '5:52', bg: 'linear-gradient(160deg, #2d2a6e 0%, #ff8a5b 120%)' },
  'blocked-content': { time: '4:03', bg: 'linear-gradient(160deg, #2d2a6e 0%, #ef4444 120%)' },
  'private-browsing': { time: '6:18', bg: 'linear-gradient(160deg, #2d2a6e 0%, #8b5cf6 120%)' },
  'late-night': { time: '10:47', bg: 'linear-gradient(160deg, #0a0a1a 0%, #2d2a6e 120%)' },
}

function ScreenContent({ scenario }) {
  if (!scenario) {
    return (
      <div className="grid grid-cols-3 gap-3 px-4 pt-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <div className="h-9 w-9 rounded-xl bg-white/25" />
          </div>
        ))}
      </div>
    )
  }

  const Icon = scenario.icon

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <p className="text-sm font-semibold text-white">{scenario.label}</p>
      <p className="text-[11px] leading-snug text-white/75">{scenario.detail}</p>
    </div>
  )
}

export default function PhoneSimulator({ activeScenario, triggers, onTrigger }) {
  const scenario = triggers.find((t) => t.id === activeScenario) ?? null
  const screen = SCREENS[activeScenario ?? 'idle']

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
      {/* phone frame */}
      <div className="shrink-0 rounded-[2.25rem] border-[6px] border-ink bg-ink p-1.5 shadow-card">
        <div className="relative h-[360px] w-[190px] overflow-hidden rounded-[1.75rem]" style={{ background: screen.bg }}>
          <div className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-ink" />
          <div className="flex items-center justify-between px-4 pt-2.5 text-[10px] font-medium text-white/90">
            <span>{screen.time}</span>
            <span className="flex items-center gap-1">
              <Signal className="h-3 w-3" /> <Wifi className="h-3 w-3" />
            </span>
          </div>
          {scenario ? (
            <div className="absolute inset-x-3 top-9 rounded-full bg-white/15 px-3 py-1 text-center text-[9px] font-semibold uppercase tracking-wide text-white backdrop-blur">
              Instant alert sent
            </div>
          ) : null}
          <div className="flex h-full flex-col pt-8">
            <ScreenContent scenario={scenario} />
          </div>
        </div>
      </div>

      {/* trigger buttons */}
      <div className="w-full space-y-2">
        {triggers.map((trigger) => (
          <button
            key={trigger.id}
            onClick={() => onTrigger(trigger)}
            className="flex w-full items-center gap-3 rounded-xl border border-border/60 bg-surface p-3 text-left transition-colors hover:bg-bg-soft"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={badgeStyle(trigger.color)}>
              <trigger.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-ink">{trigger.label}</p>
              <p className="text-[11px] text-muted">{trigger.detail}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
