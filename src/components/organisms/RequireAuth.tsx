import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { USER_ROLE } from '@/constants'

interface RequireAuthProps {
  allowedRoles: USER_ROLE[]
}

const RequireAuth = ({ allowedRoles }: RequireAuthProps): JSX.Element => {
  const auth = useAuth()
  const location = useLocation()
  const roles = auth?.roles ?? []
  const isAuthenticated = auth?.authenticated ?? false
  const validRoles =
    roles.find(role => allowedRoles.includes(role)) !== undefined

  if (isAuthenticated && !validRoles) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}

export default RequireAuth
