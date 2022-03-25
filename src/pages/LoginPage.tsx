import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import useLocationPathName from '@/hooks/useLocationPathName'
import LoginError from '@/components/molecules/LoginError'
import PasswordInput from '@/components/molecules/PasswordInput'

const LoginPage = (): JSX.Element => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const ignoreTabIndex = -1

  const navigate = useNavigate()
  const auth = useAuth()
  const pathName = useLocationPathName('/')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    void auth.login(email, password).then(res => {
      if (res?.success ?? false) {
        navigate(pathName, { replace: true })
      } else {
        setError(res?.error ?? 'Unknown Error')
      }
    })
  }

  useEffect(() => {
    setError('')
  }, [user, password])

  return (
    <div className="tw-flex tw-min-h-screen tw-items-center tw-bg-gray-100 tw-p-4 lg:tw-justify-center">
      <div className="tw-max tw-flex tw-flex-col tw-overflow-hidden tw-rounded-md tw-bg-white tw-shadow-lg md:tw-flex-1 md:tw-flex-row lg:tw-max-w-screen-md">
        <div className="tw-bg-blue-500 tw-p-4 tw-py-6 tw-text-white md:tw-flex md:tw-w-80 md:tw-flex-shrink-0 md:tw-flex-col md:tw-items-center md:tw-justify-evenly">
          <div className="tw-my-3 tw-text-center tw-text-4xl tw-font-bold tw-tracking-wider">
            <a href="#">REACT KNOWLEDGE</a>
          </div>
          <p className="tw-mt-6 tw-text-center tw-font-normal tw-text-gray-300 md:tw-mt-0">
            With the power of React Knowledge, you can now focus only on
            functionaries for your digital products, while leaving the UI design
            on us!
          </p>
          <p className="tw-mt-10 tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center">
            <span>Don&apos;t have an account?</span>
            <a href="#" className="tw-underline">
              Get Started!
            </a>
          </p>
          <p className="tw-mt-6 tw-text-center tw-text-sm tw-text-gray-300">
            Read our{' '}
            <a href="#" className="tw-underline">
              terms
            </a>{' '}
            and{' '}
            <a href="#" className="tw-underline">
              conditions
            </a>
          </p>
        </div>

        <div className="tw-bg-white tw-p-5 md:tw-flex-1">
          <h3 className="tw-my-4 tw-text-2xl tw-font-semibold tw-text-gray-700">
            Account Login
          </h3>

          <form
            onSubmit={handleSubmit}
            className="tw-flex tw-flex-col tw-space-y-5"
          >
            <div className="tw-flex tw-flex-col tw-space-y-1">
              <label
                htmlFor="email"
                className="tw-text-sm tw-font-semibold tw-text-gray-500"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                autoFocus
                onChange={e => setUser(e.target.value)}
                className="tw-rounded tw-border tw-border-gray-300 tw-px-4 tw-py-2 tw-transition tw-duration-300 focus:tw-border-transparent focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-blue-200"
              />
            </div>
            <div className="tw-flex tw-flex-col tw-space-y-1">
              <div className="tw-flex tw-items-center tw-justify-between">
                <label
                  htmlFor="password"
                  className="tw-text-sm tw-font-semibold tw-text-gray-500"
                >
                  Password
                </label>
                <a
                  href="#"
                  tabIndex={ignoreTabIndex}
                  className="tw-text-sm tw-text-blue-600 hover:tw-underline focus:tw-text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <PasswordInput
                password={password}
                onChange={value => setPassword(value)}
              />
            </div>
            <div className="tw-flex tw-items-center tw-space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="tw-h-4 tw-w-4 tw-rounded tw-transition tw-duration-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-200 focus:tw-ring-offset-0"
              />
              <label
                htmlFor="remember"
                className="tw-text-sm tw-font-semibold tw-text-gray-500"
              >
                Remember me
              </label>
            </div>

            <LoginError error={error} />

            <div>
              <button
                type="submit"
                className={clsx(
                  'tw-btn',
                  'tw-bg-blue-500',
                  'tw-w-full',
                  'hover:tw-bg-blue-600',
                  'focus:tw-outline-none',
                  'focus:tw-ring-blue-200',
                  'focus:tw-ring-4',
                  'tw-btn-md',
                  {
                    'tw-loading': auth?.loading ?? false,
                  },
                )}
              >
                Log in
              </button>
            </div>

            <div className="tw-flex tw-flex-col tw-space-y-5">
              <span className="tw-flex tw-items-center tw-justify-center tw-space-x-2">
                <span className="tw-h-px tw-w-14 tw-bg-gray-400" />
                <span className="tw-font-normal tw-text-gray-500">
                  or login with
                </span>
                <span className="tw-h-px tw-w-14 tw-bg-gray-400" />
              </span>
              <div className="tw-flex tw-flex-col tw-space-y-4">
                <a
                  href="#"
                  className="tw-group tw-flex tw-items-center tw-justify-center tw-space-x-2 tw-rounded-md tw-border tw-border-gray-800 tw-px-4 tw-py-2 tw-transition-colors tw-duration-300 hover:tw-bg-gray-800 focus:tw-outline-none"
                >
                  <span>
                    <svg
                      className="tw-h-5 tw-w-5 tw-fill-current tw-text-gray-800 group-hover:tw-text-white"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </span>
                  <span className="tw-text-sm tw-font-medium tw-text-gray-800 group-hover:tw-text-white">
                    Github
                  </span>
                </a>
                <a
                  href="#"
                  className="tw-group tw-flex tw-items-center tw-justify-center tw-space-x-2 tw-rounded-md tw-border tw-border-blue-500 tw-px-4 tw-py-2 tw-transition-colors tw-duration-300 hover:tw-bg-blue-500 focus:tw-outline-none"
                >
                  <span>
                    <svg
                      className="tw-text-blue-500 group-hover:tw-text-white"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </span>
                  <span className="tw-text-sm tw-font-medium tw-text-blue-500 group-hover:tw-text-white">
                    Twitter
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
