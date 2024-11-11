import * as styled from 'styled-components';

const GlobalStyles = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: #555;
    background-color: #fff;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #333;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
    border: none;
  }

  button,
  select,
  option {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
  }
`;

export default GlobalStyles;
