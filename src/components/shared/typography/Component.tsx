import styled from "styled-components";
import { grid, GridProps } from "styled-system";

export const H1 = styled.h1`
  ${props => props.theme.fonts.gilroy.light};
  font-size: 3.2rem;
  line-height: 1.1;

  @media (min-width: 1024px) {
    font-size: 12.8rem;
  }
`;

export const H2 = styled.h2`
  ${props => props.theme.fonts.gilroy.extraBold};
  font-size: 2rem;
  line-height: 1.2;
  color: ${props => props.theme.colors.white};

  @media (min-width: 1024px) {
    font-size: 3.2rem;
  }
`;

export const Text = styled.p<GridProps>`
  ${props => props.theme.fonts.gilroy.light};
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.white};
  ${grid}
`;

export const TextSmall = styled.p`
  ${props => props.theme.fonts.gilroy.light};
  font-size: 1.2rem;
  line-height: 1.5;
`;
