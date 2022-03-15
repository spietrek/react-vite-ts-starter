import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import {
  UseState,
  UseLifecycleEffect,
  UseReducer,
  UseMemo,
} from '@/components/features/react'

const EXAMPLES = {
  UseState,
  UseLifecycleEffect,
  UseReducer,
  UseMemo,
}

type Examples = keyof typeof EXAMPLES

const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[]

const HomePage = (): JSX.Element => {
  const [example, setExample] = useState<Examples>('UseState')

  // eslint-disable-next-line security/detect-object-injection
  const ExampleComponent = EXAMPLES[example]

  const exampleButtons = EXAMPLE_NAMES.map(name => (
    <button
      key={name}
      onClick={() => setExample(name)}
      className={clsx('tw-btn', 'tw-btn-accent', 'tw-btn-sm', 'tw-mx-2', {
        'tw-btn-active': name === example,
      })}
    >
      {name}
    </button>
  ))

  return (
    <div className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>
          <h1>Hooks Examples</h1>
          <div>
            {exampleButtons}
            <div className="tw-divider" />
            <ExampleComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
