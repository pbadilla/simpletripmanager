import { createGlobalStyle }  from "styled-components";
import reset from 'styled-reset';

import colors from './colors';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  ${reset};
  /* Normalize */
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.white};
    font-family: ${fonts.default};
    font-size: 16px;
  }
`;

export default GlobalStyle;