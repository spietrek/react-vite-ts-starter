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
