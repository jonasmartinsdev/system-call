import { Gear } from 'phosphor-react'
import { Sidebar } from '../../components/Sidebar'
import { Title } from '../../components/Title'
import { CustomersContainer, FormContainer } from './styles'

export function Profile() {
  return (
    <div>
      <Sidebar />
      <CustomersContainer>
        <Title name="Configurações">
          <Gear size={25} />
        </Title>

        <FormContainer action="">
          <label>Nome</label>
          <input type="text" placeholder="Digite o Nome da sua Empresa" />
          <label>Email</label>
          <input type="text" placeholder="Digite o CNPJ da sua Empresa" />

          <button type="submit">Salvar</button>
        </FormContainer>
      </CustomersContainer>
    </div>
  )
}
