import { useDateContext } from '../../../hooks/UseDateContextHook'

const Organism: React.FC = () => {
  const { date, setCurrentDate, assignDate } = useDateContext()

  return (
    <div className="tw-bg-slate-500">
      <h1>Organism</h1>
      <div>
        <span>{date?.toLocaleString()}</span>
      </div>
      <button className="tw-btn tw-btn-sm" onClick={() => setCurrentDate()}>
        Set Current Date
      </button>
      <button
        className="tw-btn tw-btn-sm tw-mr-4"
        onClick={() => assignDate(new Date())}
      >
        Assign Date
      </button>
    </div>
  )
}

export default Organism
