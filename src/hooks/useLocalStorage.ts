import { useEffect, useState } from 'react'
import useDebounce from './useDebounce'

type DefaultValueType = string | number | boolean | null | undefined
type UseLocalStorageReturnType = [string, (value: DefaultValueType) => void]

const useLocalStorage = (
  defaultValue: DefaultValueType,
  localStorageKey: string,
): UseLocalStorageReturnType => {
  const [value, setValue] = useState(() => {
    const localStorageItem = localStorage.getItem(localStorageKey)
    if (localStorageItem === null) return defaultValue
    try {
      return JSON.parse(localStorageItem)
    } catch (err) {
      return defaultValue
    }
  })

  const debouncedValue = useDebounce(value, 500)

  useEffect(() => {
    if (localStorageKey !== '' && debouncedValue !== undefined) {
      localStorage.setItem(localStorageKey, JSON.stringify(debouncedValue))
    }
    if (typeof debouncedValue === 'string' && debouncedValue.length === 0) {
      localStorage.removeItem(localStorageKey)
    }
  }, [localStorageKey, debouncedValue])

  return [value, setValue]
}

export default useLocalStorage
