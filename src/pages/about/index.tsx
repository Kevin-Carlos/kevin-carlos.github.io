import React, { useState } from "react";
import { MenuLayout, Section } from "common/layout";
import styled from "styled-components";
import { ColorNames } from "common/styles";
import { animated, useTransition } from "react-spring";
import { BlurbType, ContentBlurb } from "./_components/_content-blurb";

export default () => {
  const [headerType, setHeaderType] = useState<BlurbType>("about");

  const transitionedHeaderItems = useTransition(
    circleItems,
    (item) => item.key,
    {
      trail: 150,
      from: { opacity: 0, transform: "scale(0)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0)" },
    }
  );

  return (
    <MenuLayout>
      <FullHeightSection isFirst centered>
        <div>
          <h1
            style={{
              textAlign: "center",
              marginRight: "6rem",
              textTransform: "capitalize",
            }}
          >
            {headerType === "about" ? `About Me` : headerType}
          </h1>
          <CircleWrapper>
            {transitionedHeaderItems.map(({ item, key, props }) => {
              return (
                <Circle
                  size={item.size}
                  color={item.color}
                  active={item.key === headerType}
                  key={key}
                  style={props}
                  onClick={() => setHeaderType(item.key)}
                >
                  <CircleHeaders>{item.title}</CircleHeaders>
                </Circle>
              );
            })}
          </CircleWrapper>
        </div>
        <ContentBlurb type={headerType} />
      </FullHeightSection>
    </MenuLayout>
  );
};

type ContentHeaderItemsT = {
  size: number;
  color: ColorNames;
  title: string;
  key: BlurbType;
};

const circleItems: ContentHeaderItemsT[] = [
  {
    key: "about",
    title: "Who Am I?",
    size: 12,
    color: "light_teal",
  },
  {
    key: "education",
    title: "Education",
    size: 10,
    color: "orange",
  },
  {
    key: "career",
    title: "Career",
    size: 15,
    color: "blue",
  },
];

const FullHeightSection = styled(Section)`
  & > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${({ theme }) => theme.mediaQuery.laptop} {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    }
  }
`;

const CircleWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${({ theme }) => theme.mediaQuery.laptop} {
    justify-content: unset;
    flex-wrap: unset;
  }
`;

const Circle = styled(animated.li)<{
  size: number;
  color: ColorNames;
  active: boolean;
}>`
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-property: scale3d;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  margin: 1rem;

  ${({ active }) =>
    active &&
    `
    transform: scale3d(1.1, 1.1, 1) !important;
  `};

  ${({ theme }) => theme.mediaQuery.laptop} {
  }
`;

const CircleHeaders = styled.h2`
  font-size: 1.7rem;
  margin: 0;
`;
