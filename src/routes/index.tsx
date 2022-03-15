import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { USER_ROLE } from '@/constants'
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
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

const AppRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="hooks" element={<HooksPage />} />
          <Route path="counter" element={<StoreCounterPage />} />
          <Route path="todos" element={<StoreTodosPage />} />
          <Route path="use-context" element={<UseContextPage />} />
          <Route path="composition" element={<CompositionPage />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth allowedRoles={[USER_ROLE.Admin]} />}>
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
