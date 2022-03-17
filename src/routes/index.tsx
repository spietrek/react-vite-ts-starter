import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { USER_ROLE as UR } from '@/constants'
import Spinner from '@/components/atoms/Spinner'
import LayoutPage from '@/pages/LayoutPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RequireAuth from '@/components/organisms/RequireAuthWrapper'

const HooksPage = lazy(() => import('@/pages/HooksPage'))
const StoreCounterPage = lazy(() => import('@/pages/StoreCounterPage'))
const StoreTodosPage = lazy(() => import('@/pages/StoreTodosPage'))
const UseContextPage = lazy(() => import('@/pages/UseContextPage'))
const CompositionPage = lazy(() => import('@/pages/CompositionPage'))
const SettingsPage = lazy(() => import('@/pages/SettingsPage'))
const HocsPage = lazy(() => import('@/pages/HocsPage'))
const UnauthorizedPage = lazy(() => import('@/pages/UnauthorizedPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

const AppRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          {/* Public Routes */}
          <Route path="login" element={<LoginPage />} />
          <Route path="unauthorized" element={<UnauthorizedPage />} />

          {/* Admin Protected Routes */}
          <Route element={<RequireAuth allowedRoles={[UR.Admin]} />}>
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Editor Protected Routes */}
          <Route element={<RequireAuth allowedRoles={[UR.Admin, UR.Editor]} />}>
            <Route path="counter" element={<StoreCounterPage />} />
            <Route path="todos" element={<StoreTodosPage />} />
          </Route>

          {/* User/Admin Protected Routes */}
          <Route element={<RequireAuth allowedRoles={[UR.Admin, UR.User]} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="hooks" element={<HooksPage />} />
            <Route path="hocs" element={<HocsPage />} />
            <Route path="use-context" element={<UseContextPage />} />
            <Route path="composition" element={<CompositionPage />} />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
