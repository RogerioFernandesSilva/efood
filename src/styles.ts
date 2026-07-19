import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  branco: '#ffffff',
  beje: '#FFF8F2',
  bgcolor: '#FFEBD9'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, 'sans-serif';
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${cores.beje};
    color: ${cores.rosa}
  }


  .container {
    max-width: 1024px;
    witdh: 100%;
    margin: 0 auto;
  }
`

export default GlobalCss
