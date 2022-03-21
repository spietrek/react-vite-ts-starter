import Spinner from '@/components/atoms/Spinner'

interface SpinnerWrapperProps {
  isLoading: boolean
  children?: React.ReactNode
}

const SpinnerWrapper = ({
  isLoading,
  children,
}: SpinnerWrapperProps): JSX.Element => {
  return <>{isLoading ? <Spinner /> : children}</>
}

export default SpinnerWrapper
