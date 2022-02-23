import RootComponent from './RootComponent'
import { store } from './store'
import { Provider } from 'react-redux'
import './styles/index.css'

const App = (): JSX.Element => (
  <Provider store={store}>
    <RootComponent />
  </Provider>
)

export default App
