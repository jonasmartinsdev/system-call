import styled from 'styled-components'

export const SignContainer = styled.div`
  display: flex;

  align-items: center;

  justify-content: center;

  height: 100vh;

  background: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme.white};
`

export const SignContent = styled.div`
  h1 {
    margin-bottom: 5rem;
  }

  a {
    margin-left: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 3.5rem;

  background: ${(props) => props.theme['gray-900']};
  border-radius: 1rem;

  @media (min-width: 600px) {
    width: min(60rem, 100%);
    height: min(55rem, 100%);
  }
`

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  input {
    height: 4.5rem;
    padding-inline: 1.5rem;

    font-size: 1.4rem;
    color: ${(props) => props.theme.white};

    border: none;
    border-radius: 0.6rem;
    background-color: ${(props) => props.theme.inputBack};
  }
`

export const SignButton = styled.button`
  height: 4.5rem;

  margin-block: 1rem 1.5rem;

  font-size: 1.8rem;
  color: ${(props) => props.theme.white};

  border: none;
  border-radius: 0.6rem;
  background-color: ${(props) => props.theme.blue};

  cursor: pointer;
  &:hover {
    filter: brightness(0.95);
  }
`
