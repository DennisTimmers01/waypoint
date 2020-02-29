import { css } from "styled-components";

export const theme = {
  colors: {
    darkBlue: "#131313",
    yellow: "#FFE22D",
    white: "#FEFEFE",
    lightBlue: "#4BACAF",
    purple: "#654ABF",
  },

  fonts: {
    OpenSans: {
      light: css`
        font-family: "Open Sans", sans-serif;
        font-weight: 200;
      `,

      extraBold: css`
        font-family: "Open Sans", sans-serif;
        font-weight: 800;
      `,
    },
  },
};
