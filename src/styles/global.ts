import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }
  body, input-security, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;
  }

  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  ::-webkit-scrollbar {
    width: 0.45rem;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme["base-label"]}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${(props) => props.theme["base-span"]}
  }

  @media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }

  }


`;
