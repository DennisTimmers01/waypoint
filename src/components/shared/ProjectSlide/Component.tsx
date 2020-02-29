import React from "react";
import { H2 } from "../typography/Component";
import { StyledSlide } from "./styles";
import { Parallax } from "react-scroll-parallax";

interface Props {
  title: string;
  imageSrc: string;
  imageAlt?: string;
}

export function ProjectSlide(props: Props) {
  return (
    <StyledSlide>
      <div className="Slider__content">
        <img
          className="Slide__image"
          src={props.imageSrc}
          alt={props.imageAlt || ""}
        />
        <H2 className="Slide__title" as="h3">
          {props.title}
        </H2>
      </div>
    </StyledSlide>
  );
}
