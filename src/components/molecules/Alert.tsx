import { Severities, Variants } from '@/types'
import AlertIcon from './AlertIcon'
import './Alert.css'

interface AlertProps {
  severity?: Severities
  variant?: Variants
  children: React.ReactNode
  onClose?: () => void
  action?: React.ReactNode
  noMargin?: boolean
}

const Alert = ({
  severity = 'info',
  variant = 'default',
  children,
  onClose,
  action,
  noMargin = false,
}: AlertProps): JSX.Element => {
  const getMarginClass = (): string => {
    if (noMargin) return ''
    return 'alert-container-main-margin'
  }
  const getContainerClass = (): string => {
    return variant !== 'default' ? `alert-container-${severity}-${variant}` : ''
  }

  const getButtonClass = (): string => {
    return variant !== 'default' ? `alert-button-${severity}` : ''
  }

  return (
    <>
      <div
        className={`alert-container-main ${getContainerClass()} ${getMarginClass()}`}
      >
        <AlertIcon severity={severity} />
        <div className="alert-body">{children}</div>
        {onClose !== undefined && (
          <button
            className={`alert-button ${getButtonClass()}`}
            onClick={onClose}
          >
            X
          </button>
        )}

        {action !== undefined && <div className="alert-action">{action}</div>}
      </div>
    </>
  )
}

export default Alert
