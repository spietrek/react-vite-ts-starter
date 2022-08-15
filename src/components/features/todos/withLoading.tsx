import Spinner from '@/components/atoms/Spinner'
import { IMinimumTodosState } from '@/types'
import { ComponentType } from 'react'

export const withLoading = <T extends IMinimumTodosState>(
  WrappedComponent: ComponentType<T>,
) => {
  return (props: T) => {
    if (props.isLoading) {
      return <Spinner />
    }

    return <WrappedComponent {...props} />
  }
}
