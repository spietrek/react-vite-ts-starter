import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
import NotFoundPage from './pages/NotFoundPage'
import './styles/index.css'

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/edit" element={<EditPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
