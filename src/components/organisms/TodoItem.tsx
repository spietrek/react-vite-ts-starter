import { ITodoItem } from '@/types'

interface IProps {
  item: ITodoItem
}

const TodoItem = ({ item }: IProps): JSX.Element => {
  return (
    <li>
      {item.title} {item.completed.toString()}
    </li>
  )
}

export default TodoItem
