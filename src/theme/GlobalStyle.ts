import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  html, body{
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: Roboto, sans-serif, Tahoma, Helvetica;
    font-size: 14px;
  }

  #__next {
    height: 100%;
  }

  .DraftEditor-root pre {
    white-space: pre-wrap;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

`
