import { Link } from 'react-router-dom'

const HomePage = (): JSX.Element => {
  return (
    <section>
      <div className="tw-container tw-mx-auto">
        <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
          <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
            <Link className="tw-btn tw-btn-sm tw-mb-4" to="hooks">
              Hooks Examples
            </Link>
            <Link className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4" to="hocs">
              HOCs
            </Link>
            <Link className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4" to="use-context">
              Use Context
            </Link>
            <Link className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4" to="composition">
              Composition
            </Link>
            <Link className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4" to="counter">
              Store Counter
            </Link>
            <Link className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4" to="todos">
              Store Todos
            </Link>
            <Link className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4" to="settings">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
