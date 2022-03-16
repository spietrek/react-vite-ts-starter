import { ReactNode } from 'react'
import {
  withLoggingOnClick,
  withLoggingOnClickWithProps,
} from './withLoggingOnClick'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export const SimpleButton = ({
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button className="tw-btn tw-btn-sm tw-mr-2" onClick={onClick}>
      {children}
    </button>
  )
}

export const ButtonWithLoggingOnClick = withLoggingOnClick(SimpleButton)

export const ButtonWithLoggingOnClickWithProps =
  withLoggingOnClickWithProps(SimpleButton)

export const SuperButton = withLoggingOnClick(
  withLoggingOnClickWithProps(SimpleButton),
)
