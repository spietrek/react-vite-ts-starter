/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, createContext, useContext } from 'react'
import axios from 'axios'
import { USER_ROLE } from '@/constants'
import AuthDataService from '@/services/auth.service'
import { timeout } from '@/utilities'

interface AuthContextType {
  loading: boolean
  authenticated: boolean
  user: string | null
  roles: USER_ROLE[]
  error: string | null
  login: (user: string, callback: VoidFunction) => void
  logout: (callback: VoidFunction) => void
}

const AuthContext = createContext<AuthContextType>(null!)

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<string | null>(null)
  const [roles, setRoles] = useState<USER_ROLE[]>([])
  const [error, setError] = useState<string | null>('')

  const login = async (
    userName: string,
    callback: VoidFunction,
  ): Promise<void> => {
    try {
      setLoading(true)
      const tempUser = {
        userName,
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }
      await timeout(3000)
      const res = await AuthDataService.login(tempUser)
      if (res.status === 200) {
        setUser(userName)
        setAuthenticated(true)
        setRoles([USER_ROLE.Admin])
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response == null) {
          setError('No Server Response')
        } else if (err.response.status === 400) {
          setError('Missing Username or Password')
        } else if (err.response.status === 401) {
          setError('Invalid credentials')
        }
      } else {
        setError('Unknown Error')
      }
    }

    callback()
    setLoading(false)
  }

  const logout = (callback: VoidFunction): void => {
    setUser(null)
    setAuthenticated(false)
    callback()
  }

  const value = {
    loading,
    authenticated,
    user,
    roles,
    error,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext)
}
