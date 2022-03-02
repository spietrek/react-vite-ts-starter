import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import TodosDataService from '../../../services/todos.service'

export const retrieveTodos = createAsyncThunk('todos/retrieve', async () => {
  const res = await TodosDataService.getAll()
  return res.data
})

const timeout = (ms: number): Promise<unknown> => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export const longRetrieveTodos = createAsyncThunk(
  'todos/longRetrieve',
  async () => {
    await timeout(3000)
    const res = await TodosDataService.getAll()
    return res.data
  },
)

interface TodoItemState {
  id: number
  title: string
  completed: boolean
  userId: number
}

interface TodosState {
  isError: boolean
  isLoading: boolean
  count: number
  completedCount: number
  todos: TodoItemState[]
}

const initialState = {
  isError: false,
  isLoading: false,
  count: 0,
  completedCount: 0,
  todos: [],
} as TodosState

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
        (todo: TodoItemState) => todo.completed,
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
        (todo: TodoItemState) => todo.completed,
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

const selectTodos = (state: RootState): TodoItemState[] => state.todos.todos
export const completedTodosSelector = createSelector([selectTodos], todos =>
  todos.filter((todo: TodoItemState) => todo.completed),
)
export const completedTodosCountSelector = createSelector(
  [selectTodos],
  todos => todos.filter((todo: TodoItemState) => todo.completed).length,
)

const { reducer } = todosSlice
export default reducer
