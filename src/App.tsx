import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/hooks/useAuth'
import AppRoutes from '@/routes'
import './styles/index.css'

const App = (): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </Provider>
)

export default App
