import styled from "styled-components";
import { grid, GridProps, typography, TypographyProps } from "styled-system";

export const H1 = styled.h1<TypographyProps>`
  ${props => props.theme.fonts.OpenSans.light};
  font-size: 3.2rem;
  line-height: 1.1;
  ${typography}

  @media (min-width: 1024px) {
    font-size: 12.8rem;
  }
`;

export const H2 = styled.h2<TypographyProps>`
  ${props => props.theme.fonts.OpenSans.extraBold};
  font-size: 2rem;
  line-height: 1.2;
  color: ${props => props.theme.colors.white};
  ${typography}

  @media (min-width: 1024px) {
    font-size: 3.2rem;
  }
`;

export const Text = styled.p<GridProps & TypographyProps>`
  ${props => props.theme.fonts.OpenSans.light};
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.white};

  ${grid}
  ${typography}
`;

export const TextSmall = styled.p<TypographyProps>`
  ${props => props.theme.fonts.OpenSans.light};
  font-size: 1.2rem;
  line-height: 1.5;

  ${typography}
`;
