import clsx from 'clsx'
import type { RootState } from '@/store'
import { useAppSelector, useAppDispatch } from '@/hooks/useReduxHooks'
import {
  clear,
  retrieveTodos,
  longRetrieveTodos,
  completedTodosCountSelector,
} from '@/store/slices/todos/todosSlice'
import { withLoading } from './withLoading'
import TodoList from '@/components/organisms/TodoList'

const StoreTodos = (): JSX.Element => {
  const count = useAppSelector((state: RootState) => state.todos.count)
  const todos = useAppSelector((state: RootState) => state.todos.todos)
  const isLoading = useAppSelector((state: RootState) => state.todos.isLoading)
  const completedTodosCount = useAppSelector((state: RootState) => {
    return completedTodosCountSelector(state)
  })
  const dispatch = useAppDispatch()

  const LoadingTodoList = withLoading(TodoList)

  const handleRetrieveTodosClick = (): void => {
    dispatch(retrieveTodos())
  }

  const handleLongRetrieveTodosClick = (): void => {
    dispatch(longRetrieveTodos())
  }

  return (
    <>
      <button
        className={clsx('tw-btn', 'tw-btn-accent', 'tw-btn-sm', {
          'tw-loading': isLoading,
        })}
        aria-label="Retrieve Todos"
        onClick={handleRetrieveTodosClick}
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
        onClick={handleLongRetrieveTodosClick}
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

      <div>
        Todos Count: <span>{count}</span>
      </div>
      <div>
        Completed Todos Count: <span>{completedTodosCount}</span>
      </div>

      <LoadingTodoList todos={todos} isLoading={isLoading} />
    </>
  )
}

export default StoreTodos
