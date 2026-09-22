import { NavLink } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function AppShell({ navItems, roleLabel, onLogout, children }) {
  return (
    <div className="min-h-screen bg-bg-soft">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-border/60 bg-surface px-4 py-6 md:flex">
        <div className="flex items-center gap-2 px-2 pb-8">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
            <span className="font-display text-sm font-bold text-white">TP</span>
          </div>
          <div>
            <p className="font-display text-sm font-bold leading-tight text-ink">Trust the Process</p>
            <p className="text-xs text-muted">{roleLabel}</p>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive ? 'bg-primary/10 text-primary' : 'text-muted hover:bg-bg-soft hover:text-ink'
                )
              }
            >
              <Icon className="h-5 w-5" />
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={onLogout}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-bg-soft hover:text-ink"
        >
          <LogOut className="h-5 w-5" /> Log out
        </button>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-surface/90 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <span className="font-display text-xs font-bold text-white">TP</span>
          </div>
          <span className="font-display text-sm font-bold text-ink">Trust the Process</span>
        </div>
        <button onClick={onLogout} className="text-muted">
          <LogOut className="h-5 w-5" />
        </button>
      </header>

      <main className="px-4 py-6 pb-24 md:ml-64 md:px-10 md:py-10 md:pb-10">{children}</main>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-20 flex border-t border-border/60 bg-surface/95 backdrop-blur md:hidden">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              cn('flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium', isActive ? 'text-primary' : 'text-muted')
            }
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
