import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Flame, Zap, Star, Sparkles, Award, Target, ArrowRight, Lightbulb, Plus, X } from 'lucide-react'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { studentProfile, interests, strengths, skills, careers, progress } from '@/data/studentData'
import { useAchievements } from '@/hooks/useAchievements'

function QuickLinkCard({ to, icon: Icon, accent, title, count, tags }) {
  return (
    <Card className="p-5">
      <Link to={to} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-base font-semibold text-ink">{title}</p>
            <p className="text-xs text-muted">{count} items</p>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-muted" />
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-bg-soft px-3 py-1 text-xs font-medium text-muted">
            {tag}
          </span>
        ))}
      </div>
    </Card>
  )
}

export default function StudentDashboard() {
  const xpPct = Math.round((studentProfile.xp / studentProfile.xpToNext) * 100)
  const avgStrength = Math.round(strengths.reduce((sum, s) => sum + s.level, 0) / strengths.length)
  const topMatch = Math.max(...careers.map((c) => c.matchPct))
  const firstName = studentProfile.name.split(' ')[0]
  const { entries, addEntry, removeEntry } = useAchievements()
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  function handleAdd(e) {
    e.preventDefault()
    if (!title.trim()) return
    addEntry(title.trim(), note.trim())
    setTitle('')
    setNote('')
    setShowForm(false)
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-10">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-primary-deep via-primary to-accent p-8 text-white shadow-card">
        <p className="text-sm text-white/80">Welcome back</p>
        <h1 className="font-display text-3xl font-bold">Hi, {firstName} 👋</h1>
        <p className="mt-1 text-sm text-white/80">
          Keep up the momentum — you're on a {studentProfile.streak}-day learning streak.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
            <Flame className="h-3.5 w-3.5 text-highlight" />
            {studentProfile.streak} day streak
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
            <Zap className="h-3.5 w-3.5" />
            Level {studentProfile.level}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
            <Star className="h-3.5 w-3.5" />
            {progress.achievements.length + entries.length} achievements
          </span>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-white/80">
            <span>Level {studentProfile.level} progress</span>
            <span>{studentProfile.xp} / {studentProfile.xpToNext} XP</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-white transition-all" style={{ width: `${xpPct}%` }} />
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card className="flex items-center gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">{interests.length}</p>
            <p className="text-xs text-muted">Interests</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">{avgStrength}%</p>
            <p className="text-xs text-muted">Avg. strength</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-highlight/10 text-highlight">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">{skills.length}</p>
            <p className="text-xs text-muted">Skills</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-deep/10 text-primary-deep">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">{topMatch}%</p>
            <p className="text-xs text-muted">Top match</p>
          </div>
        </Card>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <QuickLinkCard
          to="/student/interests"
          icon={Sparkles}
          accent="bg-primary/10 text-primary"
          title="My Interests"
          count={interests.length}
          tags={interests.map((i) => i.title)}
        />
        <QuickLinkCard
          to="/student/strengths"
          icon={Award}
          accent="bg-accent/10 text-accent"
          title="My Strengths"
          count={strengths.length}
          tags={strengths.map((s) => s.subject)}
        />
        <QuickLinkCard
          to="/student/skills"
          icon={Zap}
          accent="bg-highlight/10 text-highlight"
          title="Skills & Talents"
          count={skills.length}
          tags={skills.map((s) => s.name)}
        />
        <QuickLinkCard
          to="/student/careers"
          icon={Target}
          accent="bg-primary-deep/10 text-primary-deep"
          title="Career Interests"
          count={careers.length}
          tags={careers.map((c) => c.title)}
        />
      </div>

      {/* Overall progress + insights */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr]">
        <Card className="flex flex-col items-center justify-center gap-2 p-6">
          <ProgressRing value={progress.overall} size={104} strokeWidth={9} />
          <p className="text-xs font-medium text-muted">Overall progress</p>
          <Link to="/student/progress" className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
            View details <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Card>

        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
            <Lightbulb className="h-4 w-4 text-primary" />
            Personalized for you
          </h2>
          <div className="mt-4 space-y-3">
            {progress.recommendations.map(({ text, icon: Icon }) => (
              <div key={text} className="flex items-center gap-3 rounded-xl bg-bg-soft p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium text-ink">{text}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Achievements & activities */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
            <Award className="h-4 w-4 text-primary" />
            My Achievements & Activities
          </h2>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            {showForm ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
            {showForm ? 'Cancel' : 'Add new'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleAdd} className="mt-4 space-y-2 rounded-xl bg-bg-soft p-4">
            <input
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What did you achieve or do? (e.g. Finished a short comic)"
              className="w-full rounded-lg border border-border/60 bg-surface px-3 py-2 text-sm text-ink outline-none focus:border-primary"
            />
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a short note (optional)"
              className="w-full rounded-lg border border-border/60 bg-surface px-3 py-2 text-sm text-ink outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={!title.trim()}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-transform enabled:hover:-translate-y-0.5 disabled:opacity-40"
            >
              Add to my list
            </button>
          </form>
        )}

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {progress.achievements.map(({ title, icon: Icon, color, date }) => (
            <div key={title} className="flex flex-col items-center gap-2 rounded-xl bg-bg-soft p-4 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${color}1a`, color }}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold text-ink">{title}</p>
              <p className="text-[10px] text-muted">{date}</p>
            </div>
          ))}
          {entries.map((entry) => (
            <div key={entry.id} className="relative flex flex-col items-center gap-2 rounded-xl bg-bg-soft p-4 text-center">
              <button
                onClick={() => removeEntry(entry.id)}
                className="absolute right-2 top-2 text-muted hover:text-ink"
                aria-label="Remove"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Star className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold text-ink">{entry.title}</p>
              <p className="text-[10px] text-muted">{entry.note || entry.date}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
