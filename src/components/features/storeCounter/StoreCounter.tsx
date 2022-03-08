import React from 'react'
import type { RootState } from '../../../store'
import { useAppSelector, useAppDispatch } from '../../../hooks/UseReduxHooks'
import {
  decrement,
  increment,
} from '../../../store/slices/counter/counterSlice'

const StoreCounter = (): JSX.Element => {
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          className="tw-btn tw-btn-sm tw-mr-4"
          aria-label="Increment"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="tw-btn tw-btn-sm tw-ml-4"
          aria-label="Decrement"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default StoreCounter
