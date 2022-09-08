import { Chat, MagnifyingGlass, PencilSimple, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Title } from '../../components/Title'
import { api } from '../../services/api'
import { DashboardContainer, TableContainer } from './styles'

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

export function Dashboard() {
  const [called, setCalled] = useState<CalledProps[]>([])

  useEffect(() => {
    async function loadChamados() {
      const response = await api.get('/called')
      setCalled(response.data)
    }

    loadChamados()

    return () => {}
  }, [])

  return (
    <div>
      <Sidebar />

      <DashboardContainer>
        <Title name="Chamados">
          <Chat size={25} />
        </Title>

        <Link to="/new" className="btn">
          <Plus weight="bold" />
          Novo chamado
        </Link>

        <TableContainer>
          <thead>
            <tr>
              <th scope="col">Cliente</th>
              <th scope="col">Assunto</th>
              <th scope="col">Status</th>
              <th scope="col">Cadastrado em</th>
              <th scope="col">#</th>
            </tr>
          </thead>

          <tbody>
            {called.map((item) => {
              return (
                <tr key={item.id}>
                  <td data-label="Cliente">{item.customer}</td>
                  <td data-label="Assunto">{item.subject}</td>
                  <td data-label="Status">{item.status}</td>
                  <td data-label="Cadastro">{item.createdFormate}</td>
                  <td data-label="#">
                    <button
                      className="action"
                      style={{ backgroundColor: '#3583f6' }}
                    >
                      <MagnifyingGlass />
                    </button>

                    <Link
                      to={`/new/${item.id}`}
                      className="action"
                      style={{ backgroundColor: '#f6a935' }}
                    >
                      <PencilSimple />
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TableContainer>
      </DashboardContainer>
    </div>
  )
}
