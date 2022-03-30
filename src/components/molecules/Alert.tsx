import { Severities } from '@/types'
import AlertIcon from './AlertIcon'
import './Alert.css'

interface AlertProps {
  severity: Severities
  children: string
}

const Alert = ({ severity, children }: AlertProps): JSX.Element => {
  const getAlertClass = (): string => {
    let value = 'alert-container-main'
    switch (severity) {
      case Severities.Info:
        value += ' alert-info'
        break
      case Severities.Success:
        value += ' alert-success'
        break
      case Severities.Warning:
        value += ' alert-warning'
        break
      case Severities.Error:
        value += ' alert-error'
        break
      default:
        value += ' alert-info'
    }
    return value
  }

  return (
    <>
      <div className={getAlertClass()}>
        <AlertIcon severity={severity} />
        {children}
      </div>
    </>
  )
}

export default Alert
