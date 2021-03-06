import { useState } from 'react'
import useLifecycleEffect from '@/hooks/useLifeCycleEffect'

const CounterTitle = (): JSX.Element => {
  const initDocTitle = 'React Starter Project'
  const [count, setCount] = useState<number>(0)

  useLifecycleEffect(
    () => {
      document.title = `You clicked ${count} times`
    },
    () => {
      document.title = initDocTitle
    },
    [count],
    { skipMount: true, cleanupOnce: true },
  )

  return (
    <div>
      <p className="tw-mb-4">You clicked {count} times</p>

      <button
        className="tw-btn tw-btn-outline tw-btn-accent tw-btn-sm tw-mx-1"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="tw-btn tw-btn-outline tw-btn-accent tw-btn-sm tw-mx-1"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  )
}

export default CounterTitle
