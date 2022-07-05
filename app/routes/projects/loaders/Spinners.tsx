import { keyframes, styled } from '@stitches/react';

const rotateClockwise = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const rotateCounterClockwise = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(-360deg)',
  },
});

const DoubleAlternateSpinner = styled('div', {
  'position': 'relative',

  '& > div:first-child': {
    position: 'absolute',
    height: '40px',
    width: '40px',
    borderRadius: '9999px',
    border: '1px solid gray',
    borderTopColor: 'transparent',

    animation: `${rotateClockwise} 1s infinite`,
  },

  '& > div:last-child': {
    position: 'absolute',
    margin: '5px',
    height: '30px',
    width: '30px',
    borderRadius: '9999px',
    border: '1px solid gray',
    borderBottomColor: 'transparent',

    animation: `${rotateCounterClockwise} 1s infinite`,
  },
});

const PulsingDots = styled('div', {
  'display': 'flex',
  'flexDirection': 'row',
  'justifyItems': 'space-evenly',

  '& > div': {
    height: '12px',
    width: '12px',
    background: 'gray',
    borderRadius: '9999px',
  },

  '& > div:not(:last-child)': {
    marginRight: '8px',
  },
});

const pulse1 = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '25%': {
    transform: 'scale(1.3)',
  },
  '50%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(1)',
  },
});

const pulse2 = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '25%': {
    transform: 'scale(1)',
  },
  '50%': {
    transform: 'scale(1.3)',
  },
  '75%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(1)',
  },
});

const pulse3 = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '25%': {
    transform: 'scale(1)',
  },
  '50%': {
    transform: 'scale(1)',
  },
  '75%': {
    transform: 'scale(1.3)',
  },
  '100%': {
    transform: 'scale(1)',
  },
});

const PulseDot1 = styled('div', {
  animation: `${pulse1} 2s infinite`,
});

const PulseDot2 = styled('div', {
  animation: `${pulse2} 2s infinite`,
});

const PulseDot3 = styled('div', {
  animation: `${pulse3} 2s infinite`,
});

const SlideOutPulseDots = styled('div', {
  'display': 'flex',
  'flexDirection': 'row',
  'justifyItems': 'space-evenly',

  '& > div': {
    height: '12px',
    width: '12px',
    background: 'gray',
    borderRadius: '9999px',
  },

  '& > div:not(:last-child)': {
    marginRight: '8px',
  },
});

const dot1 = keyframes({
  '0%': {
    transform: 'translateX(20px) scale(1.3)',
  },
  '5%': {
    transform: 'translateX(20) scale(1)',
  },
  '25%': {
    transform: 'translateX(20px)',
  },
  '50%': {
    transform: 'translateX(0px)',
  },
  '60%': {
    transform: 'scale(1.3)',
  },
  '70%': {
    transform: 'scale(1)',
  },
});

const dot2 = keyframes({
  '0%': {
    transform: 'scale(1.3)',
  },
  '5%': {
    transform: 'scale(1)',
  },
  '25%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1)' },
  '60%': { transform: 'scale(1)' },
  '70%': {
    transform: 'scale(1.3)',
  },
  '80%': {
    transform: 'scale(1)',
  },
});

const dot3 = keyframes({
  '0%': {
    transform: 'translateX(-20px) scale(1.3)',
  },
  '5%': {
    transform: 'translateX(-20) scale(1)',
  },
  '25%': {
    transform: 'translateX(-20px) scale(1)',
  },
  '50%': {
    transform: 'translateX(0px)',
  },
  '60%': {
    transform: 'translateX(0px)',
  },
  '70%': {
    transform: 'scale(1)',
  },
  '80%': {
    transform: 'scale(1.3)',
  },
  '90%': {
    transform: 'scale(1)',
  },
});

const Dot1 = styled('div', {
  animation: `${dot1} 4s infinite`,
  animationDirection: 'alternate',
});

const Dot2 = styled('div', {
  animation: `${dot2} 4s infinite`,
  animationDirection: 'alternate',
});

const Dot3 = styled('div', {
  animation: `${dot3} 4s infinite`,
  animationDirection: 'alternate',
});

export const Spinners = () => {
  return (
    <div className="flex w-full h-full flex-row justify-evenly items-center">
      <DoubleAlternateSpinner>
        <div />
        <div />
      </DoubleAlternateSpinner>

      <PulsingDots>
        <PulseDot1 />
        <PulseDot2 />
        <PulseDot3 />
      </PulsingDots>

      <SlideOutPulseDots>
        <Dot1 />
        <Dot2 />
        <Dot3 />
      </SlideOutPulseDots>
    </div>
  );
};
