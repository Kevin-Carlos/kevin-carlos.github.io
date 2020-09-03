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
              <IconWrapper>
                {/* heroicons.dev code svg */}
                <svg viewBox="0 0 20 20" fill="currentColor" className="code w-6 h-6">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </IconWrapper>
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
              <IconWrapper>
                {/* heroicons.dev academic svg */}
                <svg viewBox="0 0 20 20" fill="currentColor" className="academic-cap w-6 h-6">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </IconWrapper>
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
              {/* heroicons.dev identification svg */}
              <IconWrapper>
                <svg viewBox="0 0 20 20" fill="currentColor" className="identification w-6 h-6">
                  <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </IconWrapper>
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
    margin-left: 15rem;
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
  letter-spacing: 0.4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;

  ${({ theme }) => theme.mediaQuery.laptop} {
    text-orientation: upright;
  }
`;

const IconWrapper = styled.div`
  height: 3rem;
  transform: rotate(90deg);
  margin-bottom: 1rem;
  transition: transform 0.2s ease-in-out;

  ${({ theme }) => theme.mediaQuery.laptop} {
    transform: rotate(0deg);
  }
`;