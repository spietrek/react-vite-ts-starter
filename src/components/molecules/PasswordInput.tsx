import { useState } from 'react'
import clsx from 'clsx'

interface Props {
  password: string
  onChange: (value: string) => void
}

const PasswordInput = ({ password, onChange }: Props): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false)

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    onChange(event.target.value)
  }

  const handleVisibilityToggle = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault()
    setVisible(!visible)
  }

  return (
    <div className="tw-relative tw-mb-2">
      <input
        type={visible ? 'text' : 'password'}
        name="password"
        value={password}
        onChange={handlePasswordChange}
        className="tw-w-full tw-rounded tw-border tw-border-gray-300 tw-px-4 tw-py-2 tw-transition tw-duration-300 focus:tw-border-transparent focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-blue-200"
      />
      {password.length > 0 && (
        <button
          className="tw-leading-0 tw-absolute tw-top-2 tw-right-2 tw-block tw-h-7 tw-w-7 tw-text-center tw-text-xl tw-text-gray-400 tw-transition-colors hover:tw-text-indigo-500 focus:tw-outline-none"
          onClick={handleVisibilityToggle}
        >
          <i
            className={clsx('mdi', {
              'mdi-eye-outline': !visible,
              'mdi-eye-off-outline': visible,
            })}
          />
        </button>
      )}
    </div>
  )
}

export default PasswordInput
