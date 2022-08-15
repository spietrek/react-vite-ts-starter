import { IMinimumTodosState } from '@/types'
import TodoItem from './TodoItem'

const BaseTodoList = ({ todos }: IMinimumTodosState): JSX.Element | null => {
  if (todos === null || todos === undefined) {
    return null
  }

  return (
    <ul>
      {todos.map(item => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default BaseTodoList
