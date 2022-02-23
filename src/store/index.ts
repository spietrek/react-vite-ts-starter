import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'
import todosReducer from './slices/todos/todosSlice'

const reducers = {
  counter: counterReducer,
  todos: todosReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
