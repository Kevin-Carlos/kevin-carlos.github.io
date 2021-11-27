import { Divider } from 'common/components';
import { links } from 'common/links';
import { Link } from 'gatsby';
import { lighten } from 'polished';
import React, { FC } from 'react';
import styled from 'styled-components';
import { AnimatedHello } from './_AnimatedHello';

type HeroProps = {
  className?: string;
};

export const Hero: FC<HeroProps> = ({ className }) => {
  return (
    <Content className={className}>
      <h1 style={{ marginBottom: 0 }}>
        <AnimatedHello />
        <ColoredName>Kevin Carlos</ColoredName>
      </h1>
      <StyledDivider />
      <div>
        <Link to={links.aboutMe()}>
          <AboutMeButton>About Me</AboutMeButton>
        </Link>
        <Link to={links.projects().root()}>
          <ProjectsButton>Projects</ProjectsButton>
        </Link>
      </div>
    </Content>
  );
};

const Content = styled.div`
  width: 30rem;
  position: fixed;
  top: 50%;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mediaQuery.tablet} {
    left: 35vw;
  }
`;

const ColoredName = styled.p`
  color: ${({ theme }) => lighten(0.15, theme.colors.light_teal)};
  margin: 0;
`;

const StyledDivider = styled(Divider)`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const StyledButton = styled.button`
  font-family: 'Poppins', sans-serif;
  padding: 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.light_teal};
  color: ${({ theme }) => theme.colors.white} !important;
  border-width: 0;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark_teal};
  }

  &:focus {
    outline: none;
  }
`;

const AboutMeButton = styled(StyledButton)`
  margin-right: 2.5rem;
`;

const ProjectsButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.gray};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
