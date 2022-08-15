export interface StatItem {
  pathD: string
  title: string
  count: string
  desc: string
}

const AllVariants = {
  Default: 'default',
  Filled: 'filled',
  Outlined: 'outlined',
} as const

export type Variants = typeof AllVariants[keyof typeof AllVariants]

const AllSeverities = {
  Info: 'info',
  Success: 'success',
  Warning: 'warning',
  Error: 'error',
} as const

export type Severities = typeof AllSeverities[keyof typeof AllSeverities]

export interface ITodoItem {
  id: number
  title: string
  completed: boolean
  userId: number
}

export interface ITodosState {
  isError?: boolean
  isLoading: boolean
  count: number
  completedCount: number
  todos: ITodoItem[]
}

export type IMinimumTodosState = Pick<ITodosState, 'isLoading' | 'todos'>
