import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import SalesDataService from '@/services/sales.service'
import { timeout } from '@/utilities'

interface SalesItemState {
  id: number
  userName: string
  amount: number
  count: number
  date: Date
}

interface SalesState {
  isError: boolean
  isLoading: boolean
  count: number
  items: SalesItemState[]
}

export const retrieveSales = createAsyncThunk('sales/retrieve', async () => {
  await timeout(3000)
  const res = await SalesDataService.getSales()
  return res.data as SalesItemState[]
})

const initialState = {
  isError: false,
  isLoading: false,
  count: 0,
  items: [],
} as SalesState

export const salesSlice = createSlice({
  name: 'salesSlice',

  initialState,

  reducers: {
    clear: state => {
      state.isError = false
      state.isLoading = false
      state.count = 0
      state.items = []
    },
  },

  extraReducers: builder => {
    builder.addCase(retrieveSales.pending, state => {
      state.isError = false
      state.isLoading = true
    })

    builder.addCase(retrieveSales.fulfilled, (state, action) => {
      state.count = action.payload.length
      state.items = action.payload
      state.isLoading = false
    })

    builder.addCase(retrieveSales.rejected, state => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export const { clear } = salesSlice.actions

const selectSales = (state: RootState): SalesItemState[] => state.sales.items
export const totalSalesCountSelector = createSelector([selectSales], todos =>
  todos.reduce((sum, current: SalesItemState) => sum + current.count, 0),
)
export const totalSalesAmountSelector = createSelector([selectSales], todos =>
  todos.reduce((sum, current: SalesItemState) => sum + current.amount, 0),
)

const { reducer } = salesSlice
export default reducer
