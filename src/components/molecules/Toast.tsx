/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useCallback, useEffect } from 'react'
import styles from './Toast.module.css'
import { ToastItem } from '@/types'

interface ToastProps {
  list: ToastItem[]
  position: string
  setList: (list: ToastItem[]) => void
}

const Toast = ({ list, position, setList }: ToastProps): JSX.Element => {
  const deleteToast = useCallback(
    (id: number) => {
      const toastListItem = list.filter(e => e.id !== id)
      setList(toastListItem)
    },
    [list, setList],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (list?.length > 0) {
        const [first] = list
        if (first != null) {
          const { id } = first
          deleteToast(id)
        }
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [list, deleteToast])

  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {list.map((toast, i) => (
        <div
          key={i}
          className={`${styles.notification} ${styles.toast} ${styles[position]}`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <div>
            <p className={styles.title}>{toast.title}</p>
            <p className={styles.description}>{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Toast
