/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, createContext, useContext } from 'react'
import { USER_ROLE } from '@/constants'
import AuthDataService from '@/services/auth.service'

interface AuthContextType {
  loading: boolean
  authenticated: boolean
  user: string | null
  roles: USER_ROLE[]
  login: (user: string, callback: VoidFunction) => void
  logout: (callback: VoidFunction) => void
}

const AuthContext = createContext<AuthContextType>(null!)

const timeout = (ms: number): Promise<unknown> => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<string | null>(null)
  const [roles, setRoles] = useState<USER_ROLE[]>([])

  const login = async (
    userName: string,
    callback: VoidFunction,
  ): Promise<void> => {
    setLoading(true)
    const user = {
      userName,
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    }
    await timeout(3000)
    const res = await AuthDataService.login(user)
    if (res.status === 200) {
      setUser(userName)
      setAuthenticated(true)
      setRoles([USER_ROLE.Admin])
    }
    callback()
    setLoading(false)
  }

  const logout = (callback: VoidFunction): void => {
    setUser(null)
    setAuthenticated(false)
    callback()
  }

  const value = { loading, authenticated, user, roles, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext)
}
