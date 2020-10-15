import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-gradient: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    --color-white: #FFFFFF;
    --color-gray: #DDE3F0;
    --color-blue: #15C3D6;
    --color-blue-dark: #12AFCB;
    --color-blue-light: #96FEFF;
    --color-blue-hover: #17D6EB;
    --color-blue-dashed: #96D2F0;
    --color-blue-low: #D1EDF2;
    --color-yellow: #FFD666;
    --color-pink: #FF669D;
    --color-pink-light: #FFBCD4;
    --color-red-low: #FFE4EE;
    --color-green: #37C77F;
    --color-green-hover: #3EE08F;
    --color-green-low: #EDFFF6;
    --color-green-medium: #A1E9C5;
    --color-text-button: #8D734B;
    --color-text-title: #0089A5;
    --color-text-title-dark: #4D6F80;
    --color-text-base: #5C8599;
    --color-text-complement: #8FA7B2;
    --color-back-lines-in-white: #D3E2E5;
    --color-background: #EBF2F5;
    --color-input: #F5F8FA;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    background-color: var(--color-background);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(---color-background);
  }

  body, input, button, textarea {
    color: var(--color-white);
    font: 600 1.8rem Nunito, sans-serif;
  }

  button {
    cursor: pointer;
    background: none;
  }

  strong {
    font-weight: 800;
  }

  ::-moz-selection {
    color: var(--color-white);
    background-color: var(--color-yellow);
  }

  ::selection {
    color: var(--color-white);
    background-color: var(--color-yellow);
  }

  .noselect {
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    user-select: none;
  }

  /* 700px */
  @media (min-width: 43.75em) {
    :root {
      font-size: 62.5%;
    }
  }
`;

export default GlobalStyle;
