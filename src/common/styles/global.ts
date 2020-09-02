import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";


export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; /* To make 1rem === 10px for easy calculation */
    height: 100%;
  }
  body { 
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.7rem;
    min-height: 100%;
  }
  html, body {
    margin: 0;
  }
  #root {
    min-height: 100vh;
    height: 100%;
  }
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${theme.colors.blue};
  }
  ul {
    line-height: 1.7;
    margin: 0;
  }
  h1, h2, h3, h4 {
    margin: 0 0 2rem 0;
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
  }
  p {
    margin: 0;
    line-height: 1.5;
  }
  input, button {
    font-family: inherit;
    font-size: inherit;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;