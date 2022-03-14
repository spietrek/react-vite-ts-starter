import RootComponent from './RootComponent'
import { store } from './store'
import { Provider } from 'react-redux'
import './styles/index.css'
import { AuthProvider } from '@/hooks/useAuth'

const App = (): JSX.Element => (
  <Provider store={store}>
    <AuthProvider>
      <RootComponent />
    </AuthProvider>
  </Provider>
)

export default App
