import { ComponentType } from 'react'

interface Base {
  onClick: () => void
}

export const withLoggingOnClick = <TProps extends Base>(
  Component: ComponentType<TProps>,
) => {
  return (props: TProps) => {
    const onClick = (): void => {
      console.log('withLoggingOnClick : onClick')
      props.onClick()
    }

    return <Component {...props} onClick={onClick} />
  }
}

export const withLoggingOnClickWithProps = <TProps extends Base>(
  Component: ComponentType<TProps>,
) => {
  return (props: TProps & { logText: string }) => {
    const onClick = (): void => {
      console.log('withLoggingOnClickWithProps : onClick :', props.logText)
      props.onClick()
    }

    return <Component {...props} onClick={onClick} />
  }
}
