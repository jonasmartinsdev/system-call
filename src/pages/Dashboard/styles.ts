import styled from 'styled-components'

export const DashboardContainer = styled.main`
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

export const TableContainer = styled.table`
  width: 100%;

  border-collapse: collapse;

  margin: 0;
  padding: 0;

  caption {
    margin-block: 0.5em 0.75em;
    font-size: 1.5em;
    @media (max-width: 750px) {
      font-size: 1.3rem;
    }
  }

  thead {
    @media (max-width: 750px) {
      position: absolute;

      height: 0.1rem;
      width: 0.1rem;

      margin: -0.1rem;
      padding: 0;

      border: none;
      overflow: hidden;
      clip: rect(0 0 0 0);
    }
  }

  tr {
    padding: 0.35rem;
    border: 0.1rem solid ${(props) => props.theme['gray-700']};
    background: ${(props) => props.theme['gray-900']};

    @media (max-width: 750px) {
      display: block;
      margin-bottom: 0.65em;
      border-bottom: 0.3rem solid ${(props) => props.theme['gray-700']};
    }
  }

  th,
  td {
    text-align: center;
    padding: 0.6em;
  }

  td {
    .action {
      cursor: pointer;
      display: inline-block;
      align-items: center;
      margin-right: 0.2rem;
      padding: 0.5rem;
      border: 0;
      border-radius: 0.4rem;

      svg {
        vertical-align: middle;
        color: #fff;
        font-size: 1.7rem;
      }
    }

    &::before {
      @media (max-width: 750px) {
        content: attr(data-label);
        float: left;
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    &:last-child {
      border-bottom: 0;
    }

    @media (max-width: 750px) {
      display: block;
      text-align: right;

      font-size: 0.8em;

      border-bottom: 0.1rem solid ${(props) => props.theme['gray-700']};
    }
  }

  th {
    font-size: 0.85em;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  @media (max-width: 750px) {
    border: none;
  }
`
