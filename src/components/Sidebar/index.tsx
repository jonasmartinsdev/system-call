import { House, User, Gear } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderImgWrapper, SidebarContainer } from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <HeaderImgWrapper>
        <img
          src="https://avatars.githubusercontent.com/u/59068519?v=4"
          alt=""
        />
      </HeaderImgWrapper>
      <NavLink to="/">
        <House />
        Chamados
      </NavLink>
      <NavLink to="/customers">
        <User />
        Clientes
      </NavLink>
      <NavLink to="/profile">
        <Gear />
        Configurações
      </NavLink>
    </SidebarContainer>
  )
}
