import { createContext, useState, useContext } from 'react'

type DateState = Date | null

export interface DateContextData {
  date: DateState
  setCurrentDate: () => void
  assignDate: (date: DateState) => void
}

export const dateContextDefaultValue: DateContextData = {
  date: new Date(),
  setCurrentDate: () => null,
  assignDate: () => null,
}

export const DateContext = createContext<DateContextData>(
  dateContextDefaultValue,
)

export const useDateContext = (): DateContextData => useContext(DateContext)

export const useDateContextValue = (): DateContextData => {
  const [date, setDate] = useState<DateState>(new Date())

  const setCurrentDate = (): void => setDate(new Date())

  const assignDate = (date: DateState): void => setDate(date)

  return {
    date,
    setCurrentDate,
    assignDate,
  }
}
