import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PhoneSimulator from '@/components/PhoneSimulator'
import { alertTriggers } from '@/data/studentData'
import { useMonitoring } from '@/context/MonitoringContext'

export default function Phone() {
  const { activeScenario, triggerScenario } = useMonitoring()

  return (
    <div className="min-h-screen bg-bg-soft px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <Link to="/login" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <div className="mt-6 rounded-2xl border border-border/60 bg-surface p-6 shadow-card sm:p-8">
          <h1 className="font-display text-2xl font-bold text-ink">Simulate a device</h1>
          <p className="mt-1 text-sm text-muted">
            Trigger a scenario and watch an instant alert land — the same alert a parent would see on the Monitoring page.
          </p>

          <div className="mt-8">
            <PhoneSimulator activeScenario={activeScenario} triggers={alertTriggers} onTrigger={triggerScenario} />
          </div>
        </div>
      </div>
    </div>
  )
}
