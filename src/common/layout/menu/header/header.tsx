import React, { FC } from "react";
import styled from "styled-components";
import { menuItems } from "./nav-items";
// import { LinkButton } from "src/common/ui-elements/button/link-button";
import darkLogo from "common/assets/images/logo-dark.png";
import { transparentize } from "polished";
import { links } from "common/links";
import { LinkButton } from "common/ui-elements";


interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <HeaderWrapper className={className}>
      <ContentWrapper>
        <LogoWrapper>
          <a href={links.home()}>
            <Circle />
            <Logo src={darkLogo} />
          </a>
        </LogoWrapper>
        <Nav>
          {menuItems.map(i => (
            <LinkButton href={i.path} key={i.name}>
              {i.name}
            </LinkButton>
          ))}
        </Nav>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  height: 6rem;
  padding: 0 1rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      background-color: ${({ theme }) => transparentize(0.2, theme.colors.white)};
    }
  }
`;

const Nav = styled.nav`
  & > a:not(:first-child) {
    margin-left: 2rem;
  }
`;