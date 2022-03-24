import { useEffect, useState } from 'react'

type DefaultValueType = string | number | boolean | null | undefined
type UseLocalStorageReturnType = [string, (value: DefaultValueType) => void]

export const useLocalStorage = (
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

  useEffect(() => {
    if (localStorageKey !== '' && value !== undefined) {
      localStorage.setItem(localStorageKey, JSON.stringify(value))
    }
    if (typeof value === 'string' && value.length === 0) {
      localStorage.removeItem(localStorageKey)
    }
  }, [localStorageKey, value])

  return [value, setValue]
}
