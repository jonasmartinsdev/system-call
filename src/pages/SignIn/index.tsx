import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignButton, SignContainer, SignContent, SignForm } from './styles'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const { signIn, loadingAuth } = useAuth()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (email === '' || password === '') {
      return toast.error('Ops! Preencha todos os campos!', {
        theme: 'dark',
      })
    }

    await signIn({ email, password })

    navigate('/')
  }
  return (
    <SignContainer>
      <SignContent>
        <h1>Faça o seu Login</h1>
        <SignForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <SignButton type="submit">
            {loadingAuth ? 'Carregando...' : 'Entrar'}
          </SignButton>
        </SignForm>

        <p>
          Ainda não tem uma conta? <Link to="/register">Criar uma conta </Link>
        </p>
      </SignContent>
    </SignContainer>
  )
}
