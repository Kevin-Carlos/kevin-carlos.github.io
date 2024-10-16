import clsx from 'clsx';
import { type FC } from 'react';
import { animated, useSpring } from 'react-spring';
import { AboutMeBlurb } from './about-me-blurb';
import { CareerBlurb } from './career-blurb';
import { EducationBlurb } from './education-blurb';

export type BlurbType = 'about' | 'education' | 'career';

type ContentBlurbProps = {
  type: BlurbType;
};

export const ContentBlurb: FC<ContentBlurbProps> = ({ type }) => {
  const spring = useSpring({
    from: { opacity: 0, transform: 'translateY(5rem)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 280, friction: 60 },
    reset: true,
  });

  return (
    <animated.div
      style={spring}
      className={clsx(
        'relative p-5 w-full',
        type === 'career' ? 'h-full' : '',
      )}
    >
      {type === 'about' && <AboutMeBlurb />}
      {type === 'education' && <EducationBlurb />}
      {type === 'career' && <CareerBlurb />}
    </animated.div>
  );
};
