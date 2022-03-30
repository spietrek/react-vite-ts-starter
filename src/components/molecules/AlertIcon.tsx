import { Severities } from '@/types'
import InfoIcon from '@/components/atoms/InfoIcon'
import SuccessIcon from '@/components/atoms/SuccessIcon'
import ErrorIcon from '@/components/atoms/ErrorIcon'
import WarningIcon from '@/components/atoms/WarningIcon'

interface AlertIconProps {
  severity: Severities
}

const AlertIcon = ({ severity }: AlertIconProps): JSX.Element => {
  return (
    <>
      <div className="tw-mr-4">
        {severity === 'info' && <InfoIcon />}
        {severity === 'success' && <SuccessIcon />}
        {severity === 'error' && <ErrorIcon />}
        {severity === 'warning' && <WarningIcon />}
      </div>
    </>
  )
}

export default AlertIcon
