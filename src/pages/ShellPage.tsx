import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@/routes'

const ShellPage = (): JSX.Element => (
  <>
    <div className="tw-navbar tw-bg-neutral tw-text-neutral-content">
      <div className="tw-navbar-start tw-mx-2 tw-px-2">
        <span className="tw-text-lg tw-font-bold"> STORE </span>
      </div>
    </div>

    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </>
)

export default ShellPage
