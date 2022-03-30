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
        {severity === Severities.Info && <InfoIcon />}
        {severity === Severities.Success && <SuccessIcon />}
        {severity === Severities.Error && <ErrorIcon />}
        {severity === Severities.Warning && <WarningIcon />}
      </div>
    </>
  )
}

export default AlertIcon
