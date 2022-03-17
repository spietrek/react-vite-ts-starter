/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, createContext, useContext } from 'react'
import axios from 'axios'
import { USER_ROLE } from '@/constants'
import AuthDataService from '@/services/auth.service'
import { timeout } from '@/utilities'
import { users } from '@/stories/data/users'

export interface LoginResponseType {
  success: boolean
  error: string | null
}
interface AuthContextType {
  loading: boolean
  authenticated: boolean
  user: string | null
  roles: USER_ROLE[]
  errorMsg: string
  login: (userName: string) => Promise<LoginResponseType | undefined>
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
  const [errorMsg, setErrorMsg] = useState<string>('')

  const isValidUser = (userName: string): boolean => {
    return users.some(user => user.userName === userName)
  }

  const getUserRoles = (userName: string): USER_ROLE[] => {
    return users.find(user => user.userName === userName)?.roles ?? []
  }

  const login = async (
    userName: string,
  ): Promise<LoginResponseType | undefined> => {
    let tempErrorMsg = ''
    setLoading(true)
    try {
      const tempUser = {
        userName,
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }
      await timeout(1500)
      const res = await AuthDataService.login(tempUser)
      setLoading(false)
      if (isValidUser(userName) && res.status === 200) {
        setUser(userName)
        setAuthenticated(true)
        setRoles(getUserRoles(userName))
        tempErrorMsg = ''
        return { success: true, error: null }
      } else {
        tempErrorMsg = 'Invalid User'
        return { success: false, error: tempErrorMsg }
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response == null) {
          tempErrorMsg = 'No Server Response'
        } else if (err.response.status === 400) {
          tempErrorMsg = 'Missing Username or Password'
        } else if (err.response.status === 401) {
          tempErrorMsg = 'Invalid credentials'
        }
      } else {
        tempErrorMsg = 'Unknown Error'
      }
      return { success: false, error: tempErrorMsg }
    } finally {
      setErrorMsg(tempErrorMsg)
      setLoading(false)
    }
  }

  const logout = (callback: VoidFunction): void => {
    setUser(null)
    setAuthenticated(false)
    setRoles([])
    setErrorMsg('')
    callback()
  }

  const value = {
    loading,
    authenticated,
    user,
    roles,
    errorMsg,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext)
}
