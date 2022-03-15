import clsx from 'clsx'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate()
  const { state } = useLocation() as { state: { from: { pathname: string } } }
  const auth = useAuth()
  const { from } = (state ?? {}) as { from: { pathname: string } }
  const { pathname } = from ?? '/'

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string

    auth.login(username, () => {
      navigate(pathname, { replace: true })
    })
  }

  return (
    <div className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>

          <p>You must log in to view the page at {pathname}</p>

          <div className="tw-mt-4 tw-flex tw-items-center tw-justify-center">
            <div className="tw-w-1/3 tw-rounded-lg tw-bg-slate-200 tw-p-4">
              <form onSubmit={handleSubmit}>
                <div className="tw-mb-6">
                  <label
                    htmlFor="username"
                    className="tw-mb-2 tw-block tw-text-left tw-text-sm tw-font-medium tw-text-gray-900"
                  >
                    User Name
                  </label>
                  <input
                    type="username"
                    name="username"
                    className="tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-bg-gray-50 tw-p-2.5 tw-text-sm tw-text-gray-900 focus:tw-border-blue-500 focus:tw-ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={clsx('tw-btn', 'tw-btn-accent', 'tw-btn-sm', {
                    'tw-loading': auth.loading,
                  })}
                  aria-label="Submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
