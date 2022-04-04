import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from '@/components/molecules/ToastManager'
import Alert from '@/components/molecules/Alert'

const ToastPage = (): JSX.Element => {
  const [visible, setVisible] = useState(true)

  const handleInfoToast = (): void => {
    toast.show({
      severity: 'info',
      title:
        'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.',
      duration: 3000,
    })
  }

  const handleSuccessToast = (): void => {
    toast.show({
      severity: 'success',
      title: 'User has been created successfully.',
      duration: 3000,
    })
  }

  const handleWarningToast = (): void => {
    toast.show({
      severity: 'warning',
      title: 'Database &apos;USERS&apos; is currently unavailable.',
      duration: 3000,
    })
  }

  const handleErrorToast = (): void => {
    toast.show({
      severity: 'error',
      title: 'User was not able to be saved. Duplicate user.',
      duration: 3000,
    })
  }

  const handleVisibleClick = (): void => {
    setVisible(!visible)
  }

  return (
    <section className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>

          <h1 className="tw-mb-4">Alerts</h1>

          <Alert severity="info" variant="outlined">
            We hold these truths to be self-evident, that all men are created
            equal, that they are endowed by their Creator with certain
            unalienable Rights, that among these are Life, Liberty and the
            pursuit of Happiness.
          </Alert>
          <Alert severity="info" variant="filled">
            We hold these truths to be self-evident, that all men are created
            equal, that they are endowed by their Creator with certain
            unalienable Rights, that among these are Life, Liberty and the
            pursuit of Happiness.
          </Alert>
          <Alert severity="success" variant="outlined">
            User has been created successfully.
          </Alert>
          <Alert severity="success" variant="filled">
            User has been created successfully.
          </Alert>
          <Alert severity="warning" variant="outlined">
            Database &apos;USERS&apos; is currently unavailable.
          </Alert>
          <Alert severity="warning" variant="filled">
            Database &apos;USERS&apos; is currently unavailable.
          </Alert>
          <Alert severity="error" variant="outlined">
            User was not able to be saved. Duplicate user.
          </Alert>
          <Alert severity="error" variant="filled">
            User was not able to be saved. Duplicate user.
          </Alert>

          <h1 className="tw-my-4">Alerts with Actions</h1>

          {!visible && (
            <button
              className="tw-btn tw-btn-info tw-btn-sm"
              onClick={handleVisibleClick}
            >
              Show Alert
            </button>
          )}

          {visible && (
            <>
              <Alert
                severity="info"
                variant="outlined"
                onClose={handleVisibleClick}
              >
                Click X to close me.
              </Alert>
              <Alert
                severity="error"
                variant="outlined"
                onClose={handleVisibleClick}
              >
                We hold these truths to be self-evident, that all men are
                created equal, that they are endowed by their Creator with
                certain unalienable Rights, that among these are Life, Liberty
                and the pursuit of Happiness.
              </Alert>
              <Alert
                severity="info"
                variant="outlined"
                action={
                  <button
                    className="tw-btn tw-btn-xs"
                    onClick={handleVisibleClick}
                  >
                    UNDO
                  </button>
                }
              >
                We hold these truths to be self-evident, that all men are
                created equal, that they are endowed by their Creator with
                certain unalienable Rights, that among these are Life, Liberty
                and the pursuit of Happiness.
              </Alert>
            </>
          )}

          <h1 className="tw-my-4">Toasts</h1>

          <button
            className="tw-btn tw-btn-info tw-btn-sm"
            onClick={handleInfoToast}
          >
            Info
          </button>
          <button
            className="tw-btn tw-btn-success tw-btn-sm tw-ml-2"
            onClick={handleSuccessToast}
          >
            Success
          </button>
          <button
            className="tw-btn tw-btn-warning tw-btn-sm tw-ml-2"
            onClick={handleWarningToast}
          >
            Warning
          </button>
          <button
            className="tw-btn tw-btn-error tw-btn-sm tw-ml-2"
            onClick={handleErrorToast}
          >
            Error
          </button>
        </div>
      </div>
    </section>
  )
}

export default ToastPage
