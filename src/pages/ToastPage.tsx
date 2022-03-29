import { useState } from 'react'
import { Link } from 'react-router-dom'
import Toast from '@/components/molecules/Toast'
import { ToastItem } from '@/types'

const ToastPage = (): JSX.Element => {
  const [list, setList] = useState<ToastItem[]>([])
  let toasts = null

  const showToast = (type: string): void => {
    switch (type) {
      case 'success':
        toasts = {
          id: list.length + 1,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
        }
        break
      case 'danger':
        toasts = {
          id: list.length + 1,
          title: 'Danger',
          description: 'This is a danger toast component',
          backgroundColor: '#d9534f',
        }
        break
      case 'info':
        toasts = {
          id: list.length + 1,
          title: 'Info',
          description: 'This is a info toast component',
          backgroundColor: '#5bc0de',
        }
        break
      case 'warning':
        toasts = {
          id: list.length + 1,
          title: 'Warning',
          description: 'This is a warning toast component',
          backgroundColor: '#f0ad4e',
        }
        break
      default:
        toasts = null
    }

    setList(toasts === null ? [] : [...list, toasts])
  }

  return (
    <section className="tw-container tw-mx-auto">
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-[900px] tw-rounded-md tw-bg-slate-300 tw-py-16 tw-px-4 tw-text-center tw-shadow-3xl">
          <Link className="tw-btn tw-btn-sm tw-mb-4" to="/">
            Home
          </Link>

          <h1>Toasts</h1>

          <div>
            <button
              className="tw-btn tw-btn-success tw-btn-sm"
              onClick={() => showToast('success')}
            >
              Success
            </button>
            <button
              className="tw-btn tw-btn-error tw-btn-sm tw-ml-2"
              onClick={() => showToast('danger')}
            >
              Danger
            </button>
            <button
              className="tw-btn tw-btn-info tw-btn-sm tw-ml-2"
              onClick={() => showToast('info')}
            >
              Info
            </button>
            <button
              className="tw-btn tw-btn-warning tw-btn-sm tw-ml-2"
              onClick={() => showToast('warning')}
            >
              Warning
            </button>
            <button
              className="tw-btn tw-btn-sm tw-ml-2"
              onClick={() => showToast('')}
            >
              Close All
            </button>
          </div>

          <Toast list={list} position="bottom-right" setList={setList} />
        </div>
      </div>
    </section>
  )
}

export default ToastPage
