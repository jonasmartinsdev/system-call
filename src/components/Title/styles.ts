import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1.6rem;

  padding: 0.8rem;

  background: ${(props) => props.theme['gray-900']};
  border-radius: 0.5rem;

  span {
    margin-left: 1em;
    font-size: 1.5em;
    @media (max-width: 700px) {
      font-size: 1.25em;
    }
  }
`
