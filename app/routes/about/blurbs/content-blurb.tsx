import { type FC } from 'react';
import { animated, useSpring } from 'react-spring';
import { styled } from '~/stitches';
import { AboutMeBlurb } from './about-me-blurb';
import { CareerBlurb } from './career-blurb';
import { EducationBlurb } from './education-blurb';

const AnimatedDiv = styled(animated.div, {
  position: 'relative',
  padding: '20px',
  width: '100%',

  variants: {
    career: {
      true: {
        height: '100%',
      },
    },
  },
});

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
    <AnimatedDiv style={spring} career={type === 'career'}>
      {type === 'about' && <AboutMeBlurb />}
      {type === 'education' && <EducationBlurb />}
      {type === 'career' && <CareerBlurb />}
    </AnimatedDiv>
  );
};
