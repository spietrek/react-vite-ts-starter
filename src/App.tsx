import { useState } from 'react'
import classNames from 'classnames'
import Counter from './Counter'
import CounterTitle from './CounterTitle'
import CounterReducer from './CounterReducer'

const EXAMPLES = {
  Counter,
  CounterTitle,
  CounterReducer,
}

type Examples = keyof typeof EXAMPLES

const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[]

const App = () => {
  const [example, setExample] = useState<Examples>('Counter')

  const ExampleComponent = EXAMPLES[example]

  const exampleButtons = EXAMPLE_NAMES.map(name => (
    <button
      key={name}
      onClick={() => setExample(name)}
      role="button"
      aria-pressed="true"
      className={classNames(
        'tw-btn',
        'tw-btn-accent',
        'tw-btn-wide',
        'tw-btn-sm',
        'tw-mx-2',
        {
          'tw-btn-active': name === example,
        },
      )}
    >
      &lt;
      {name} /&gt;
    </button>
  ))
  return (
    <div className="tw-container tw-mx-auto">
      <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen">
        <div className="tw-text-center tw-py-16 tw-px-4 tw-w-[900px] tw-bg-slate-500 tw-rounded-md tw-shadow-3xl">
          {exampleButtons}
          <div className="tw-divider"></div>
          <ExampleComponent />
        </div>
      </div>
    </div>
  )
}

export default App
