import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
 ${styledNormalize};

 *,
 *::before,
 &::after {
   box-sizing: border-box;
 }

  @font-face {
    font-family: 'gilroy';
    src: url("fonts/gilroy-extrabold-webfont.woff2") format('woff2'),
         url("fonts/gilroy-extrabold-webfont.woff") format('woff');
    font-weight: 900;
    line-height: 1.3;
  }
  
  @font-face {
    font-family: 'gilroy';
    src: url("fonts/gilroy-light-webfont.woff2") format('woff2'),
         url("fonts/gilroy-light-webfont.woff") format('woff');
    font-weight: 200;
    line-height: 1.5;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;
    ${props => props.theme.fonts.gilroy.light};
    background-color: ${props => props.theme.colors.darkBlue};
    height: 300vh;
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
`;
