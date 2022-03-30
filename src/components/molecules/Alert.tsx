import { Severities, Variants } from '@/types'
import AlertIcon from './AlertIcon'
import './Alert.css'

interface AlertProps {
  severity?: Severities
  variant?: Variants
  children: string
}

const Alert = ({
  severity = 'info',
  variant = 'default',
  children,
}: AlertProps): JSX.Element => {
  const getVariantClass = (): string => {
    return variant !== 'default' ? `alert-${severity}-${variant}` : ''
  }

  return (
    <>
      <div className={`alert-container-main ${getVariantClass()}`}>
        <AlertIcon severity={severity} />
        {children}
      </div>
    </>
  )
}

export default Alert
