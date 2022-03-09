import ShellWrapper from '@/components/organisms/ShellWrapper'
import ShellPage from './pages/ShellPage'
import './styles/index.css'

const RootComponent = (): JSX.Element => (
  <ShellWrapper>
    <ShellPage />
  </ShellWrapper>
)

export default RootComponent
