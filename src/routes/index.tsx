import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from '@/pages/HomePage'

const StoreCounterPage = lazy(() => import('@/pages/StoreCounterPage'))
const StoreTodosPage = lazy(() => import('@/pages/StoreTodosPage'))
const UserContextPage = lazy(() => import('@/pages/UseContextPage'))
const CompositionPage = lazy(() => import('@/pages/CompositionPage'))
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
      path: '/userContext',
      element: <UserContextPage />,
    },
    {
      path: '/composition',
      element: <CompositionPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
}

export default AppRoutes
