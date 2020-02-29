import styled from "styled-components";

export const ProjectImage = styled.figure`
  margin: 0;
  padding: 0;
  margin-bottom: 15rem;

  .ProjectImage__img {
    position: relative;
    width: 100%;

    &:after {
      content: "";
      display: block;
      position: relative;
      top: 0;
      right: 0;
      padding-top: calc(9 / 16 * 100%);
    }

    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .ProjectImage__caption {
    display: inline-block;
    margin-top: 1.5rem;
    color: ${props => props.theme.colors.white};
  }
`;
