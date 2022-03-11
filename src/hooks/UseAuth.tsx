/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, createContext, useContext } from 'react'

const FakeAuthService = {
  isAuthenticated: false,
  login(callback: VoidFunction) {
    FakeAuthService.isAuthenticated = true
    setTimeout(callback, 100) // fake async
  },
  logout(callback: VoidFunction) {
    FakeAuthService.isAuthenticated = false
    setTimeout(callback, 100)
  },
}

interface AuthContextType {
  user: string | null
  login: (user: string, callback: VoidFunction) => void
  logout: (callback: VoidFunction) => void
}

const AuthContext = createContext<AuthContextType>(null!)

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [user, setUser] = useState<string | null>(null)

  const login = (newUser: string, callback: VoidFunction): void => {
    return FakeAuthService.login(() => {
      setUser(newUser)
      callback()
    })
  }

  const logout = (callback: VoidFunction): void => {
    return FakeAuthService.logout(() => {
      setUser(null)
      callback()
    })
  }

  const value = { user, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext)
}
