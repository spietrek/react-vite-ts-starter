import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/UseAuth'

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate()
  const { state } = useLocation() as { state: { path: string } }
  const auth = useAuth()
  const { path } = (state ?? {}) as { path: string }

  const from = path ?? '/'

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string

    auth.login(username, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{' '}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
