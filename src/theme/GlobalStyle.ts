import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;

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
    font-size: 16px;
  }

  #__next {
    height: 100%;
  }

  .DraftEditor-root pre {
    white-space: pre-wrap;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  p {
    margin: 0 0 1rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul, ol {
    margin: 0 0 1rem 0;
    padding-left: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  li {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  blockquote {
    margin: 0 0 1rem 0;
    padding-left: 1rem;
    border-left: 3px solid #ccc;

    &:last-child {
      margin-bottom: 0;
    }
  }

  pre, code {
    white-space: pre-line !important;
  }

  pre {
    margin: 0 0 1rem 0;
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 4px;
    overflow-x: auto;

    &:last-child {
      margin-bottom: 0;
    }
  }

  code {
    padding: 0.2rem 0.4rem;
    background: #f5f5f5;
    border-radius: 3px;
    font-size: 0.9em;
  }

  pre code {
    padding: 0;
    background: none;
  }

  .flex {
    display: flex;

    &.align-items-center {
      align-items: center;
    }
  }

  .flex-1 {
    flex: 1;
  }

`
