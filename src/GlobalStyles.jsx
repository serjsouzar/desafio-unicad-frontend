import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto' sans-serif;
  }

  body{
    font-family: 'Poppins', sans-serif;
    background: rgba(91,103,126,255) ;     
    width: 100%;
  }
` 