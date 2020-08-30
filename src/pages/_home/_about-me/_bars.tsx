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
  // TODO For now I am explicitly setting these during experimentation
  // change to a useSprings or useChain implementation
  // This will clean up a lot of this component
  const [{ y1 }, set1] = useSpring<{ y1: number }>(() => ({ y1: 0 }));
  // const [{ dash1 }, setDash1] = useSpring<{ dash1: number }>(() => ({ dash1: 300 }));

  const [{ y2 }, set2] = useSpring<{ y2: number }>(() => ({ y2: 0 }));
  // const [{ dash2 }, setDash2] = useSpring<{ dash2: number }>(() => ({ dash2: 200 }));

  const [{ y3 }, set3] = useSpring<{ y3: number }>(() => ({ y3: 0 }));
  // const [{ dash3 }, setDash3] = useSpring<{ dash3: number }>(() => ({ dash3: 200 }));

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
              // setDash1({ dash1: 0 });
              onMouseEnterHandler("career");
            }}
            onMouseLeave={() => {
              set1({ y1: 0 });
              // setDash1({ dash1: 300 });
              onMouseLeaveHandler();
            }}
            style={{ transform: y1.interpolate(v => `translateY(${v}%`) }}
          >
            <VerticalWord>
              Career
              {/* <ProgressLine>
                <Line
                  points="3 190, 3 200, 600 200, 600 150, 600 150, 200 150"
                  style={{ strokeDashoffset: dash1.interpolate(v => `${v}rem`) }}
                />
              </ProgressLine> */}
            </VerticalWord>
          </Bar1>
          <Bar2
            onMouseEnter={() => {
              set2({ y2: 5 });
              // setDash2({ dash2: 0 });
              onMouseEnterHandler("education");
            }}
            onMouseLeave={() => {
              set2({ y2: 0 });
              // setDash2({ dash2: 200 });
              onMouseLeaveHandler();
            }}
            style={{ transform: y2.interpolate(v => `translateY(${v}%`) }}
          >
            <VerticalWord>
              Education
              {/* <ProgressLine>
                <Line
                  points="3 190, 3 200, 500 200, 500 150, 900 150, 200 150"
                  // style={{ strokeDashoffset: dash2.interpolate(v => `${v}rem`) }}
                />
              </ProgressLine> */}
            </VerticalWord>
          </Bar2>
          <Bar3
            onMouseEnter={() => {
              set3({ y3: 5 });
              // setDash3({ dash3: 0 });
              onMouseEnterHandler("about");
            }}
            onMouseLeave={() => {
              set3({ y3: 0 });
              // setDash3({ dash3: 200 });
              onMouseLeaveHandler();
            }}
            style={{ transform: y3.interpolate(v => `translateY(${v}%`) }}
          >
            <VerticalWord>
              About
              {/* <ProgressLine>
                <Line
                  points="3 190, 3 200, 500 200, 500 150, 900 150, 200 150"
                  // style={{ strokeDashoffset: dash3.interpolate(v => `${v}rem`) }}
                />
              </ProgressLine> */}
            </VerticalWord>
          </Bar3>
        </BarWrapper>

        <ContentBlurb type={blurb} />
      </Wrapper>
    </StyledSection>
  )
}

const StyledSection = styled(Section)``;

const Wrapper = styled.div`
  ${({ theme }) => theme.mediaQuery.tablet} {
    display: flex;
    justify-content: space-between;
  };
`;

const BarWrapper = styled.div`
  display: flex;
  margin-bottom: 7rem;
  margin-left: 20rem;
  & > div:first-child {
    margin-top: -2rem;
  }
  & > div:nth-child(2) {
    margin-top: -3rem;
  }
  & > div:last-child {
    margin-top: -4rem;
  }
  ${({ theme }) => theme.mediaQuery.tablet} {
    margin-bottom: 0;
  };
`;

// const ProgressLine = styled.svg`
//   position: absolute;
//   bottom: -16rem;
//   left: 1.2rem;
//   width: 80rem;
//   height: 35rem;
//   pointer-events: none;
// `;

const Line = styled(animated.polyline)`
  stroke-width: 3px;
  stroke: ${({ theme }) => theme.colors.light_Teal};
  fill: none;
  stroke-dasharray: 300rem;
  transition: stroke-dasharray 0.2s ease-in-out;
`;

const Bar = styled(animated.div)`
  background-color: ${({ theme }) => theme.colors.orange};
  height: 30rem;
  width: 3rem;
  display: flex;
  margin-right: 4rem;
  border-radius: 0.2rem;
  position: relative;
  cursor: pointer;
  ${({ theme }) => theme.mediaQuery.tablet} {
    margin-bottom: 0;
  };
`;

const Bar1 = styled(Bar)`
  /* &:hover {
    ${Line} {
      animation-play-state: running;
    }
  } */
`;
const Bar2 = styled(Bar)`
  &:hover {
    ${Line} {
      animation-play-state: running;
    }
  }
`;
const Bar3 = styled(Bar)`
  &:hover {
    ${Line} {
      animation-play-state: running;
    }
  }
`;

const VerticalWord = styled.span`
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;
`;