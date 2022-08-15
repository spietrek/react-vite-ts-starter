import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import TodosDataService from '@/services/todos.service'
import { timeout } from '@/utilities'
import { ITodoItem, ITodosState } from '@/types'

export const retrieveTodos = createAsyncThunk('todos/retrieve', async () => {
  const res = await TodosDataService.getAll()
  return res.data as ITodoItem[]
})

export const longRetrieveTodos = createAsyncThunk(
  'todos/longRetrieve',
  async () => {
    await timeout(3000)
    const res = await TodosDataService.getAll()
    return res.data as ITodoItem[]
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  count: 0,
  completedCount: 0,
  todos: [],
} as ITodosState

export const todosSlice = createSlice({
  name: 'todosSlice',

  initialState,

  reducers: {
    clear: state => {
      state.isError = false
      state.isLoading = false
      state.count = 0
      state.completedCount = 0
      state.todos = []
    },
  },

  extraReducers: builder => {
    builder.addCase(retrieveTodos.pending, state => {
      state.isError = false
      state.isLoading = true
    })

    builder.addCase(retrieveTodos.fulfilled, (state, action) => {
      state.count = action.payload.length
      state.completedCount = action.payload.filter(
        (todo: ITodoItem) => todo.completed,
      ).length
      state.todos = action.payload
      state.isLoading = false
    })

    builder.addCase(retrieveTodos.rejected, state => {
      state.isError = true
      state.isLoading = false
    })

    builder.addCase(longRetrieveTodos.pending, state => {
      state.isError = false
      state.isLoading = true
    })

    builder.addCase(longRetrieveTodos.fulfilled, (state, action) => {
      state.count = action.payload.length
      state.completedCount = action.payload.filter(
        (todo: ITodoItem) => todo.completed,
      ).length
      state.todos = action.payload
      state.isLoading = false
    })

    builder.addCase(longRetrieveTodos.rejected, state => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export const { clear } = todosSlice.actions

const selectTodos = (state: RootState): ITodoItem[] => state.todos.todos
export const completedTodosSelector = createSelector([selectTodos], todos =>
  todos.filter((todo: ITodoItem) => todo.completed),
)
export const completedTodosCountSelector = createSelector(
  [selectTodos],
  todos => todos.filter((todo: ITodoItem) => todo.completed).length,
)

const { reducer } = todosSlice
export default reducer
