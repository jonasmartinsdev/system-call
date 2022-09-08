import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

interface SignIn {
  email: string
  password: string
}

interface User {
  uid: string
  name: string
  avatarURL: string
  email: string
}

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextType {
  signIn: (data: SignIn) => Promise<void>
  loadingAuth: boolean
  user: User | undefined
}

export const AuthContext = createContext({} as AuthContextType)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    function loadStorage() {
      const userStorage = localStorage.getItem('system-call:user')
      if (userStorage) {
        setUser(JSON.parse(userStorage))
      }
    }
    loadStorage()
  }, [])

  const [loadingAuth, setLoadingAuth] = useState(false)

  async function signIn({ email, password }: SignIn) {
    setLoadingAuth(true)

    try {
      const { data } = await api.post('/users/sessions', {
        email,
        password,
      })
      setUser(data)
      userStorage(data)
      setLoadingAuth(false)

      toast.success('Bem vindo de volta a plataforma! 🚀', {
        theme: 'dark',
      })
    } catch (error) {
      toast.error('Ops! Parece que ocorreu algum erro!', {
        theme: 'dark',
      })
      setLoadingAuth(false)
    }
  }

  function userStorage(data: User) {
    localStorage.setItem('system-call:user', JSON.stringify(data))
  }

  return (
    <AuthContext.Provider value={{ signIn, loadingAuth, user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
