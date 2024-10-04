import { useEffect, useRef, useState } from 'react';
import { animated, useChain, useSpring, useSpringRef } from 'react-spring';
import { PillButton } from '~/common/ui-elements';

const COUNTDOWN = 3;

export const HaloCountdown = () => {
  const [currentTime, setCurrentTime] = useState(COUNTDOWN);
  const [showCountdown, setShowCountdown] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const springInStyles = useSpring({
    from: {
      transform: 'translate3d(-50%, 50%, 0) scale(0)',
    },
    to: {
      transform: 'translate3d(-50%, 0, 0) scale(1)',
    },
    duration: 250,
    reset: true,
  });

  const borderLeftSpringRef = useSpringRef();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [springInLeftBorderStyles, startLeftBorderSpring] = useSpring(() => ({
    to: { transform: 'translate3d(0, 0, 0) scale(1)' },
    duration: 240,
    ref: borderLeftSpringRef,
  }));

  const borderLeftSlideSpringRef = useSpringRef();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [springInSlideLeftBorderStyles, startLeftBorderSlideSpring] = useSpring(
    () => ({
      to: {
        left: 0,
      },
      ref: borderLeftSlideSpringRef,
    })
  );

  useChain(
    showCountdown
      ? [borderLeftSpringRef, borderLeftSlideSpringRef]
      : [borderLeftSlideSpringRef, borderLeftSpringRef]
  );

  useEffect(() => {
    if (!showCountdown) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1);
    }, 1000);
  }, [showCountdown]);

  useEffect(() => {
    if (currentTime === 0 && intervalRef.current) {
      setShowCountdown(false);
      setCurrentTime(COUNTDOWN);
      clearInterval(intervalRef.current);
    }
  }, [currentTime]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-full h-[40px] dark:text-theme-white text-theme-black text-lg relative">
        <animated.div
          className="w-[1px] bg-theme-orange h-full absolute scale-0 left-[50%] translate-x-[-50%]"
          style={showCountdown ? { ...springInLeftBorderStyles } : undefined}
        />
        <animated.div className="w-[1px] bg-theme-orange h-full absolute right-0" />
        <animated.div
          style={{
            position: 'absolute',
            left: '50%',
            ...springInStyles,
          }}
        >
          {showCountdown && <span>{currentTime}</span>}
        </animated.div>
      </div>

      <PillButton
        className="bg-theme-blue"
        isDisabled={showCountdown === true}
        onPress={() => {
          if (showCountdown) {
            return;
          }

          setShowCountdown(true);

          startLeftBorderSlideSpring.start();
        }}
      >
        Start
      </PillButton>
    </div>
  );
};
