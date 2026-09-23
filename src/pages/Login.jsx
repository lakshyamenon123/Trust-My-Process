import { useNavigate } from 'react-router-dom'
import { GraduationCap, Users, Sparkles, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react'

const FEATURES = [
  { icon: Sparkles, text: 'Discover interests, strengths, and skills as they grow' },
  { icon: TrendingUp, text: 'Track real progress with evidence, not just screen time' },
  { icon: ShieldCheck, text: 'Parents stay in the loop without micromanaging' },
]

export default function Login() {
  const navigate = useNavigate()

  function enterAs(role) {
    localStorage.setItem('ttp_role', role)
    navigate(role === 'parent' ? '/parent' : '/student')
  }

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-accent p-12 text-white md:flex">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold">Trust the Process</span>
        </div>

        <div className="space-y-8">
          <h1 className="font-display text-4xl font-bold leading-tight">
            Discover strengths.
            <br />
            Shape the future.
          </h1>
          <p className="max-w-sm text-sm text-white/80">
            A platform where students explore who they are and parents see real
            growth — interests, strengths, skills, and where they could lead.
          </p>
          <ul className="space-y-4">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-white/90">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-white/60">© 2026 Trust the Process</p>
      </div>

      {/* Role picker */}
      <div className="flex items-center justify-center bg-bg-soft px-6 py-12">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="font-display text-2xl font-bold text-ink">Welcome</h2>
            <p className="text-sm text-muted">Choose a view to continue.</p>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => enterAs('parent')}
              className="flex w-full items-center gap-4 rounded-2xl border border-border/60 bg-surface p-5 text-left shadow-soft transition-transform hover:-translate-y-0.5 hover:border-primary"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-base font-semibold text-ink">Parent View</p>
                <p className="text-xs text-muted">Dashboard, progress, and live monitoring</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted" />
            </button>

            <button
              type="button"
              onClick={() => enterAs('student')}
              className="flex w-full items-center gap-4 rounded-2xl border border-border/60 bg-surface p-5 text-left shadow-soft transition-transform hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-base font-semibold text-ink">Child View</p>
                <p className="text-xs text-muted">Interests, strengths, skills, and careers</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
