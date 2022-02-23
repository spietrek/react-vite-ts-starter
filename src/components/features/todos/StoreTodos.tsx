import React from 'react'
import type { RootState } from '../../../store'
import { useAppSelector, useAppDispatch } from '../../../hooks/UseReduxHooks'
import { retrieveTodos } from '../../../store/slices/todos/todosSlice'

const StoreTodos: React.FC = () => {
  const count = useAppSelector((state: RootState) => state.todos.count)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          className="tw-btn tw-btn-sm tw-mr-4"
          aria-label="Retrieve Todos"
          onClick={() => dispatch(retrieveTodos())}
        >
          Retrieve Todos
        </button>
        Todos Count: <span>{count}</span>
      </div>
    </div>
  )
}

export default StoreTodos
