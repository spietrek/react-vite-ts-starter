import { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const [calculation, setCalculation] = useState(0)

  useEffect(() => {
    setCalculation(() => count * 2)
  }, [count])

  return (
    <div className="">
      <p className="tw-mb-4">You clicked {count} times</p>
      <button
        className="tw-btn tw-btn-accent tw-btn-outline tw-btn-sm tw-mx-1"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="tw-btn tw-btn-accent tw-btn-outline tw-btn-sm tw-mx-1"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <p className="tw-mt-4">Calculation: {calculation}</p>
    </div>
  )
  return <div>Counter</div>
}

export default Counter
