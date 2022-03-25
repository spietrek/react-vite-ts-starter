import { useEffect, useState, useCallback } from 'react'

type UseZxcvbnReturnType = [number, (password: string) => void]

const useZxcvbn = (): UseZxcvbnReturnType => {
  const [strength, setStrength] = useState<number>(0)
  const [password, setPassword] = useState('')

  const passwordIsStrong = useCallback(async () => {
    const value = password ?? ''
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const zxcvbn = (await import('zxcvbn')).default

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const calculatedPasswordStrength = zxcvbn(value).score
    const newPasswordStrength =
      calculatedPasswordStrength === 0 && value.length > 0
        ? 1
        : calculatedPasswordStrength

    return password.length > 0 ? newPasswordStrength : 0
  }, [password])

  useEffect(() => {
    try {
      void passwordIsStrong().then(result => {
        setStrength(result)
      })
    } catch (error) {
      setStrength(0)
    }
  }, [passwordIsStrong])

  const update = (updatedPassword: string): void => {
    setPassword(updatedPassword)
  }

  return [strength, update]
}

export default useZxcvbn
