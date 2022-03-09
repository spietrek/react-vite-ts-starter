import { Link } from 'react-router-dom'
import { StoreTodos } from '@/components/features/todos'

const StoreTodosPage = (): JSX.Element => {
  return (
    <div className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>
          <h1>To Dos</h1>
          <StoreTodos />
        </div>
      </div>
    </div>
  )
}

export default StoreTodosPage
