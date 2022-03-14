import { Provider } from 'react-redux'
import { store } from './store'
import { AuthProvider } from '@/hooks/useAuth'
import ShellPage from './pages/ShellPage'
import './styles/index.css'

const App = (): JSX.Element => (
  <Provider store={store}>
    <AuthProvider>
      <ShellPage />
    </AuthProvider>
  </Provider>
)

export default App
