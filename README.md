# Trust the Process — Web Prototype

Parent dashboard + child-device demo for the "Trust the Process" parental
monitoring concept, matching the MVP screenshots. This is the **web
prototype only** (Phase 1 of the project brief) — no OS-level device
enrollment, MDM, or native mobile code.

## Run

```bash
npm install
npm run dev
```

Open the printed localhost URL. Use **Parent Login** for the dashboard, or
**Child Device (Demo)** to see the simulated phone. The "Child View" /
"Parent View" chip in the header switches between them at any time; state
(alerts, screen-time limit, lock status) is shared live between both views
via React context, so actions taken from one show up in the other.

## What's implemented

- Login screen (parent vs. child-demo entry points)
- Parent dashboard: device status, today's screen time with progress bar,
  weekly usage chart, top apps, recent alerts feed, daily-limit control,
  blocked-apps list, emergency lock/unlock
- Child device demo: phone mockup with a home-screen app grid, plus demo
  buttons that simulate normal use, a blocked private-browsing attempt,
  blocked inappropriate content, and hitting the daily time limit — each
  pushes a matching alert into the shared feed

## What's not here yet

Everything that requires real OS integration: device-owner/MDM
enrollment, actual app usage tracking, real content filtering, and native
iOS/Android builds. See the project brief for that roadmap — this
prototype is the UI/UX and data-flow reference for building those.
