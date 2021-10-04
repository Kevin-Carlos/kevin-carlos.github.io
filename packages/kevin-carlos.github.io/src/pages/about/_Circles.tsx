import React, { FC } from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import { ColorNames } from '../../common/styles';
import { circleItems } from './_items';

type CirclesProps = {
  index: number;
  setIndex: (n: number) => void;
};

export const Circles: FC<CirclesProps> = ({ index, setIndex }) => {
  return (
    <InteractiveWrapper>
      <CircleHeaderss index={index} />
      <Bubbles index={index} setIndex={setIndex} />
    </InteractiveWrapper>
  );
};

const Bubbles: FC<CirclesProps> = ({ index, setIndex }) => {
  // Transition the circle items in to make them 'pop'
  const transitionedHeaderItems = useTransition(circleItems, {
    trail: 150,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });

  return (
    <CircleWrapper>
      {transitionedHeaderItems((styles, item) => {
        return (
          <Circle
            size={item.size}
            color={item.color}
            active={item.key === circleItems[index].key}
            style={styles}
            onClick={() => {
              // setHeaderType(item.key);
              setIndex(circleItems.findIndex((c) => c.key === item.key));
            }}
          >
            <CircleHeaders>{item.title}</CircleHeaders>
          </Circle>
        );
      })}
    </CircleWrapper>
  );
};

const CircleHeaderss: FC<{ index: number }> = ({ index }) => {
  // Transition header in and out
  const transitionHeader = useTransition(index, {
    from: {
      transform: 'translateX(-100vw)',
    },
    enter: {
      transform: 'translateX(0)',
    },
    leave: {
      opacity: 0,
    },
    config: { tension: 60, friction: 11 },
  });

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        height: '5rem',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      {transitionHeader((styles, i) => (
        <animated.h1
          key={index}
          style={{
            textAlign: 'center',
            textTransform: 'capitalize',
            position: 'absolute',
            left: 0,
            right: 0,
            ...styles,
          }}
        >
          {circleItems[i].title}
        </animated.h1>
      ))}
    </div>
  );
};

const InteractiveWrapper = styled.div`
  margin-bottom: 2rem;

  ${({ theme }) => theme.mediaQuery.laptop} {
    margin-right: 2rem;
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
`;

const CircleHeaders = styled.h2`
  font-size: 1.7rem;
  margin: 0;
`;
