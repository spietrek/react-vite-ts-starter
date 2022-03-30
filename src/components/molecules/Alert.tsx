import { Severities, Variants } from '@/types'
import AlertIcon from './AlertIcon'
import './Alert.css'

interface AlertProps {
  severity?: Severities
  variant?: Variants
  children: string
  onClose?: () => void
}

const Alert = ({
  severity = 'info',
  variant = 'default',
  children,
  onClose,
}: AlertProps): JSX.Element => {
  const getVariantClass = (): string => {
    return variant !== 'default' ? `alert-${severity}-${variant}` : ''
  }

  return (
    <>
      <div className={`alert-container-main ${getVariantClass()}`}>
        <AlertIcon severity={severity} />
        <div className="alert-body">{children}</div>
        {onClose !== undefined && (
          <button className="alert-button" onClick={onClose}>
            X
          </button>
        )}
      </div>
    </>
  )
}

export default Alert
