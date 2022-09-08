import { ReactNode } from 'react'
import { TitleContainer } from './styles'

interface TitleProps {
  children: ReactNode
  name: string
}

export function Title({ children, name }: TitleProps) {
  return (
    <TitleContainer>
      {children}
      <span>{name}</span>
    </TitleContainer>
  )
}
