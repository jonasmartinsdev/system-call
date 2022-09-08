import { User } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { Sidebar } from '../../components/Sidebar'
import { Title } from '../../components/Title'
import { api } from '../../services/api'
import { CustomersContainer, FormContainer } from './styles'

export function Customers() {
  const [address, setAddress] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [enterprise, setEnterprise] = useState('')

  async function handleCreateNewCustomer(e: FormEvent) {
    e.preventDefault()

    if (address === '' || cnpj === '' || enterprise === '') {
      return toast.error('Preencha Todos os Campos!', {
        theme: 'colored',
      })
    }

    await api
      .post('/customers', { enterprise, cnpj, address })
      .then(() => {
        setEnterprise('')
        setAddress('')
        setCnpj('')

        toast.info('Cadastrada com Sucesso!', {
          theme: 'colored',
        })
      })
      .catch(() => {
        toast.error('Erro ao Cadastrar!', {
          theme: 'colored',
        })
      })
  }

  return (
    <div>
      <Sidebar />
      <CustomersContainer>
        <Title name="Clientes">
          <User size={25} />
        </Title>

        <FormContainer onSubmit={handleCreateNewCustomer}>
          <label>Nome da empresa</label>
          <input
            type="text"
            value={enterprise}
            placeholder="Digite o Nome da sua Empresa"
            onChange={(e) => setEnterprise(e.target.value)}
          />
          <label>CNPJ</label>
          <input
            type="text"
            value={cnpj}
            placeholder="Digite o CNPJ da sua Empresa"
            onChange={(e) => setCnpj(e.target.value)}
          />

          <label>Endereço da Empresa</label>
          <input
            type="text"
            value={address}
            placeholder="Digite o Endereço da sua Empresa"
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </FormContainer>
      </CustomersContainer>
    </div>
  )
}
