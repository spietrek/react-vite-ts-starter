import { useState } from 'react'

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [active, setState] = useState(initialState)

  const toggle = (): void => {
    setState(!active)
  }

  return [active, toggle]
}
