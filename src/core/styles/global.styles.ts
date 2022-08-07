import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.brand.brand1};
    border-radius: 20px;
  }
  }

  body {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.white};
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    cursor:pointer;
    outline: 0;
    border: 0; 
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;
