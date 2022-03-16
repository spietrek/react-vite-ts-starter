import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonWithLoggingOnClick,
  ButtonWithLoggingOnClickWithProps,
  SuperButton,
} from '@/components/features/hoc/LoggingButtons'

const HocsPage = (): JSX.Element => {
  const [counter, setCounter] = useState(1)

  const getCurrentDate = (): string => new Date().toLocaleString()

  return (
    <div className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>

          <h1>HOCs</h1>
          <h3 className="tw-mt-4">Counter</h3>
          {counter}

          <h3 className="tw-mt-4">Buttons logging on click examples</h3>
          <ButtonWithLoggingOnClick onClick={() => setCounter(counter + 1)}>
            With logging on click
          </ButtonWithLoggingOnClick>
          <ButtonWithLoggingOnClickWithProps
            onClick={() => setCounter(counter + 1)}
            logText={getCurrentDate()}
          >
            With logging on click with props
          </ButtonWithLoggingOnClickWithProps>

          <h3 className="tw-mt-4">Buttons with EVERYTHING</h3>
          <SuperButton
            onClick={() => setCounter(counter + 1)}
            logText={getCurrentDate()}
          >
            With EVERYTHING
          </SuperButton>
        </div>
      </div>
    </div>
  )
}

export default HocsPage
