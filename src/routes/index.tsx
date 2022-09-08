import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { useAuth } from '../hooks/auth'

import 'react-toastify/dist/ReactToastify.css'

export function Routes() {
  const { user } = useAuth()
  return (
    <BrowserRouter>
      <ToastContainer autoClose={2000} />
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
