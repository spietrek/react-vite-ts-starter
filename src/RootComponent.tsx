import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
// import StoreCounterPage from './pages/StoreCounterPage'
// import StoreTodosPage from './pages/StoreTodosPage'
// import NotFoundPage from './pages/NotFoundPage'
import './styles/index.css'

const StoreCounterPage = lazy(() => import('./pages/StoreCounterPage'))
const StoreTodosPage = lazy(() => import('./pages/StoreTodosPage'))
const ParentsPage = lazy(() => import('./pages/ParentsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const App = (): JSX.Element => (
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
        path="/parents"
        element={
          <Suspense fallback={<>...</>}>
            <ParentsPage />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
)

export default App
