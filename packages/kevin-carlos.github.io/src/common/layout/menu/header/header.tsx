import darkLogo from 'common/assets/images/logo-dark.png';
import { useClickOutside } from 'common/hooks';
import { links } from 'common/links';
import { LinkButton } from 'common/ui-elements/button';
import { Link } from 'gatsby';
import { transparentize } from 'polished';
import React, { FC, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { HamburgerIcon } from './hamburger-icon';
import { HamburgerMenu } from './hamburger-menu';
import { menuItems } from './nav-items';
// import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
  backgroundVisibility: Visibility;
}

export const Header: FC<HeaderProps> = ({
  className,
  backgroundVisibility,
}) => {
  const [mobileNav, toggleMobileNav] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => toggleMobileNav(false));

  const setIsOpen = useCallback(() => {
    toggleMobileNav(!mobileNav);
  }, [mobileNav]);

  return (
    <HeaderWrapper
      className={className}
      backgroundVisibility={backgroundVisibility}
    >
      <ContentWrapper>
        <LogoWrapper>
          <Link to={links.home()}>
            <Circle />
            <Logo src={darkLogo} />
          </Link>
        </LogoWrapper>
        <Nav>
          {menuItems.map((i) => {
            if (i.mobileOnly) {
              return;
            }

            return (
              <LinkButton href={i.path} key={i.name}>
                {i.name}
              </LinkButton>
            );
          })}
        </Nav>
        <HamburgerMenuWrapper ref={menuRef}>
          <HamburgerIcon isOpen={mobileNav} setIsOpen={setIsOpen} />
          <HamburgerMenu isOpen={mobileNav} setIsOpen={setIsOpen} />
        </HamburgerMenuWrapper>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header<{ backgroundVisibility: Visibility }>`
  background-color: ${({ backgroundVisibility, theme }) =>
    backgroundVisibility === 'show' ? theme.colors.black : `transparent`};
  height: 6rem;
  padding: 0 1rem;
  z-index: ${({ theme }) => theme.zIndices.overlay};
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  ${({ theme }) => theme.mediaQuery.laptop} {
    padding: 0 6rem 0 2rem;
  }

  /* ${({ theme }) => theme.mediaQuery.desktop} {
    max-width: 120rem;
  }

  ${({ theme }) => theme.mediaQuery.xl_desktop} {
    max-width: 140rem;
  } */
`;

const Circle = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  position: absolute;
  border-width: 0;

  transition: all 0.2s ease-in-out;
`;

const Logo = styled.img`
  position: absolute;
  width: 4rem;
`;

const LogoWrapper = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;
  &:hover {
    ${Circle} {
      background-color: ${({ theme }) =>
        transparentize(0.2, theme.colors.white)};
    }
  }
`;

const Nav = styled.nav`
  display: none;
  font-size: 1.5rem;

  ${({ theme }) => theme.mediaQuery.laptop} {
    display: inherit;
    & > a:not(:first-child) {
      margin-left: 2rem;
    }
  }
`;

const HamburgerMenuWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndices.overlay - 1};

  ${({ theme }) => theme.mediaQuery.laptop} {
    display: none;
  }
`;
