# Trust the Process — Mobile App

React Native (Expo) rewrite of the [web prototype](../README.md), for the same
parent dashboard + child-device demo. Same screens, same shared context/state,
built with native components instead of DOM/CSS.

## Run

```bash
npm install
npm start
```

Then press `i` (iOS simulator, macOS only), `a` (Android emulator), or `w`
(web) in the terminal, or scan the QR code with the Expo Go app on a physical
device.

## Structure

- `App.tsx` — root: wraps everything in `AppProvider`, switches between
  Login / ParentDashboard / ChildDevice based on `view` state
- `src/context/AppContext.tsx` — shared app state (alerts, screen-time limit,
  lock status, demo scenario), same shape as the web version
- `src/screens/` — `Login`, `ParentDashboard`, `ChildDevice`
- `src/components/` — `Header`, `AlertRow`
- `src/theme.ts` — shared color tokens

## What's implemented

Same feature set as the web prototype: login screen, parent dashboard
(status, screen time, weekly chart, top apps, alerts feed, limit control,
blocked-apps list, emergency lock/unlock), and the child device demo (phone
mockup + scenario buttons that simulate normal use / blocked private
browsing / blocked content / limit reached).

## What's not here yet

Real OS integration — device-owner/MDM enrollment, actual app usage
tracking, real content filtering. This is still the UI/UX and data-flow
reference, now running as an installable native app instead of a web page.
