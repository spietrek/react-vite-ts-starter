import { useEffect, useRef } from 'react'

type EffectFunction = () => void
type CleanupFunction = () => void
type Dependencies = Array<number | string>

interface IUseLifecycleEffectProps {
  skipMount: boolean
  cleanupOnce: boolean
}

const useLifecycleEffect = (
  fn: EffectFunction,
  cleanup: CleanupFunction,
  deps: Dependencies,
  options: IUseLifecycleEffectProps,
): void => {
  const runEffect = useRef(!options.skipMount)
  const runCleanup = useRef(!options.cleanupOnce)

  useEffect(() => {
    return () => {
      runCleanup.current = true
    }
  }, [])

  useEffect(() => {
    if (runEffect.current) {
      fn()
    } else {
      runEffect.current = true
    }

    return () => {
      if (runCleanup.current) {
        cleanup()
      }
    }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}

export { useLifecycleEffect }
