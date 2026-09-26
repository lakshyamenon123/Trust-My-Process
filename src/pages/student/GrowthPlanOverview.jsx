import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Flame, CheckCircle2, PartyPopper, Sparkles, Trophy } from 'lucide-react'
import Card from '@/components/Card'
import ProgressRing from '@/components/ProgressRing'
import { skills, findById } from '@/data/studentData'
import { badgeStyle } from '@/lib/colors'
import { TOTAL_DAYS, DAYS_PER_WEEK, TOTAL_WEEKS, WEEK_THEMES, MILESTONES, QUESTIONS_PER_DAY } from '@/data/growthPlanData'
import { useGrowthPlan } from '@/hooks/useGrowthPlan'

export default function GrowthPlanOverview() {
  const { id } = useParams()
  const navigate = useNavigate()
  const skill = findById(skills, id)
  const plan = useGrowthPlan(id)

  if (!skill) return <p className="text-sm text-muted">Skill not found.</p>

  const unlockedMilestones = MILESTONES.filter((m) => plan.totalCompleted >= m.day)
  const nextMilestone = MILESTONES.find((m) => plan.totalCompleted < m.day)
  const totalAnswered = plan.totalCompleted * QUESTIONS_PER_DAY
  const totalCorrect = Object.values(plan.dayScores).reduce((sum, n) => sum + n, 0)
  const accuracyPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-10">
      <Link
        to={`/student/skills/${id}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" /> Back to {skill.name}
      </Link>

      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl" style={badgeStyle(skill.color)}>
          <skill.icon className="h-7 w-7" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">10-Week Growth Plan</h1>
          <p className="text-sm text-muted">{skill.name} · small steps every day can lead to something much bigger.</p>
        </div>
      </div>

      {plan.isComplete && (
        <Card className="p-6" style={{ background: `linear-gradient(135deg, ${skill.color}1a, transparent)` }}>
          <div className="flex items-center gap-2">
            <PartyPopper className="h-5 w-5" style={{ color: skill.color }} />
            <h2 className="font-display text-lg font-bold text-ink">Your 10-Week Growth Report</h2>
          </div>
          <p className="mt-2 text-sm text-ink">
            You showed up for all 70 days and answered {totalAnswered} questions in {skill.name.toLowerCase()} — {accuracyPct}% of them correctly.
            That's not luck, that's consistency. Small steps every day just added up to something huge.
          </p>
        </Card>
      )}

      {/* Overall progress */}
      <Card className="flex flex-wrap items-center gap-6 p-6">
        <ProgressRing value={plan.progressPct} size={96} strokeWidth={8} color={skill.color}>
          <div className="text-center">
            <p className="font-display text-lg font-bold text-ink">{plan.totalCompleted}</p>
            <p className="text-[10px] text-muted">of {TOTAL_DAYS} days</p>
          </div>
        </ProgressRing>
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-bg-soft px-3 py-1.5 text-xs font-semibold text-ink">
              <Flame className="h-3.5 w-3.5 text-highlight" /> {plan.streak}-day streak
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-bg-soft px-3 py-1.5 text-xs font-semibold text-ink">
              <Trophy className="h-3.5 w-3.5" style={{ color: skill.color }} /> {unlockedMilestones.length} milestones
            </span>
          </div>
          {nextMilestone && (
            <p className="text-xs text-muted">
              Next milestone: <span className="font-medium text-ink">{nextMilestone.title}</span> at day {nextMilestone.day}
            </p>
          )}
          <button
            onClick={() => navigate(`/student/skills/${id}/growth-plan/day/${plan.nextIncompleteDay ?? TOTAL_DAYS}`)}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: skill.color }}
          >
            {plan.totalCompleted === 0 ? 'Start Day 1' : plan.isComplete ? 'Review a day' : `Continue · Day ${plan.nextIncompleteDay}`}
          </button>
        </div>
      </Card>

      {unlockedMilestones.length > 0 && (
        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
            <Sparkles className="h-4 w-4" style={{ color: skill.color }} />
            Milestones
          </h2>
          <div className="mt-3 space-y-2">
            {unlockedMilestones.map((m) => (
              <div key={m.day} className="flex items-start gap-3 rounded-xl bg-bg-soft p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={badgeStyle(skill.color)}>
                  <Trophy className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{m.title}</p>
                  <p className="text-xs text-muted">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Week-by-week path */}
      <div className="space-y-4">
        {Array.from({ length: TOTAL_WEEKS }, (_, weekIndex) => {
          const week = weekIndex + 1
          const startDay = (week - 1) * DAYS_PER_WEEK + 1
          const daysInWeek = Array.from({ length: DAYS_PER_WEEK }, (_, i) => startDay + i)
          const completedInWeek = daysInWeek.filter((d) => plan.isDayComplete(d)).length
          const weekComplete = completedInWeek === DAYS_PER_WEEK

          return (
            <Card key={week} className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted">Week {week}</p>
                  <p className="font-display text-base font-semibold text-ink">{WEEK_THEMES[weekIndex]}</p>
                </div>
                <span className={`text-xs font-semibold ${weekComplete ? '' : 'text-muted'}`} style={weekComplete ? { color: skill.color } : undefined}>
                  {weekComplete ? 'Week complete ✓' : `${completedInWeek}/${DAYS_PER_WEEK} days`}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {daysInWeek.map((day) => {
                  const done = plan.isDayComplete(day)
                  const isNext = day === plan.nextIncompleteDay
                  return (
                    <button
                      key={day}
                      onClick={() => navigate(`/student/skills/${id}/growth-plan/day/${day}`)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-semibold transition-transform hover:-translate-y-0.5"
                      style={
                        done
                          ? { ...badgeStyle(skill.color), borderColor: 'transparent' }
                          : isNext
                            ? { borderColor: skill.color, color: skill.color, borderWidth: 2 }
                            : { borderColor: 'var(--color-border)', color: 'var(--color-muted)' }
                      }
                    >
                      {done ? <CheckCircle2 className="h-4 w-4" /> : day}
                    </button>
                  )
                })}
              </div>

              {weekComplete && (
                <p className="mt-3 text-xs text-muted">
                  Nice work — you showed up all {DAYS_PER_WEEK} days this week. That's the whole game.
                </p>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
