import { useNavigate } from 'react-router-dom'

const UnauthorizedPage = (): JSX.Element => {
  const navigate = useNavigate()

  const goBack = (): void => navigate(-1)

  return (
    <section>
      <div className="tw-container tw-mx-auto">
        <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
          <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div>
              <button className="tw-btn tw-btn-sm tw-mt-4" onClick={goBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnauthorizedPage
