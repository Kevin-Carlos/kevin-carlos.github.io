// addsnowpack
import { LinkButton } from 'common/ui-elements';
import React, { FC, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { menuItems } from './nav-items';

type HamburgerMenuProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

export const HamburgerMenu: FC<HamburgerMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  // animate the menu opening
  const spring = useSpring({
    from: { opacity: 0, transform: `translateX(100vw)` },
    to: isOpen
      ? { opacity: 1, transform: `translateX(0vw)` }
      : { opacity: 0, transform: `translateX(100vw)` },
  });

  /**
   * If the screen resizes to a size that no longer needs the mobile menu, close it
   */
  useEffect(() => {
    const handleResize = () => {
      // breakpoint
      if (window.innerWidth > 1200) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, setIsOpen]);

  return (
    <Menu style={spring}>
      <nav>
        <MenuList>
          {menuItems.map((i, idx) => (
            <MenuListItem key={`${i.name}_${idx}`}>
              {i.icon}
              <LinkButton href={i.path} animateScale={false}>
                {i.name}
              </LinkButton>
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
  display: grid;
  grid-template-columns: 5rem 1fr;

  align-items: center;

  & > a {
    font-size: 2.5rem;
  }

  &:hover > svg {
    outline: none;

    & > path,
    circle {
      stroke: ${({ theme }) => theme.colors.orange};
    }
  }

  &:hover > img {
    opacity: 0.8;
  }
`;
