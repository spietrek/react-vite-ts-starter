import { useState } from 'react'

interface ReturnType {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

const useCounter = (initialState = 10): ReturnType => {
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

  return { count, increment, decrement, reset }
}

export default useCounter
