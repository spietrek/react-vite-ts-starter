import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import TodosDataService from '../../../services/todos.service'

export const retrieveTodos = createAsyncThunk('todos/retrieve', async () => {
  const res = await TodosDataService.getAll()
  return res.data
})

interface TodosState {
  isLoading: boolean
  count: number
}

const initialState = {
  isLoading: false,
  count: 0,
} as TodosState

export const todosSlice = createSlice({
  name: 'todosSlice',

  initialState,

  reducers: {
    setCount: (state, action) => {
      state.count = action.payload
    },
  },

  extraReducers: builder => {
    builder.addCase(retrieveTodos.pending, state => {
      state.isLoading = true
    })
    builder.addCase(retrieveTodos.fulfilled, (state, action) => {
      state.count = action.payload.length
      state.isLoading = false
    })
  },
})

const { reducer } = todosSlice
export default reducer
