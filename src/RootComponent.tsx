import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShellWrapper from 'components/organisms/ShellWrapper'
import HomePage from './pages/HomePage'
import './styles/index.css'

const StoreCounterPage = lazy(() => import('./pages/StoreCounterPage'))
const StoreTodosPage = lazy(() => import('./pages/StoreTodosPage'))
const UserContextPage = lazy(() => import('./pages/UseContextPage'))
const CompositionPage = lazy(() => import('./pages/CompositionPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const App = (): JSX.Element => (
  <ShellWrapper>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<>...</>}>
              <NotFoundPage />
            </Suspense>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/counter"
          element={
            <Suspense fallback={<>...</>}>
              <StoreCounterPage />
            </Suspense>
          }
        />
        <Route
          path="/todos"
          element={
            <Suspense fallback={<>...</>}>
              <StoreTodosPage />
            </Suspense>
          }
        />
        <Route
          path="/useContext"
          element={
            <Suspense fallback={<>...</>}>
              <UserContextPage />
            </Suspense>
          }
        />
        <Route
          path="/composition"
          element={
            <Suspense fallback={<>...</>}>
              <CompositionPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </ShellWrapper>
)

export default App
