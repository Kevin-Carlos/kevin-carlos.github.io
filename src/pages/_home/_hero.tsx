import React, { FC } from "react";
import styled from "styled-components";
import heroSvg from "common/assets/images/hero.svg";
// import { Section } from "src/common/layout";

interface HeroProps {
  className?: string;
};

export const Hero: FC<HeroProps> = ({ className }) => {
  return (
    <StyledSection className={className}>
      <Background src={heroSvg}>
        <HeroHeader>[Hi, Everyone]</HeroHeader>
      </Background>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  height: 50vh;
`;

const HeroHeader = styled.h1`
  margin: 0;
`;

const Background = styled.div<{ src: string }>`
  padding: 5rem;
  height: 50vh;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;