import Stat from './Stat'
import { StatItem } from '@/types'

interface Props {
  items: StatItem[]
}

const StatFigure = ({ items }: Props): JSX.Element => {
  return (
    <div className="tw-stats tw-shadow">
      {items.map((item, index) => (
        <Stat key={index} {...item} />
      ))}
    </div>
  )
}

export default StatFigure
