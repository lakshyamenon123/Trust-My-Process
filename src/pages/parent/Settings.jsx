import { Settings as SettingsIcon } from 'lucide-react'
import Card from '@/components/Card'

export default function Settings() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Settings</h1>
        <p className="text-sm text-muted">Manage your account and notification preferences.</p>
      </div>

      <Card className="flex flex-col items-center gap-3 p-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <SettingsIcon className="h-6 w-6" />
        </div>
        <p className="font-display text-base font-semibold text-ink">Settings are coming soon</p>
        <p className="max-w-sm text-sm text-muted">
          Account, notification, and privacy preferences will be configurable from here.
        </p>
      </Card>
    </div>
  )
}
