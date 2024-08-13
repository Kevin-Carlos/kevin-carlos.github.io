import { useEffect, useRef, useState } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import { helloInLanguages } from './languages';

const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Controls the animations for 'Hello' and animating the margin of `I'm`
 *
 * Separating it into this component isolates the re-renders
 */
export const AnimatedHello = () => {
  const valueRef = useRef<HTMLSpanElement | null>(null);

  const [items] = useState(helloInLanguages);

  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(helloInLanguages[index].length);

  // Transition the 'hiItems' to fade in and out
  const transitions = useTransition(index, {
    from: { opacity: 0, width: 'max-content' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 60, friction: 10 },
  });

  // Add a spring to liven up the animation of the 'I'm' movement
  const { left } = useSpring({
    from: {
      left: 0,
    },
    to: {
      left: length + 12,
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
      setIndex(randomInteger(0, helloInLanguages.length - 1));
    }, 1000 * 2);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLength(valueRef.current?.clientWidth || helloInLanguages.length);
  }, [index]);

  return (
    <span style={{ position: 'absolute', fontWeight: 500 }}>
      <span style={{ position: 'relative' }}>
        {transitions((styles, i) => (
          <animated.span
            ref={valueRef}
            style={{ ...styles, position: 'absolute' }}
          >
            {items[i]},
          </animated.span>
        ))}
        <animated.span
          key={length}
          style={{
            position: 'absolute',
            left,
          }}
        >
          {"I'm"}
        </animated.span>
      </span>
    </span>
  );
};
