import React from "react";
import { H1, TextSmall } from "../typography/Component";
import { StyledIntro } from "./styles";

interface Props {
  title: string;
  text: string;
  className?: string;
}

export function Intro(props: Props) {
  return (
    <StyledIntro className={props.className}>
      {props.title && <H1 className="Intro__title">{props.title}</H1>}
      {props.text && (
        <TextSmall className="Intro__paragraph">{props.text}</TextSmall>
      )}
    </StyledIntro>
  );
}
