import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    
    --White: hsl(0, 0%, 100%);
    --Light: hsl(212, 45%, 89%);
    --Grayish: hsl(220, 15%, 55%);
    --Dark: hsl(218, 44%, 22%);

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1440px){
      font-size: 93.75%
    }
    @media (max-width: 375px){
      font-size: 87.5%
    }

  }

  body {
    background: var(--Light);
    -webkit-font-smoothing: antialiased;
  }
  
  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Outfit', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700
  }

` 
