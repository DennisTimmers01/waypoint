import React from "react";
import ReactPlayer from "react-player";
import { useIntersection } from "react-use";
import { Intro } from "../Intro/Component";
import { VideoHeader, StyledplayButton } from "./styles";

export function VideoPlayer() {
  const intersectionRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  React.useEffect(() => {
    const checkIntersection = () =>
      intersection && !intersection.isIntersecting && setIsPlaying(false);
    window.addEventListener("scroll", checkIntersection);

    return () => window.removeEventListener("scroll", checkIntersection);
  });

  return (
    <VideoHeader isPlaying={isPlaying} ref={intersectionRef}>
      <ReactPlayer
        className="VideoHeader__player"
        light={"https://source.unsplash.com/random"}
        playing={isPlaying}
        width="100%"
        height="100%"
        url="https://vimeo.com/386061742"
        controls={true}
        vimeoConfig={{
          preload: true,
        }}
        playIcon={
          <>
            <Playbutton
              className="VideoHeader__playButton"
              isPlaying={isPlaying}
              onClick={() => setIsPlaying(!isPlaying)}
            ></Playbutton>
            <div className="VideoHeader__overlay" />
          </>
        }
      />
      <Intro
        className="VideoHeader__content"
        title="Finland"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere velit finibus vestibulum convallis. Quisque gravida ullamcorper cursus. Donec semper mollis ultrices. Ut sodales magna sit amet eros vehicula, a tristique tellus dignissim. Maecenas nec scelerisque metus. Morbi nec rhoncus turpis."
      />
    </VideoHeader>
  );
}

interface PlaybuttonProps {
  onClick: any;
  children?: React.ReactNode;
  isPlaying: boolean;
  className: string;
}

export function Playbutton(props: PlaybuttonProps) {
  return (
    <StyledplayButton
      className={props.className}
      isPlaying={props.isPlaying}
      onClick={props.onClick}
    >
      {props.children}
    </StyledplayButton>
  );
}
