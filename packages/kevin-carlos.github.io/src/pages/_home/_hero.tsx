import { Divider } from 'common/components';
import { links } from 'common/links';
import { Link } from 'gatsby';
import { lighten } from 'polished';
import React, { FC, useEffect, useRef, useState } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import styled from 'styled-components';
import { hiItems } from './_languages';

type HeroProps = {
  className?: string;
};

export const Hero: FC<HeroProps> = ({ className }) => {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(hiItems[index].item.length);
  const valueRef = useRef<HTMLSpanElement | null>(null);

  // Transition the 'hiItems' to fade in and out
  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 60, friction: 10 },
  });

  // Add a spring to liven up the animation of the 'I'm' movement
  const { marginLeft } = useSpring({
    from: {
      marginLeft: 0,
    },
    to: {
      marginLeft: length + 12,
    },
    config: {
      tension: 110,
      friction: 30,
      mass: 4,
      bounce: 1,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % hiItems.length);
    }, 1000 * 3.9);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLength(valueRef.current?.clientWidth || hiItems[index].item.length);
  }, [index]);

  return (
    <Content className={className}>
      <h1>
        <span>
          {transitions((styles, i) => (
            <animated.span
              ref={valueRef}
              style={{ ...styles, position: 'absolute' }}
            >
              {hiItems[i].item},
            </animated.span>
          ))}
          <animated.span
            key={length}
            style={{
              marginLeft,
            }}
          >
            <span>{"I'm"}</span>
          </animated.span>
        </span>
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
`;

const StyledDivider = styled(Divider)`
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
