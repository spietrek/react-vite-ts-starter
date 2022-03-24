import { useState } from 'react'

const useCounter = (
  initialState = 10,
): [number, () => void, () => void, () => void] => {
  const [count, setState] = useState(initialState)

  const increment = (): void => {
    setState(count + 1)
  }

  const decrement = (): void => {
    setState(count - 1)
  }

  const reset = (): void => {
    setState(initialState)
  }

  return [count, increment, decrement, reset]
}

export default useCounter
