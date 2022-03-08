import { Link } from 'react-router-dom'
import { Template } from '../components/features/useContext'
import { DateContext, useDateContextValue } from '../hooks/UseDateContextHook'

const UseContextPage = (): JSX.Element => {
  const dateContextValue = useDateContextValue()
  const { setCurrentDate, assignDate } = dateContextValue

  return (
    <div className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>

          <h1>User Context</h1>

          <DateContext.Provider value={dateContextValue}>
            <Template />
          </DateContext.Provider>

          <div className="tw-mt-4">
            <button
              className="tw-btn tw-btn-sm"
              onClick={() => setCurrentDate()}
            >
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
      </div>
    </div>
  )
}

export default UseContextPage
