import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, Users, Sparkles, TrendingUp, ShieldCheck, Mail, Lock, Loader2 } from 'lucide-react'
import { cn } from '@/lib/cn'

const FEATURES = [
  { icon: Sparkles, text: 'Discover interests, strengths, and skills as they grow' },
  { icon: TrendingUp, text: 'Track real progress with evidence, not just screen time' },
  { icon: ShieldCheck, text: 'Parents stay in the loop without micromanaging' },
]

export default function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function enterAs(chosenRole) {
    localStorage.setItem('ttp_role', chosenRole)
    navigate(chosenRole === 'parent' ? '/parent' : '/student')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!email.trim() || !password.trim()) {
      setError('Enter your email and password to continue.')
      return
    }
    setLoading(true)
    // demo-only auth — no backend wired up yet, this just simulates a request
    setTimeout(() => {
      setLoading(false)
      enterAs(role)
    }, 600)
  }

  function handleGoogle() {
    setError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      enterAs(role)
    }, 600)
  }

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-accent p-12 text-white md:flex">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            <span className="font-display text-base font-bold">TP</span>
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

      {/* Auth panel */}
      <div className="flex items-center justify-center bg-bg-soft px-6 py-12">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="font-display text-2xl font-bold text-ink">Welcome back</h2>
            <p className="text-sm text-muted">Choose how you'd like to sign in</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={cn(
                'flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm font-medium transition-colors',
                role === 'student'
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border/60 bg-surface text-muted hover:text-ink'
              )}
            >
              <GraduationCap className="h-5 w-5" />
              Student View
            </button>
            <button
              type="button"
              onClick={() => setRole('parent')}
              className={cn(
                'flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm font-medium transition-colors',
                role === 'parent'
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border/60 bg-surface text-muted hover:text-ink'
              )}
            >
              <Users className="h-5 w-5" />
              Parent View
            </button>
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border/60 bg-surface py-2.5 text-sm font-medium text-ink shadow-soft transition-colors hover:bg-bg-soft disabled:opacity-60"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.54-5.17 3.54-8.66Z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3a7.4 7.4 0 0 1-11-3.9H1.1v3.1A12 12 0 0 0 12 24Z" />
              <path fill="#FBBC05" d="M5.05 14.19a7.2 7.2 0 0 1 0-4.38v-3.1H1.1a12 12 0 0 0 0 10.58l3.95-3.1Z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.6 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.1 6.7l3.95 3.1A7.18 7.18 0 0 1 12 4.75Z" />
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 text-xs text-muted">
            <div className="h-px flex-1 bg-border" />
            or continue with email
            <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border/60 bg-surface py-2.5 pl-9 pr-3 text-sm text-ink outline-none focus:border-primary"
              />
            </div>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-xl border border-border/60 bg-surface py-2.5 pl-9 pr-3 text-sm text-ink outline-none focus:border-primary"
              />
            </div>

            {error && <p className="text-xs font-medium text-highlight">{error}</p>}

            <div className="flex items-center justify-between text-xs">
              <span />
              <a href="#" className="font-medium text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? 'Signing in…' : `Sign in as ${role === 'parent' ? 'Parent' : 'Student'}`}
            </button>
          </form>

          <p className="text-center text-xs text-muted">
            New here?{' '}
            <a href="#" className="font-medium text-primary hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
