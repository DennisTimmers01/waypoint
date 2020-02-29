import styled from "styled-components";
import { grid, GridProps } from "styled-system";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
    padding-left: 4rem;
    padding-right: 4rem;
    max-width: 120rem;
    margin: 0 auto;
  }
`;

export const Column = styled.div<GridProps>`
  ${grid}
  padding-top: 8rem;
  padding-bottom: 8rem;
`;
