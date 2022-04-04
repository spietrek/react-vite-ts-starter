import { useEffect } from 'react'
import Alert from './Alert'
import { Severities } from '@/types'
import './Toast.css'

export interface ToastProps {
  id: string
  severity?: Severities
  title: string
  duration?: number
  destroy: () => void
}

const Toast = (props: ToastProps): JSX.Element => {
  const { destroy, title, duration = 3000, id, severity = 'info' } = props

  useEffect(() => {
    if (duration === 0) return

    const timer = setTimeout(() => {
      destroy()
    }, duration)

    return () => clearTimeout(timer)
  }, [destroy, duration])

  return (
    <div className="toast-success">
      <Alert severity={severity} variant="outlined" noMargin onClose={destroy}>
        {title} {id}
      </Alert>
    </div>
  )
}

export default Toast
