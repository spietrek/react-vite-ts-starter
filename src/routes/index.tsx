import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { USER_ROLE as UR } from '@/constants'
import Spinner from '@/components/atoms/Spinner'
import LayoutPage from '@/pages/LayoutPage'
import LoginPage from '@/pages/LoginPage'
import RequireAuth from '@/components/organisms/RequireAuth'

const CalculatorPage = lazy(() => import('@/pages/CalculatorPage'))
const CompositionPage = lazy(() => import('@/pages/CompositionPage'))
const HocsPage = lazy(() => import('@/pages/HocsPage'))
const HomePage = lazy(() => import('@/pages/HomePage'))
const HooksPage = lazy(() => import('@/pages/HooksPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const SettingsPage = lazy(() => import('@/pages/SettingsPage'))
const StoreCounterPage = lazy(() => import('@/pages/StoreCounterPage'))
const StoreTodosPage = lazy(() => import('@/pages/StoreTodosPage'))
const ApiPage = lazy(() => import('@/pages/ApiPage'))
const TuplesPage = lazy(() => import('@/pages/TuplesPage'))
const UnauthorizedPage = lazy(() => import('@/pages/UnauthorizedPage'))
const UseContextPage = lazy(() => import('@/pages/UseContextPage'))

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

          {/* Admin/Editor Protected Routes */}
          <Route element={<RequireAuth allowedRoles={[UR.Admin, UR.Editor]} />}>
            <Route path="counter" element={<StoreCounterPage />} />
            <Route path="todos" element={<StoreTodosPage />} />
            <Route path="api" element={<ApiPage />} />
          </Route>

          {/* Admin/User Protected Routes */}
          <Route element={<RequireAuth allowedRoles={[UR.Admin, UR.User]} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="hooks" element={<HooksPage />} />
            <Route path="hocs" element={<HocsPage />} />
            <Route path="use-context" element={<UseContextPage />} />
            <Route path="composition" element={<CompositionPage />} />
            <Route path="tuples" element={<TuplesPage />} />
            <Route path="calculator" element={<CalculatorPage />} />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
