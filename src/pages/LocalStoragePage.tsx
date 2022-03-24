import { Link } from 'react-router-dom'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const LocalStoragePage = (): JSX.Element => {
  const [userName, setUserName] = useLocalStorage('', 'react_app_user_name')
  return (
    <section className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>

          <h1>Local Storage</h1>
          <p className="tw-my-4">User Name: {userName}</p>

          <form className="tw-flex tw-flex-col tw-space-y-5">
            <input
              type="text"
              autoFocus
              value={userName}
              onChange={e => setUserName(e.target.value)}
              className="tw-rounded tw-border tw-border-gray-300 tw-px-4 tw-py-2 tw-transition tw-duration-300 focus:tw-border-transparent focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-blue-200"
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default LocalStoragePage
