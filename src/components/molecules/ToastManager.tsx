import ReactDOM from 'react-dom'
import Toast, { ToastProps } from './Toast'
import { Severities } from '@/types'

interface ToastOptions {
  id?: string
  severity: Severities
  title: string
  duration?: number
}

class ToastManager {
  private readonly containerRef: HTMLDivElement
  private toasts: ToastProps[] = []

  constructor() {
    const body = document.getElementsByTagName('body')[0] as HTMLBodyElement
    const toastContainer = document.createElement('div')
    toastContainer.id = 'toast-container-main'
    body.insertAdjacentElement('beforeend', toastContainer)
    this.containerRef = toastContainer
  }

  public show(options: ToastOptions): void {
    const toastId = Math.random().toString(36).substring(2, 9)
    const toast: ToastProps = {
      id: toastId,
      ...options,
      destroy: () => this.destroy(options.id ?? toastId),
    }

    this.toasts = [toast, ...this.toasts]
    this.render()
  }

  public destroy(id: string): void {
    this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id)
    this.render()
  }

  private render(): void {
    const toastsList = this.toasts.map((toastProps: ToastProps) => (
      <Toast key={toastProps.id} {...toastProps} />
    ))
    ReactDOM.render(toastsList, this.containerRef)
  }
}

export const toast = new ToastManager()
