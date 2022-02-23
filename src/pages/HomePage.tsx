import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Counter from '../components/features/home/Counter'
import CounterTitle from '../components/features/home/CounterTitle'
import CounterReducer from '../components/features/home/CounterReducer'
import MenuReducer from '../components/features/home/MenuReducer'

const EXAMPLES = {
  Counter,
  CounterTitle,
  CounterReducer,
  MenuReducer,
}

type Examples = keyof typeof EXAMPLES

const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[]

const HomePage: React.FC = () => {
  const [example, setExample] = useState<Examples>('Counter')

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
      &lt;
      {name} /&gt;
    </button>
  ))

  return (
    <div className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="counter">
            Store Counter
          </Link>
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
