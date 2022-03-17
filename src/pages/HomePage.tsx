import { Link } from 'react-router-dom'

const HomePage = (): JSX.Element => {
  return (
    <section>
      <div className="tw-container tw-mx-auto">
        <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
          <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
            <div>
              <h1 className="tw-mb-2">Admin/User Roles</h1>
              <Link className="tw-btn tw-btn-sm tw-mb-4" to="hooks">
                Hooks Examples
              </Link>
              <Link className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4" to="hocs">
                HOCs
              </Link>
              <Link
                className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4"
                to="use-context"
              >
                Use Context
              </Link>
              <Link
                className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4"
                to="composition"
              >
                Composition
              </Link>
            </div>

            <div className="tw-divider" />

            <div>
              <h1 className="tw-mb-2">Admin/Editor Roles</h1>
              <Link className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4" to="counter">
                Store Counter
              </Link>
              <Link className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4" to="todos">
                Store Todos
              </Link>
            </div>

            <div className="tw-divider" />

            <div>
              <h1 className="tw-mb-2">Admin Role</h1>

              <Link className="tw-btn tw-btn-sm tw-mb-4 tw-ml-4" to="settings">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
