import { useCallback, useEffect, useState } from 'react'
import useDebounce from './useDebounce'

type DefaultValueType = string | number | boolean | null | undefined
type UseLocalStorageReturnType = [string, (value: DefaultValueType) => void]

const useLocalStorage = (
  defaultValue: DefaultValueType,
  localStorageKey: string,
): UseLocalStorageReturnType => {
  const readValue = useCallback(() => {
    const localStorageItem = localStorage.getItem(localStorageKey)
    if (localStorageItem === null) return defaultValue
    try {
      return JSON.parse(localStorageItem)
    } catch (error) {
      console.warn(
        `Error reading localStorage key “${localStorageKey}”:`,
        error,
      )
      return defaultValue
    }
  }, [localStorageKey, defaultValue])

  const [value, setValue] = useState(readValue)

  const debouncedValue = useDebounce(value, 500)

  useEffect(() => {
    if (localStorageKey !== '' && debouncedValue !== undefined) {
      try {
        localStorage.setItem(localStorageKey, JSON.stringify(debouncedValue))
      } catch (error) {
        console.warn(
          `Error setting localStorage key “${localStorageKey}”:`,
          error,
        )
      }
      localStorage.setItem(localStorageKey, JSON.stringify(debouncedValue))
    }
    if (typeof debouncedValue === 'string' && debouncedValue.length === 0) {
      localStorage.removeItem(localStorageKey)
    }
  }, [localStorageKey, debouncedValue])

  return [value, setValue]
}

export default useLocalStorage
