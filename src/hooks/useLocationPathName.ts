import { useLocation } from 'react-router-dom'

const useLocationPathName = (initialState = '/'): string => {
  const { state } = useLocation() as { state: { from: { pathname: string } } }
  const { from } = (state ?? {}) as { from: { pathname: string } }
  const pathName =
    from !== undefined && 'pathname' in from ? from.pathname : initialState

  return pathName
}

export default useLocationPathName
