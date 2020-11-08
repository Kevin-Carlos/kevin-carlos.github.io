// addsnowpack
import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { menuItems } from "./nav-items";
import { LinkButton } from "common/ui-elements";

type HamburgerMenuProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

export const HamburgerMenu: FC<HamburgerMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const spring = useSpring({
    from: { opacity: 0, transform: `translateX(100vw)` },
    to: isOpen
      ? { opacity: 1, transform: `translateX(0vw)` }
      : { opacity: 0, transform: `translateX(100vw)` },
  });

  useEffect(() => {
    const handleResize = () => {
      // breakpoint
      if (window.innerWidth > 1200) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("resize", handleResize);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, setIsOpen]);

  return (
    <Menu style={spring}>
      <nav>
        <MenuList>
          {menuItems.map((i, idx) => (
            <MenuListItem key={`${i.name}_${idx}`}>
              {i.icon}
              <LinkButton href={i.path}>{i.name}</LinkButton>
            </MenuListItem>
          ))}
        </MenuList>
      </nav>
    </Menu>
  );
};

const Menu = styled(animated.menu)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding: 4rem 2rem 2rem 4rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.dark_teal};
  z-index: ${({ theme }) => theme.zIndices.overlay};
  transition: width 0.15s ease-in-out;

  ${({ theme }) => theme.mediaQuery.tablet} {
    width: 50vw;
  }
`;

const MenuList = styled.ul`
  list-style: none;

  & > li {
    margin-bottom: 2rem;
  }

  & > li:last-child {
    margin-bottom: 0;
  }
`;

const MenuListItem = styled.li`
  display: flex;
  align-items: center;

  & > a {
    font-size: 2.5rem;
  }

  &:hover > svg {
    stroke: ${({ theme }) => theme.colors.orange};
  }

  &:hover > img {
    opacity: 0.8;
  }
`;
