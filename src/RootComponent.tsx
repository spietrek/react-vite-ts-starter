import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StoreCounterPage from './pages/StoreCounterPage'
import NotFoundPage from './pages/NotFoundPage'
import './styles/index.css'

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/counter" element={<StoreCounterPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
