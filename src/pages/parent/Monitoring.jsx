import { useState } from 'react'
import {
  Ban, Lock, Unlock, MessageSquare, Settings2, RefreshCw, Pause,
  Wifi, Battery, MapPin, ShieldCheck, AlertTriangle, Bell, CheckCircle2, Clock,
} from 'lucide-react'
import Card from '@/components/Card'
import { studentProfile, monitoring } from '@/data/studentData'
import { badgeStyle } from '@/lib/colors'

function formatMinutes(mins) {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  if (h === 0) return `${m}m`
  return `${h}h ${m}m`
}

const ALERT_STYLES = {
  active: { dot: '#ef4444', label: 'Active' },
  recent: { dot: '#ff8a5b', label: 'Recent' },
  cleared: { dot: '#0fb67d', label: 'Cleared' },
}

export default function Monitoring() {
  const [locked, setLocked] = useState(false)
  const [paused, setPaused] = useState(false)
  const [preferences, setPreferences] = useState(monitoring.preferences)

  const usagePct = Math.round((monitoring.todayUsage.usedMinutes / monitoring.todayUsage.limitMinutes) * 100)
  const remaining = monitoring.todayUsage.limitMinutes - monitoring.todayUsage.usedMinutes
  const maxHourly = Math.max(...monitoring.hourlyBreakdown.map((h) => h.minutes), 1)
  const firstName = studentProfile.name.split(' ')[0]

  function togglePreference(id) {
    setPreferences((prev) => prev.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p)))
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Live Monitoring</h1>
        <p className="text-sm text-muted">{firstName}'s device, updated in real time.</p>
      </div>

      {/* Device status banner */}
      <Card className="flex flex-wrap items-center justify-between gap-4 p-5">
        <div className="flex items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${locked ? 'bg-highlight' : 'bg-accent'}`} />
          <div>
            <p className="text-sm font-semibold text-ink">{monitoring.device.name}</p>
            <p className="text-xs text-muted">{locked ? 'Locked by parent' : 'Currently active'} · Last sync: {monitoring.device.lastSync}</p>
          </div>
        </div>
        <button
          onClick={() => setLocked((v) => !v)}
          className="flex items-center gap-2 rounded-xl border border-border/60 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-bg-soft"
        >
          {locked ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
          {locked ? 'Unlock device' : 'Lock device'}
        </button>
      </Card>

      {/* Current activity */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Currently using
          </h2>
          <span className="text-xs text-muted">Updates every 30 sec</span>
        </div>

        {paused ? (
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-bg-soft p-4">
            <Pause className="h-5 w-5 text-highlight" />
            <p className="text-sm font-medium text-ink">Usage paused for a 30-minute break.</p>
          </div>
        ) : (
          <div className="mt-4 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl" style={badgeStyle(monitoring.currentActivity.color)}>
              <monitoring.currentActivity.icon className="h-7 w-7" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-base font-semibold text-ink">{monitoring.currentActivity.appName}</p>
              <p className="text-xs text-muted">{monitoring.currentActivity.category} · Opened at {monitoring.currentActivity.openedAt}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-accent">
                <CheckCircle2 className="h-3.5 w-3.5" /> {monitoring.currentActivity.contentStatus}
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-lg font-bold text-ink">{monitoring.currentActivity.timeThisSession}</p>
              <p className="text-xs text-muted">this session</p>
            </div>
          </div>
        )}

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <button
            onClick={() => setPaused(false)}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 py-3 text-xs font-semibold text-ink transition-colors hover:bg-bg-soft"
          >
            <Ban className="h-4 w-4 text-highlight" /> Block app
          </button>
          <button
            onClick={() => setPaused((v) => !v)}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 py-3 text-xs font-semibold text-ink transition-colors hover:bg-bg-soft"
          >
            <Pause className="h-4 w-4 text-primary" /> {paused ? 'Resume' : 'Pause (30 min)'}
          </button>
          <button className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 py-3 text-xs font-semibold text-ink transition-colors hover:bg-bg-soft">
            <MessageSquare className="h-4 w-4 text-accent" /> Message
          </button>
          <button className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 py-3 text-xs font-semibold text-ink transition-colors hover:bg-bg-soft">
            <Settings2 className="h-4 w-4 text-muted" /> App settings
          </button>
        </div>
      </Card>

      {/* Today's usage */}
      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">Today's usage</h2>
        <div className="mt-3 flex items-end justify-between">
          <p className="font-display text-2xl font-bold text-ink">
            {formatMinutes(monitoring.todayUsage.usedMinutes)}
            <span className="text-sm font-normal text-muted"> / {formatMinutes(monitoring.todayUsage.limitMinutes)} limit</span>
          </p>
          <p className="text-xs text-muted">{formatMinutes(remaining)} remaining</p>
        </div>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-bg-soft">
          <div className="h-full rounded-full bg-primary" style={{ width: `${usagePct}%` }} />
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-accent">
          <CheckCircle2 className="h-3.5 w-3.5" />
          On track — projected to reach the limit around {monitoring.todayUsage.projectedLimitTime}
        </p>
      </Card>

      {/* Apps used today */}
      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">Apps used today</h2>
        <div className="mt-4 space-y-4">
          {monitoring.appsToday.map((app, i) => (
            <div key={app.name} className="flex items-center gap-3">
              <span className="w-4 text-xs font-semibold text-muted">{i + 1}</span>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={badgeStyle(app.color)}>
                <app.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">{app.name}</span>
                  <span className="text-xs text-muted">{formatMinutes(app.minutes)} · {app.pct}% · {app.sessions} sessions</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-bg-soft">
                  <div className="h-full rounded-full" style={{ width: `${app.pct}%`, backgroundColor: app.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Hourly breakdown */}
      <Card className="p-6">
        <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
          <Clock className="h-4 w-4 text-primary" />
          Hourly breakdown
        </h2>
        <div className="mt-5 flex h-32 items-end gap-2">
          {monitoring.hourlyBreakdown.map((h) => (
            <div key={h.hour} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex w-full flex-1 items-end">
                <div
                  className="w-full rounded-md bg-primary"
                  style={{ height: `${Math.max((h.minutes / maxHourly) * 100, h.minutes > 0 ? 6 : 2)}%`, opacity: h.minutes > 0 ? 1 : 0.2 }}
                />
              </div>
              <span className="text-[10px] text-muted">{h.hour}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Alerts */}
      <Card className="p-6">
        <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
          <Bell className="h-4 w-4 text-primary" />
          Monitoring alerts
        </h2>
        <div className="mt-4 space-y-3">
          {monitoring.alerts.map((alert) => (
            <div key={alert.title} className="flex items-start gap-3 rounded-xl bg-bg-soft p-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: ALERT_STYLES[alert.level].dot }} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-ink">{alert.title}</p>
                  <span className="shrink-0 text-[10px] font-medium text-muted">{alert.time}</span>
                </div>
                <p className="text-xs text-muted">{alert.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Device status */}
      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">Device status</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-accent" />
            <div>
              <p className="text-sm font-semibold text-ink">{monitoring.deviceStatus.connection}</p>
              <p className="text-xs text-muted">{monitoring.deviceStatus.wifi} signal</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Battery className="h-4 w-4 text-accent" />
            <div>
              <p className="text-sm font-semibold text-ink">{monitoring.deviceStatus.battery}%</p>
              <p className="text-xs text-muted">{monitoring.deviceStatus.charging ? 'Charging' : 'Not charging'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold text-ink">{monitoring.deviceStatus.location}</p>
              <p className="text-xs text-muted">Location</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold text-ink">v{monitoring.deviceStatus.appVersion}</p>
              <p className="text-xs text-muted">App version</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Monitoring preferences */}
      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">Monitoring preferences</h2>
        <p className="text-xs text-muted">Choose what gets tracked on this device.</p>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {preferences.map((pref) => (
            <label
              key={pref.id}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl bg-bg-soft px-3 py-2.5 text-sm text-ink"
            >
              <input
                type="checkbox"
                checked={pref.enabled}
                onChange={() => togglePreference(pref.id)}
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              {pref.label}
            </label>
          ))}
        </div>
      </Card>

      {/* Quick actions */}
      <Card className="p-6">
        <h2 className="font-display text-base font-semibold text-ink">Quick actions</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <button
            onClick={() => setLocked((v) => !v)}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 py-3 text-xs font-semibold text-ink transition-colors hover:bg-bg-soft"
          >
            {locked ? <Unlock className="h-4 w-4 text-highlight" /> : <Lock className="h-4 w-4 text-highlight" />}
            {locked ? 'Unlock now' : 'Lock now'}
          </button>
          <button
            onClick={() => setPaused((v) => !v)}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 py-3 text-xs font-semibold text-ink transition-colors hover:bg-bg-soft"
          >
            <AlertTriangle className="h-4 w-4 text-primary" /> {paused ? 'Resume use' : 'Pause use'}
          </button>
          <button className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 py-3 text-xs font-semibold text-ink transition-colors hover:bg-bg-soft">
            <RefreshCw className="h-4 w-4 text-accent" /> Refresh
          </button>
          <button className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 py-3 text-xs font-semibold text-ink transition-colors hover:bg-bg-soft">
            <MessageSquare className="h-4 w-4 text-primary-deep" /> Message
          </button>
        </div>
      </Card>
    </div>
  )
}
