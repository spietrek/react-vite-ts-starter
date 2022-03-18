import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

const LayoutPage = (): JSX.Element => {
  const navigate = useNavigate()
  const auth = useAuth()
  const { authenticated } = auth

  const handleLogout = (): void => {
    void auth.logout(() => {
      navigate('/login', { replace: true })
    })
  }

  return (
    <main>
      <div className="tw-navbar tw-bg-neutral tw-text-neutral-content">
        <div className="tw-navbar-start tw-mx-2 tw-px-2">
          <span className="tw-text-lg tw-font-bold"> STORE </span>
        </div>
        <div className="tw-navbar-end">
          {authenticated && (
            <button className="tw-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
      <Outlet />
    </main>
  )
}

export default LayoutPage
