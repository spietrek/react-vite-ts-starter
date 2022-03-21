import { useDateContext } from '@/hooks/useDateContextHook'

const Organism = (): JSX.Element => {
  const { date, setCurrentDate, assignDate } = useDateContext()

  return (
    <div className="tw-bg-slate-500 tw-p-4">
      <h1>Organism</h1>
      <div>
        <span>{date?.toLocaleString()}</span>
      </div>
      <div className="tw-mt-4">
        <button className="tw-btn tw-btn-sm" onClick={() => setCurrentDate()}>
          Set Current Date
        </button>
        <button
          className="tw-btn tw-btn-sm tw-ml-4"
          onClick={() => assignDate(new Date())}
        >
          Assign Date
        </button>
      </div>
    </div>
  )
}

export default Organism
