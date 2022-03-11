import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RequireAuth from '@/components/organisms/RequireAuthWrapper'

const StoreCounterPage = lazy(() => import('@/pages/StoreCounterPage'))
const StoreTodosPage = lazy(() => import('@/pages/StoreTodosPage'))
const UseContextPage = lazy(() => import('@/pages/UseContextPage'))
const CompositionPage = lazy(() => import('@/pages/CompositionPage'))
const SettingsPage = lazy(() => import('@/pages/SettingsPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

const AppRoutes = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/counter',
      element: <StoreCounterPage />,
    },
    {
      path: '/todos',
      element: <StoreTodosPage />,
    },
    {
      path: '/use-context',
      element: <UseContextPage />,
    },
    {
      path: '/composition',
      element: <CompositionPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/settings',
      element: (
        <RequireAuth>
          <SettingsPage />
        </RequireAuth>
      ),
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
}

export default AppRoutes
