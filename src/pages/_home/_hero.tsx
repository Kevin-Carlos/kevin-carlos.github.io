import React, { FC, useRef, useState, useEffect } from "react";
import { lighten } from "polished";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { hiItems } from "./_languages";
import { Divider } from "common/components";
import { links } from "common/links";
import { Link } from "gatsby";

type HeroProps = {
  className?: string;
};

export const Hero: FC<HeroProps> = ({ className }) => {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(hiItems[index].item.length);
  const valueRef = useRef<HTMLSpanElement | null>(null);

  const transitions = useTransition(hiItems[index], (hiItems) => hiItems.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 60, friction: 10 },
    unique: true,
    reset: true,
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
          {transitions.map(({ item: language, props, key }) => {
            return (
              <animated.span
                ref={valueRef}
                key={key}
                style={{ ...props, position: "absolute" }}
              >
                {language.item},
              </animated.span>
            );
          })}
          <Text length={length + 15}>I'm</Text>
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

const Text = styled.span<{ length: number }>`
  margin-left: ${({ length }) => `${length}px`};
  transition: margin-left 500ms cubic-bezier(0.52, 0.095, 0.27, 0.895);
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 3rem;
`;

const StyledButton = styled.button`
  font-family: "Poppins", sans-serif;
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
