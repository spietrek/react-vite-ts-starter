import React from 'react'
import clsx from 'clsx'
import type { RootState } from '../../../store'
import { useAppSelector, useAppDispatch } from '../../../hooks/UseReduxHooks'
import {
  retrieveTodos,
  completedTodosSelector,
} from '../../../store/slices/todos/todosSlice'

const StoreTodos: React.FC = () => {
  const count = useAppSelector((state: RootState) => state.todos.count)
  const isLoading = useAppSelector((state: RootState) => state.todos.isLoading)
  const completedTodosCount = useAppSelector((state: RootState) => {
    const completedTodos = completedTodosSelector(state)
    return completedTodos.length
  })
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          className={clsx('tw-btn', 'tw-btn-accent', 'tw-btn-sm', 'tw-mr-4', {
            'tw-loading': isLoading,
          })}
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
