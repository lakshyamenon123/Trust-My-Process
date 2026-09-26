import { useMemo, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, XCircle, PartyPopper } from 'lucide-react'
import Card from '@/components/Card'
import { skills, findById } from '@/data/studentData'
import { badgeStyle } from '@/lib/colors'
import { getDayQuestions, getWeekForDay, TOTAL_DAYS, WEEK_THEMES } from '@/data/growthPlanData'
import { useGrowthPlan } from '@/hooks/useGrowthPlan'

const ENCOURAGEMENT = {
  3: "3 for 3 — you're on fire today!",
  2: '2 out of 3 — solid progress, keep it up.',
  1: 'Every attempt teaches you something. Nice work showing up.',
  0: "No worries — tomorrow's a fresh start. Showing up is what counts.",
}

export default function GrowthPlanDay() {
  const { id, day } = useParams()
  // remount fully on every day change so quiz state never leaks between days
  return <GrowthPlanDayInner key={`${id}-${day}`} />
}

function GrowthPlanDayInner() {
  const { id, day: dayParam } = useParams()
  const navigate = useNavigate()
  const day = Number(dayParam)
  const skill = findById(skills, id)
  const plan = useGrowthPlan(id)
  const questions = useMemo(() => getDayQuestions(id, day), [id, day])
  const [selected, setSelected] = useState(() => Array(questions.length).fill(null))
  const [checked, setChecked] = useState(false)

  if (!skill) return <p className="text-sm text-muted">Skill not found.</p>
  if (!day || day < 1 || day > TOTAL_DAYS) return <p className="text-sm text-muted">That day doesn't exist.</p>

  const allAnswered = selected.every((s) => s !== null)
  const correctCount = selected.filter((s, i) => s === questions[i].correctIndex).length

  function selectOption(qIndex, optIndex) {
    if (checked) return
    setSelected((prev) => prev.map((v, i) => (i === qIndex ? optIndex : v)))
  }

  function checkAnswers() {
    setChecked(true)
    plan.completeDay(day, correctCount)
  }

  const week = getWeekForDay(day)
  const isLastDay = day === TOTAL_DAYS

  return (
    <div className="mx-auto max-w-2xl space-y-6 pb-10">
      <Link
        to={`/student/skills/${id}/growth-plan`}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" /> Back to plan
      </Link>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={badgeStyle(skill.color)}>
          <skill.icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs font-medium text-muted">Week {week} · {WEEK_THEMES[week - 1]}</p>
          <h1 className="font-display text-xl font-bold text-ink">Day {day} of {TOTAL_DAYS}</h1>
        </div>
      </div>

      <p className="text-sm text-muted">Three quick questions — just a few minutes. Answer however feels right, then check your work.</p>

      {questions.map((question, qIndex) => (
        <Card key={qIndex} className="p-5">
          <p className="text-sm font-semibold text-ink">
            {qIndex + 1}. {question.prompt}
          </p>
          <div className="mt-3 space-y-2">
            {question.options.map((option, optIndex) => {
              const isSelected = selected[qIndex] === optIndex
              const isCorrect = optIndex === question.correctIndex
              let style = 'border-border/60 hover:bg-bg-soft'
              if (checked && isCorrect) style = 'border-accent bg-accent/10'
              else if (checked && isSelected && !isCorrect) style = 'border-highlight bg-highlight/10'
              else if (!checked && isSelected) style = 'border-primary bg-primary/5'

              return (
                <button
                  key={optIndex}
                  onClick={() => selectOption(qIndex, optIndex)}
                  disabled={checked}
                  className={`flex w-full items-center justify-between gap-2 rounded-xl border p-3 text-left text-sm text-ink transition-colors ${style}`}
                >
                  {option}
                  {checked && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />}
                  {checked && isSelected && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-highlight" />}
                </button>
              )
            })}
          </div>
          {checked && <p className="mt-3 rounded-xl bg-bg-soft p-3 text-xs text-muted">{question.explain}</p>}
        </Card>
      ))}

      {!checked ? (
        <button
          onClick={checkAnswers}
          disabled={!allAnswered}
          className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-transform enabled:hover:-translate-y-0.5 disabled:opacity-40"
          style={{ backgroundColor: skill.color }}
        >
          Check my answers
        </button>
      ) : (
        <Card className="p-5">
          <div className="flex items-center gap-2">
            <PartyPopper className="h-5 w-5" style={{ color: skill.color }} />
            <p className="font-display text-base font-semibold text-ink">Day {day} complete!</p>
          </div>
          <p className="mt-1 text-sm text-muted">{ENCOURAGEMENT[correctCount]}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to={`/student/skills/${id}/growth-plan`}
              className="rounded-xl border border-border/60 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-bg-soft"
            >
              Back to plan
            </Link>
            {!isLastDay && (
              <button
                onClick={() => navigate(`/student/skills/${id}/growth-plan/day/${day + 1}`)}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: skill.color }}
              >
                Continue to Day {day + 1}
              </button>
            )}
          </div>
        </Card>
      )}
    </div>
  )
}
