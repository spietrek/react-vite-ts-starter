import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import LoginError from '@/components/molecules/LoginError'
import PasswordInput from '@/components/molecules/PasswordInput'
import PasswordStrength from '@/components/molecules/PasswordStrength'
import useZxcvbn from '@/hooks/useZxcvbn'

const LoginPage = (): JSX.Element => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [score, update] = useZxcvbn()

  const navigate = useNavigate()
  const auth = useAuth()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const userName = formData.get('userName') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    void auth.register(userName, email, password, confirmPassword).then(res => {
      if (res?.success ?? false) {
        navigate('/login', { replace: true })
      } else {
        setError(res?.error ?? 'Unknown Error')
      }
    })
  }

  const updatePassword = (password: string): void => {
    setPassword(password)
    update(password)
  }

  useEffect(() => {
    setError('')
  }, [userName, email, password, confirmPassword])

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
            Account Registration
          </h3>

          <form
            onSubmit={handleSubmit}
            className="tw-flex tw-flex-col tw-space-y-5"
          >
            <div className="tw-flex tw-flex-col tw-space-y-1">
              <label
                htmlFor="userName"
                className="tw-text-sm tw-font-semibold tw-text-gray-500"
              >
                User Name
              </label>
              <input
                type="text"
                name="userName"
                autoFocus
                onChange={e => setUserName(e.target.value)}
                className="tw-form-input tw-rounded tw-border tw-border-gray-300 tw-px-4 tw-py-2 tw-transition tw-duration-300 focus:tw-border-transparent focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-blue-200"
              />
            </div>
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
                onChange={e => setEmail(e.target.value)}
                className="tw-form-input tw-rounded tw-border tw-border-gray-300 tw-px-4 tw-py-2 tw-transition tw-duration-300 focus:tw-border-transparent focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-blue-200"
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
              </div>
              <PasswordInput
                password={password}
                onChange={value => updatePassword(value)}
              />

              <PasswordStrength score={score} />
            </div>

            <div className="tw-flex tw-flex-col tw-space-y-1">
              <div className="tw-flex tw-items-center tw-justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="tw-text-sm tw-font-semibold tw-text-gray-500"
                >
                  Confirm Password
                </label>
              </div>
              <PasswordInput
                formName="confirmPassword"
                password={confirmPassword}
                onChange={value => setConfirmPassword(value)}
              />
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
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
