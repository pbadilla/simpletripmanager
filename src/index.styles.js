import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import catalogAppTheme from './styles/themes/catalogApp';

const { fonts } = catalogAppTheme;

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    padding: 0;
    background-color: white;
  }
`;

export const ScrollView = styled.section`
  overflow: hidden;
  font-family: ${fonts.family};
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const MainContent = styled(ScrollView)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-size: ${fonts.base};
  padding: 3em;
  ${props =>
    props.bg &&
    `
    background-color: ${props.bg};
  `}
`;
