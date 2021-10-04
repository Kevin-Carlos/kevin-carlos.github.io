import React, { FC, useEffect, useRef, useState } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import { hiItems } from '../_languages';

export const AnimatedHello: FC = () => {
  const valueRef = useRef<HTMLSpanElement | null>(null);

  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(hiItems[index].item.length);

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
        {"I'm"}
      </animated.span>
    </span>
  );
};
