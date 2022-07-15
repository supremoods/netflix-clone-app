import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html, body{
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: #333333;
    font-size: 16px
  }
`;