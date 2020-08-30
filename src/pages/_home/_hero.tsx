import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import heroSvg from "common/assets/images/hero.svg";
import { Section } from "common/layout/sections";
import { useTransition, animated } from "react-spring";
import { hiItems } from "./languages";

interface HeroProps {
  className?: string;
};

export const Hero: FC<HeroProps> = ({ className }) => {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(hiItems[index].item.length);

  const transitions = useTransition(hiItems[index], hiItems => hiItems.key, {
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
    }, 1000 * 4);

    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    setLength(hiItems[index].item.length);
  }, [index])



  return (
    <StyledSection className={className} src={heroSvg}>
      <Content>
        <HeroHeader>
          {`</`}
        {transitions.map(({ item: language , props, key }) => {
          return (
            <HeroHeaderAnimatedText
              key={key}
              style={{ ...props, position: "absolute" }}
            >
              {language.item}
            </HeroHeaderAnimatedText>
          )
        })}
          <Text length={length * 1.8}>
            Everyone{`>`}
          </Text>
        </HeroHeader>
      </Content>
    </StyledSection>
  )
}

const StyledSection = styled(Section) <{ src: string }>`
  height: 50vh;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

const HeroHeader = styled.h1`
  margin: 0;
  overflow: hidden;
`;

const HeroHeaderAnimatedText = styled(animated.span)``;

const Text = styled.span<{ length: number }>`
  margin-left: ${({ length }) => `${length}rem`};
  transition: margin-left 500ms cubic-bezier(0.520, 0.095, 0.270, 0.895);
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;