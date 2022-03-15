import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { USER_ROLE } from '@/constants'

interface RequireAuthProps {
  allowedRoles: USER_ROLE[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RequireAuth = ({ allowedRoles }: RequireAuthProps): any => {
  const auth = useAuth()
  const location = useLocation()
  const roles = auth?.roles ?? []
  const isAuthenticated = auth?.authenticated ?? false
  const validRoles =
    roles.find(role => allowedRoles.includes(role)) !== undefined

  if (isAuthenticated) {
    return validRoles ? (
      <Outlet />
    ) : (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
}

export default RequireAuth
