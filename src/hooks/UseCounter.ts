import { useState } from 'react'

export const useCounter = (initialState = 10): any => {
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

  return {
    count,
    increment,
    decrement,
    reset,
  }
}
