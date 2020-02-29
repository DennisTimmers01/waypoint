import React from "react";
import Swiper, { ReactIdSwiperChildren } from "react-id-swiper";
import { StyledSlider } from "./styles";

interface Props {
  children: ReactIdSwiperChildren;
}

export function Slider(props: Props) {
  const [mouseIsDown, setMouseIsDown] = React.useState(false);

  const params = {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 120,
    wrapperClass: "Slider__wrapper",
    slideClass: "Slider__slide",
    WrapperEl: "ul" as any,
  };

  return (
    <StyledSlider
      onMouseDown={() => setMouseIsDown(true)}
      onMouseUp={() => setMouseIsDown(false)}
      mouseIsDown={mouseIsDown}
    >
      <Swiper {...params}>{props.children}</Swiper>
    </StyledSlider>
  );
}
