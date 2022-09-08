import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  position: fixed;
  height: 100%;
  width: 20rem;

  background: ${(props) => props.theme.buttonDarkBlue};

  overflow: auto;

  a {
    display: flex;
    align-items: center;

    padding: 1.6rem;

    color: ${(props) => props.theme.border};
    text-decoration: none;

    transition: ease-in-out 0.4s;

    &:hover {
      background: ${(props) => props.theme['gray-800']};
      color: ${(props) => props.theme.white};
    }

    @media (max-width: 700px) {
      float: left;
    }
  }

  .active {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme.white};
  }

  svg {
    margin-right: 0.5rem;
    font-size: 2.4rem;

    @media (max-width: 700px) {
      display: none;
    }
  }

  @media (max-width: 700px) {
    position: relative;
    width: 100%;
    height: auto;
  }
`

export const HeaderImgWrapper = styled.header`
  height: 15rem;
  padding-top: 3rem;

  img {
    display: block;
    width: 9rem;
    height: 9rem;

    margin: auto;

    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    display: none;
  }
`
