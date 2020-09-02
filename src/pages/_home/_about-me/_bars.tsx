import React, { FC, useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { BlurbType, ContentBlurb } from "./_content-blurb";
import { Section } from "common/layout/sections";

interface BarsProps {
  className?: string;
};

export const Bars: FC<BarsProps> = ({
  className
}) => {
  const [{ y1 }, set1] = useSpring<{ y1: number }>(() => ({ y1: 0 }));
  const [{ y2 }, set2] = useSpring<{ y2: number }>(() => ({ y2: 0 }));
  const [{ y3 }, set3] = useSpring<{ y3: number }>(() => ({ y3: 0 }));

  const [blurb, setBlurb] = useState<BlurbType>("about");
  const [hovered, setHovered] = useState<{ id: BlurbType | null, active: boolean }>({
    id: null,
    active: false
  });


  useEffect(() => {
    const timer = hovered.active ? setTimeout(onTimeout, 200) : 0;
    return () => {
      clearTimeout(timer);
    };
  }, [hovered]);

  const onTimeout = () => {
    if (!hovered.id) {
      return;
    }

    setBlurb(hovered.id);
  };

  const onMouseEnterHandler = (v: BlurbType) => {
    setHovered({
      id: v,
      active: true
    });
  }

  const onMouseLeaveHandler = () => {
    setHovered({
      id: null,
      active: false
    });
  }

  return (
    <StyledSection className={className}>
      <Wrapper>
        <BarWrapper>
          <Bar1
            onMouseEnter={() => {
              set1({ y1: 5 });
              onMouseEnterHandler("career");
            }}
            onMouseLeave={() => {
              set1({ y1: 0 });
              onMouseLeaveHandler();
            }}
            style={{ transform: y1.interpolate(v => `translateY(${v}%`) }}
          >
            <Word>
              Career
            </Word>
          </Bar1>
          <Bar2
            onMouseEnter={() => {
              set2({ y2: 5 });
              onMouseEnterHandler("education");
            }}
            onMouseLeave={() => {
              set2({ y2: 0 });
              onMouseLeaveHandler();
            }}
            style={{ transform: y2.interpolate(v => `translateY(${v}%`) }}
          >
            <Word>
              Education
            </Word>
          </Bar2>
          <Bar3
            onMouseEnter={() => {
              set3({ y3: 5 });
              onMouseEnterHandler("about");
            }}
            onMouseLeave={() => {
              set3({ y3: 0 });
              onMouseLeaveHandler();
            }}
            style={{ transform: y3.interpolate(v => `translateY(${v}%`) }}
          >
            <Word>
              About
            </Word>
          </Bar3>
        </BarWrapper>

        <ContentBlurb type={blurb} />
      </Wrapper>
    </StyledSection>
  )
}

const StyledSection = styled(Section)``;

/** Started on desktop with this, funky styling is because I worked backwards
 * for mobile
 */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.mediaQuery.tablet} {
    
  };

  ${({ theme }) => theme.mediaQuery.laptop} {
    flex-direction: row;
    justify-content: space-between;
  };
`;

/** Started on desktop with this, funky styling is because I worked backwards
 * for mobile
 */
const BarWrapper = styled.div`
  display: flex;
  transform: rotate(-90deg);
  margin-top: -5rem;
  transition: transform 0.2s ease-in;

  & > div:first-child {
      margin-top: -4rem;
    }
  & > div:nth-child(2) {
    margin-top: -3rem;
  }
  & > div:last-child {
    margin-top: -2rem;
  }

  ${({ theme }) => theme.mediaQuery.tablet} {
    margin-bottom: 0;
  };

  ${({ theme }) => theme.mediaQuery.laptop} {
    transform: rotate(0deg);
    margin-bottom: 7rem;
    margin-left: 20rem;
    margin-top: unset;

    & > div:first-child {
      margin-top: -2rem;
    }
    & > div:nth-child(2) {
      margin-top: -3rem;
    }
    & > div:last-child {
      margin-top: -4rem;
    }
  }
`;


const Bar = styled(animated.div)`
  background-color: ${({ theme }) => theme.colors.orange};
  height: 30rem;
  width: 3rem;
  display: flex;
  margin-right: 2rem;
  border-radius: 0.2rem;
  position: relative;
  cursor: pointer;
  transition: margin 0.2s ease-in;

  ${({ theme }) => theme.mediaQuery.tablet} {
    margin-bottom: 0;
  };
  ${({ theme }) => theme.mediaQuery.laptop} {
    margin-right: 4rem;
  }
`;

const Bar1 = styled(Bar)``;
const Bar2 = styled(Bar)``;
const Bar3 = styled(Bar)``;

const Word = styled.span`
  writing-mode: vertical-rl;
  letter-spacing: 0.8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;

  ${({ theme }) => theme.mediaQuery.laptop} {
    text-orientation: upright;
  }
`;