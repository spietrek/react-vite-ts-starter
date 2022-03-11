import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/UseAuth'

interface RequireAuthProps {
  children?: React.ReactNode
}

const RequireAuth = ({ children }: RequireAuthProps): any => {
  const auth = useAuth()
  const location = useLocation()

  if (auth.user === null) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />
  }

  return children
}

export default RequireAuth
