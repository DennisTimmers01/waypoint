import styled, { css } from "styled-components";

import lines from "../../../images/line.svg";

export const Button = styled.button<{ isDone?: boolean }>`
  position: relative;
  appearance: none;
  border: none;
  background-color: ${props => props.theme.colors.yellow};
  padding-top: 2rem;
  padding-right: 4rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
  border-radius: 4rem;
  transition: opacity 250ms ease-in-out;
  min-width: 20rem;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &:before {
    box-sizing: initial;
    content: "";
    display: block;
    position: absolute;
    left: -4rem;
    top: 50%;
    width: calc(100% + 5rem);
    height: 100%;
    background-color: ${props => props.theme.colors.darkBlue};
    transform: translate(-100%, -50%);
    transition: all 1440ms cubic-bezier(0.65, 0, 0.4, 1);
    border-radius: 4rem;
    background-image: url(${lines});
    background-repeat: no-repeat;
    background-size: 3rem;
    background-position: 95% center;
  }

  .send-text {
    display: inline-block;
    transform: ${props =>
      props.isDone ? "translateX(3rem)" : "translateX(0)"};
    opacity: ${props => (props.isDone ? 0 : 1)};
    transition: all 500ms ease-in-out;
  }

  ${props =>
    props.isDone &&
    css`
      opacity: 0.8;

      &:before {
        left: calc(100% + 5rem);
      }
    `}

  .plane {
    position: absolute;
    left: ${props => (props.isDone ? "calc(100% + 5rem)" : "-4rem")};
    top: 50%;
    opacity: ${props => (props.isDone ? 0.8 : 1)};
    transform: translateY(-50%);
    display: block;
    height: 3rem;
    width: 3rem;
    transition: all 1440ms cubic-bezier(0.65, 0, 0.4, 1);
  }

  .send-thanks {
    position: absolute;
    color: ${props => props.theme.colors.yellow};
    left: 50%;
    transform: ${props =>
      props.isDone ? "translateX(-50%)" : "translateX(calc(-50% - 3rem))"};
    opacity: ${props => (props.isDone ? 1 : 0)};
    transition: all 500ms cubic-bezier(0.65, 0, 0.4, 1) 1000ms;
  }
`;

export const TextInput = styled.label`
  position: relative;

  .TextInput__input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.white};
    padding: 1rem;

    &:focus {
      outline: none;

      + .TextInput__label {
        transform: translateY(calc(-100% - 1rem)) scale(0.8);
      }
    }

    &::placeholder {
      color: transparent;
    }

    &:not(:placeholder-shown) + .TextInput__label {
      transform: translateY(calc(-100% - 1rem)) scale(0.8);
    }

    &:invalid {
      border-bottom: 2px solid tomato;
    }
  }

  .TextInput__label {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.yellow};
    transition: transform 250ms cubic-bezier(0.65, 0, 0.4, 1);
    transform-origin: left;
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
