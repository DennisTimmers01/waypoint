import React from "react";
import PropTypes from "prop-types";
import { ParallaxProvider } from "react-scroll-parallax";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyles";
import { theme } from "../theme/Theme";

interface Props {
  children: React.ReactNode;
}

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {props.children}
        </>
      </ThemeProvider>
    </ParallaxProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
