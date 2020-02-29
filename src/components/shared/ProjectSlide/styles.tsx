import styled from "styled-components";

export const StyledSlide = styled.li`
  position: relative;
  display: block;
  width: 100%;

  &:before {
    display: block;
    position: relative;
    content: "";
    width: 100%;
    padding-top: 56.25%;
  }

  .Slider__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .Slide__image {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
  }

  .Slide__title {
    display: inline-block;
    margin-top: 24px;
  }
`;
