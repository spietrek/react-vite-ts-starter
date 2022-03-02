import React from 'react'
import clsx from 'clsx'
import type { RootState } from '../../../store'
import { useAppSelector, useAppDispatch } from '../../../hooks/UseReduxHooks'
import {
  clear,
  retrieveTodos,
  longRetrieveTodos,
  completedTodosCountSelector,
} from '../../../store/slices/todos/todosSlice'
import InsSpinner from '../../atoms/InsSpinner'

const StoreTodos: React.FC = () => {
  const count = useAppSelector((state: RootState) => state.todos.count)
  const isLoading = useAppSelector((state: RootState) => state.todos.isLoading)
  const completedTodosCount = useAppSelector((state: RootState) => {
    return completedTodosCountSelector(state)
  })
  const dispatch = useAppDispatch()

  return (
    <div>
      {isLoading && <InsSpinner />}

      {!isLoading && (
        <>
          <button
            className={clsx('tw-btn', 'tw-btn-accent', 'tw-btn-sm', {
              'tw-loading': isLoading,
            })}
            aria-label="Retrieve Todos"
            onClick={() => dispatch(retrieveTodos())}
          >
            Retrieve Todos
          </button>
          <button
            className={clsx(
              'tw-btn',
              'tw-btn-accent',
              'tw-btn-sm',
              'tw-my-4',
              'tw-mx-2',
              {
                'tw-loading': isLoading,
              },
            )}
            aria-label="Long Retrieve Todos"
            onClick={() => dispatch(longRetrieveTodos())}
          >
            Long Retrieve Todos
          </button>
          <button
            className="tw-btn tw-btn-accent tw-btn-sm"
            aria-label="Clear"
            onClick={() => dispatch(clear())}
          >
            Clear
          </button>
        </>
      )}

      <div>
        Todos Count: <span>{count}</span>
      </div>
      <div>
        Completed Todos Count: <span>{completedTodosCount}</span>
      </div>
    </div>
  )
}

export default StoreTodos
