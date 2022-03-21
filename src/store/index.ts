import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'
import todosReducer from './slices/todos/todosSlice'
import salesReducer from './slices/sales/salesSlice'

const reducers = {
  counter: counterReducer,
  todos: todosReducer,
  sales: salesReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
