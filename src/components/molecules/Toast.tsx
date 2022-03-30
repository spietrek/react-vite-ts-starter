import { useEffect } from 'react'
import './Toast.css'

export interface ToastProps {
  id: string
  destroy: () => void
  title: string
  content?: string
  duration?: number
}

const Toast = (props: ToastProps): JSX.Element => {
  const { destroy, content = null, title, duration = 3000, id } = props

  useEffect(() => {
    if (duration === 0) return

    const timer = setTimeout(() => {
      destroy()
    }, duration)

    return () => clearTimeout(timer)
  }, [destroy, duration])

  return (
    <div className="toast-success">
      <div className="toast-header">
        <h4 className="toast-title">
          {title} {id}
        </h4>
        <button className="toast-button" onClick={destroy}>
          X
        </button>
      </div>
      {content != null && <p className="toast-content">{content}</p>}
    </div>
  )
}

export default Toast
