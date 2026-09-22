import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Role } from '../navigation/types'

type SessionContextValue = {
  role: Role | null
  name: string
  login: (role: Role) => void
  logout: () => void
}

const SessionContext = createContext<SessionContextValue | null>(null)

export function SessionProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(null)

  const value = useMemo<SessionContextValue>(
    () => ({
      role,
      name: role === 'parent' ? 'Jordan Smith' : 'Alex Johnson',
      login: (nextRole: Role) => setRole(nextRole),
      logout: () => setRole(null),
    }),
    [role],
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export function useSession() {
  const ctx = useContext(SessionContext)
  if (!ctx) throw new Error('useSession must be used within a SessionProvider')
  return ctx
}
