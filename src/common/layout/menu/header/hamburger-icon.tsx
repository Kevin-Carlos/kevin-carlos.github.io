import React, { FC } from "react";
import styled from "styled-components";

type HamburgerIconProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const HamburgerIcon: FC<HamburgerIconProps> = ({
  isOpen,
  setIsOpen
}) => {

  return (
    <Hamburger onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </Hamburger>
  )
}

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 1rem;
  z-index: ${({ theme }) => theme.zIndices.overlay + 1};

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }

  div {
    width: 2.5rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    transition: all 0.25s ease-in-out;
    position: relative;
    transform-origin: 0.1rem;
  }

  ${({ theme }) => theme.mediaQuery.laptop} {
    display: none;
  }
`;
