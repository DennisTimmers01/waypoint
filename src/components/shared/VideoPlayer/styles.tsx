import styled from "styled-components";
import playbutton from "../../../images/playbutton.svg";

interface Props {
  isPlaying: boolean;
}

export const VideoHeader = styled.header<Props>`
  position: relative;
  overflow: hidden;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 80vh;

    @media (min-width: 1024px) {
      /* 16:9 */
      padding-top: 56.25%;
    }
  }

  &:after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12rem;
    background-image: linear-gradient(
      0deg,
      rgba(19, 19, 22, 1) 0%,
      rgba(19, 19, 22, 0) 100%
    );
    z-index: 1;
  }

  .VideoHeader__player {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .VideoHeader__content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    opacity: ${props => (props.isPlaying ? 0 : 1)};
    transition: opacity 500ms ease-in-out;
    color: ${props => props.theme.colors.white};
    padding: 4rem 1.6rem;
    pointer-events: none;

    @media (min-width: 1024px) {
      padding: 4vw;

      p {
        max-width: 25%;
      }
    }
  }

  .VideoHeader__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transition: opacity 500ms ease-in-out;
    opacity: 0.5;
  }

  .VideoHeader__playButton:hover ~ .VideoHeader__overlay {
    opacity: 0;
  }
`;

interface StyledplayButtonProps {
  isPlaying: boolean;
}

export const StyledplayButton = styled.div<StyledplayButtonProps>`
  position: relative;
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  background: transparent;
  border: 2px dashed white;
  opacity: ${props => (props.isPlaying ? 0 : 1)};
  transition: opacity 1000ms ease-in-out;
  z-index: 2;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 80%;
    height: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: white;
    background-image: url(${playbutton});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20%;
    opacity: 0.8;
  }
`;
