import React from "react";
import { H2 } from "../typography/Component";

interface Props {
  title: string;
}

export function ContentBlock(props: Props) {
  return (
    <>
      <H2 as="h3">{props.title}</H2>
      <Text>sometext</Text>
    </>
  );
}
