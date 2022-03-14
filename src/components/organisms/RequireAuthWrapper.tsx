import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

interface RequireAuthProps {
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RequireAuth = ({ children }: RequireAuthProps): any => {
  const auth = useAuth()
  const location = useLocation()

  if (auth.user === null) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />
  }

  return children
}

export default RequireAuth
