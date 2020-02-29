import React from "react";
import { Button } from "./styles";
import plane from "../../../images/plane.svg";
import { useForm } from "react-hook-form";

export function SubmitButton() {
  const [isDone, setIsDone] = React.useState(false);

  return (
    <Button onClick={() => setIsDone(!isDone)} isDone={isDone} type="submit">
      <span className="send-text">Send message</span>
      <img src={plane} alt="plane" className="plane" />
      <span className="send-thanks">Thanks!</span>
    </Button>
  );
}
