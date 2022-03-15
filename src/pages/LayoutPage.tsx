import { Outlet } from 'react-router-dom'

const LayoutPage = (): JSX.Element => {
  return (
    <main>
      <div className="tw-navbar tw-bg-neutral tw-text-neutral-content">
        <div className="tw-navbar-start tw-mx-2 tw-px-2">
          <span className="tw-text-lg tw-font-bold"> STORE </span>
        </div>
      </div>
      <Outlet />
    </main>
  )
}

export default LayoutPage
