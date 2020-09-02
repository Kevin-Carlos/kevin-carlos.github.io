import React, { FC } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { menuItems } from "./nav-items";
import { LinkButton } from "common/ui-elements";

type HamburgerMenuProps = {
  isOpen: boolean;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({ isOpen }) => {
  const spring = useSpring({
    from: { opacity: 0, transform: `translateX(100vw)` },
    to: isOpen
      ? { opacity: 1, transform: `translateX(0vw)` }
      : { opacity: 0, transform: `translateX(100vw)` },
  });

  return (
    <Menu
      style={spring}
    >
      <MenuList>
        {menuItems.map(i => (
          <MenuListItem>
            <LinkButton href={i.path}>
              {i.name}
            </LinkButton>
          </MenuListItem>
        ))}
      </MenuList>
    </Menu>
  )
}

const Menu = styled(animated.nav)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.dark_teal};
  z-index: ${({ theme }) => theme.zIndices.overlay};
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
  & > a {
    font-size: 2.5rem;
  }
`;