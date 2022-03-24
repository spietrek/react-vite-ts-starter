import { useState } from 'react'

const useToggle = (initialState = false): [boolean, () => void] => {
  const [active, setState] = useState(initialState)

  const toggle = (): void => {
    setState(!active)
  }

  return [active, toggle]
}

export default useToggle
