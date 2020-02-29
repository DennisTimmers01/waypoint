import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
 ${styledNormalize};
  
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

 *,
 *::before,
 *::after {
   box-sizing: border-box;
 }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;
    ${props => props.theme.fonts.OpenSans.light};
    background-color: ${props => props.theme.colors.darkBlue};
    height: 300vh;
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
`;
