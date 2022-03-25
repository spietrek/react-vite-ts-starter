import { useMemo } from 'react'

interface Props {
  score: number
}

const PasswordStrength = ({ score }: Props): JSX.Element => {
  const maxDivs = 5

  const colorDiv = (newScore: number, newIndex: number): string => {
    if (newScore > 0) {
      if (newScore === 1 && newIndex === 0) {
        return 'tw-bg-red-500'
      }
      if (newScore === 2 && newIndex <= 1) {
        return 'tw-bg-red-500'
      }
      if (newScore === 3 && newIndex <= 3) {
        return 'tw-bg-yellow-400'
      }
      if (newScore === 4) {
        return 'tw-bg-green-500'
      }
    }

    return 'tw-bg-gray-200'
  }

  const divs = useMemo(() => {
    return [...Array(maxDivs)].map((_element, index) => (
      <div className="tw-w-1/5 tw-px-1 tw-pt-2" key={index}>
        <div
          className={`tw-h-1 tw-rounded-xl tw-transition-colors tw-duration-300 tw-ease-in-out ${colorDiv(
            score,
            index,
          )}`}
        />
      </div>
    ))
  }, [score])

  return <div className="-tw-mx-1 tw-flex">{divs}</div>
}

export default PasswordStrength
