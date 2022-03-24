import React, { useMemo } from 'react'
import useCounter from '@/hooks/useCounter'
import useToggle from '@/hooks/useToggle'

const simulateProcessing = (iterations: number): string => {
  for (let i = 0; i < iterations; i++) {
    console.log('Processing ...')
  }
  return `${iterations} iterations`
}

const UseMemo = (): JSX.Element => {
  const [count, increment] = useCounter(500)
  const [show, setShow] = useToggle(true)

  const memoProcess = useMemo(() => simulateProcessing(count), [count])

  return (
    <>
      <h1>Memo Hook</h1>
      <h1>Counter: {count}</h1>
      <hr />

      <p> {memoProcess} </p>

      <button className="tw-btn-outline-primary tw-btn" onClick={increment}>
        Increment
      </button>

      <button
        className="tw-btn-outline-primary tw-btn tw-m-4"
        onClick={() => setShow()}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}

export default React.memo(UseMemo)
