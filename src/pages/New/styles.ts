import styled from 'styled-components'

export const CustomersContainer = styled.main`
  margin-left: 20rem;
  padding: 0.1rem 1.6rem;

  @media (max-width: 700px) {
    margin-left: 0;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;

    text-decoration: none;

    margin: 1.6rem 0 1.6rem;
    padding: 0.5rem;

    font-size: 1.6rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};

    border-radius: 0.6rem;

    background: ${(props) => props.theme['green-700']};

    transition: ease-in 0.1s;

    svg {
      margin-right: 0.5rem;

      &:hover {
        filter: brightness(1.05);
      }
    }

    @media (max-width: 700px) {
      font-size: 1em;
      padding: 0.3em;
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  margin: 1em 0 1em;
  padding: 0.8em;

  background: ${(props) => props.theme['gray-900']};

  label {
    margin-top: 0.5em;
    font-size: 1.4em;
  }

  input,
  select,
  textarea {
    margin-top: 0.5rem;
    height: 4.5rem;
    padding-inline: 1.5rem;
    max-width: 600px;

    font-size: 1.4rem;
    color: ${(props) => props.theme.white};

    border: none;
    border-radius: 0.6rem;
    background-color: ${(props) => props.theme.inputBack};
  }

  textarea {
    height: 160px;
    resize: none;
    padding: 1rem;
  }

  button[type='submit'] {
    cursor: pointer;
    margin-top: 1.6em;
    height: 4rem;
    max-width: 600px;
    background: ${(props) => props.theme.blue};
    border: 0;
    border-radius: 0.8rem;

    font-size: 1.6rem;
    color: ${(props) => props.theme.white};
  }
`

export const InputRadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
