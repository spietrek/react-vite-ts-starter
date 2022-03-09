import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routes'

const ShellPage = (): JSX.Element => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

export default ShellPage
