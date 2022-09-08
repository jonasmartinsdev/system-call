import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { SignButton, SignContainer, SignContent, SignForm } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

const newUserFormValidationSchema = zod.object({
  name: zod.string().min(3, 'Informe seu nome'),
  email: zod.string().email('E-mail invalido'),
  password: zod.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

type NewUserFormData = zod.infer<typeof newUserFormValidationSchema>

export function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewUserFormData>({
    resolver: zodResolver(newUserFormValidationSchema),
  })

  const navigate = useNavigate()

  function errorsNotify() {
    toast.error(errors.name?.message)
    toast.error(errors.email?.message)
    toast.error(errors.password?.message)

    console.log(errors)
  }

  async function handleCreateNewUser(data: NewUserFormData) {
    await api.post('/users', {
      name: data.name,
      email: data.email,
      password: data.password,
    })

    toast.success('Usuário criado com sucesso!')

    navigate('/')
  }
  return (
    <SignContainer>
      <SignContent>
        <h1>Faça o seu Registro</h1>
        <SignForm onSubmit={handleSubmit(handleCreateNewUser)}>
          <input type="text" placeholder="Nome" {...register('name')} />
          <input type="text" placeholder="E-mail" {...register('email')} />
          <input
            type="password"
            placeholder="Senha"
            {...register('password')}
          />

          <SignButton type="submit" onClick={errorsNotify}>
            Cadastrar
          </SignButton>
        </SignForm>

        <p>
          Você já possui uma conta?
          <Link to="/">Entrar na sua conta</Link>
        </p>
      </SignContent>
    </SignContainer>
  )
}
