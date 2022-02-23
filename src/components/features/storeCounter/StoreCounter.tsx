import React from 'react'
import { RootState } from '../../../store'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
} from '../../../store/slices/counter/counterSlice'

const StoreCounter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

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
