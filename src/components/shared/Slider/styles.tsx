import styled, { css } from "styled-components";

export const StyledSlider = styled.div<{ mouseIsDown?: boolean }>`
  width: 100%;
  transition: transform 250ms ease-in-out;
  ${props =>
    props.mouseIsDown &&
    css`
      transform: scale(1.02);
      transform-origin: center;
    `}

  .Slider__wrapper {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  .Slider__slide {
    position: relative;
    flex-basis: 80%;
    flex-grow: 0;
    flex-shrink: 0;
    transition: opacity 250ms ease-in-out;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      box-shadow: 0px 0px 61px -9px rgba(0, 0, 0, 0.75);
      opacity: ${props => (props.mouseIsDown ? 1 : 0)};
      transition: opacity 250ms ease-in-out;
    }

    &:not(.swiper-slide-active) {
      opacity: 0.5;
    }
  }

  .parallax-outer {
    /* position: relativeteY(-50%); */
  }
`;
