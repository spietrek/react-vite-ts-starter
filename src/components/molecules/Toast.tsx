import { useEffect } from 'react'
import Alert from './Alert'
import './Toast.css'

export interface ToastProps {
  id: string
  destroy: () => void
  title: string
  duration?: number
}

const Toast = (props: ToastProps): JSX.Element => {
  const { destroy, title, duration = 3000, id } = props

  useEffect(() => {
    if (duration === 0) return

    const timer = setTimeout(() => {
      destroy()
    }, duration)

    return () => clearTimeout(timer)
  }, [destroy, duration])

  return (
    <div className="toast-success">
      <Alert severity="error" variant="outlined" noMargin onClose={destroy}>
        {title} {id}
      </Alert>
    </div>
  )
}

export default Toast
