import { Plus } from 'phosphor-react'
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Sidebar } from '../../components/Sidebar'
import { Title } from '../../components/Title'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import {
  CustomersContainer,
  FormContainer,
  InputRadioContainer,
} from './styles'

interface CustomerProps {
  id: string
  address: string
  cnpj: string
  enterprise: string
}

interface CalledProps {
  id: string
  subject: string
  customer: string
  customerId: string
  created: Date
  createdFormate: string
  status: string
  complement: string
}

export function New() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [subject, setSubject] = useState('Suporte')
  const [customers, setCustomers] = useState<CustomerProps[]>([])
  const [status, setStatus] = useState('Aberto')
  const [customerSelected, setCustomersSelected] = useState(0)
  const [complement, setComplement] = useState('')

  const { user } = useAuth()

  const loadId = useCallback(
    async (customer: CustomerProps[]) => {
      const response = await api.get(`/called/${id}`)

      const { complement, subject, status, customerId } =
        response.data as CalledProps

      const findIndexCustomer = customer.findIndex((item) => {
        return item.id === customerId
      })

      setSubject(subject)
      setStatus(status)
      setComplement(complement)
      setCustomersSelected(findIndexCustomer)
    },
    [id],
  )

  useEffect(() => {
    async function loadCustomers() {
      const response = await api.get('/customers')

      setCustomers(response.data)

      if (id) {
        loadId(response.data)
      }
    }

    loadCustomers()
  }, [id, loadId])

  // Chamada Quando Troca o Assunto
  function handleChangeSelect(e: ChangeEvent<HTMLSelectElement>) {
    setSubject(e.target.value)
  }

  // Chamada Quando Troca o Status
  function handleOptionChange(e: ChangeEvent<HTMLInputElement>) {
    setStatus(e.target.value)
  }

  // Chamada Quando Troca de Cliente
  function handleChangeCustomers(e: ChangeEvent<HTMLSelectElement>) {
    setCustomersSelected(Number(e.target.value))
  }

  async function handleSaveCalled(e: FormEvent) {
    e.preventDefault()

    try {
      if (id) {
        await api.put(`/called/${id}`, {
          customer: customers[customerSelected].enterprise,
          customerId: customers[customerSelected].id,
          subject,
          status,
          complement,
          userId: user?.uid,
        })

        toast.success('Chamado atualizado com sucesso!', {
          theme: 'colored',
        })
        navigate('/')
      } else {
        await api.post('/called', {
          customer: customers[customerSelected].enterprise,
          customerId: customers[customerSelected].id,
          subject,
          status,
          complement,
          userId: user?.uid,
        })

        toast.success('Chamado registrado com sucesso!', {
          theme: 'colored',
        })

        setComplement('')
        setCustomersSelected(0)
      }
    } catch (error) {
      console.log(error)
      toast.error('Ops, ocorreu algum erro. Tente novamente!', {
        theme: 'colored',
      })
    }
  }

  return (
    <div>
      <Sidebar />
      <CustomersContainer>
        <Title name="Novo Chamado">
          <Plus size={25} />
        </Title>

        <FormContainer onSubmit={handleSaveCalled}>
          <label>Cliente</label>
          <select value={customerSelected} onChange={handleChangeCustomers}>
            {customers.map((item, index) => {
              return (
                <option key={item.id} value={index}>
                  {item.enterprise}
                </option>
              )
            })}
          </select>

          <label>Assunto</label>
          <select value={subject} onChange={handleChangeSelect}>
            <option value="Suporte">Suporte</option>
            <option value="Visita Técnica">Visita Técnica</option>
            <option value="Financeiro">Financeiro</option>
          </select>

          <label>Status</label>
          <InputRadioContainer>
            <input
              type="radio"
              name="radio"
              value="Aberto"
              onChange={handleOptionChange}
              checked={status === 'Aberto'}
            />
            <span>Em Aberto</span>
            <input
              type="radio"
              name="radio"
              value="Progresso"
              onChange={handleOptionChange}
              checked={status === 'Progresso'}
            />
            <span>Progresso</span>
            <input
              type="radio"
              name="radio"
              value="Atendido"
              onChange={handleOptionChange}
              checked={status === 'Atendido'}
            />
            <span>Atendido</span>
          </InputRadioContainer>

          <label>Complemento</label>
          <textarea
            value={complement}
            placeholder="Descreve o seu problema (Opcional)"
            onChange={(e) => setComplement(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </FormContainer>
      </CustomersContainer>
    </div>
  )
}
