import Spinner from '../atoms/Spinner'

interface SpinnerWrapperProps {
  isLoading: boolean
  children?: React.ReactNode
}

const StoreTodosPage = ({
  isLoading,
  children,
}: SpinnerWrapperProps): JSX.Element => {
  return <>{isLoading ? <Spinner /> : children}</>
}

export default StoreTodosPage
