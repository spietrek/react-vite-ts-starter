import React from 'react'
import type { RootState } from '../../../store'
import { useAppSelector, useAppDispatch } from '../../../hooks/UseReduxHooks'
import {
  retrieveTodos,
  completedTodosSelector,
} from '../../../store/slices/todos/todosSlice'

const StoreTodos: React.FC = () => {
  const count = useAppSelector((state: RootState) => state.todos.count)
  const completedTodosCount = useAppSelector((state: RootState) => {
    const completedTodos = completedTodosSelector(state)
    console.log(
      '🚀 ~ file: StoreTodos.tsx ~ line 14 ~ completedTodosCount ~ completedTodos',
      completedTodos,
    )

    return completedTodos.length
  })
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
        <div>
          Todos Count: <span>{count}</span>
        </div>
        <div>
          Completed Todos Count: <span>{completedTodosCount}</span>
        </div>
      </div>
    </div>
  )
}

export default StoreTodos
