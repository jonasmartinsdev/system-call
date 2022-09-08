import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :root {
    font-size: 62.5%;
}


 body {
  background-color: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme.white}
 }


 body, input, textarea, button {
  font: 400 1.4rem 'Roboto', sans-serif;
 }
`
