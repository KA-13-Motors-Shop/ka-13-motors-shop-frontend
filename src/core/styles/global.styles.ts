import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #FFFFFF;;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
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
