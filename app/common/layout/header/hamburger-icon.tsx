import { type FC } from 'react';
import { styled } from '~/stitches';

const HamburgerSlice = styled('div', {
  position: 'relative',
  width: '24px',
  height: '2.5px',
  borderRadius: '8px',
  transformOrigin: '1px',
  transition: 'transform 250ms ease-in-out',
  backgroundColor: '$headerIcons',

  variants: {
    num: {
      '1': {},
      '2': {},
      '3': {},
    },
    isOpen: {
      true: {},
    },
  },

  compoundVariants: [
    {
      num: '1',
      isOpen: true,
      css: {
        transform: 'rotate(45deg)',
      },
    },
    {
      num: '2',
      isOpen: true,
      css: {
        transform: 'translateX(20px)',
        opacity: 0,
      },
    },
    {
      num: '3',
      isOpen: true,
      css: {
        transform: 'rotate(-45deg)',
      },
    },
  ],
});

const HamburgerBar: FC<{ isOpen: boolean; number: number }> = ({
  isOpen,
  number,
}) => {
  return <HamburgerSlice isOpen={isOpen} num={number} />;
};

const HamburgerButton = styled('button', {
  zIndex: 50,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
});

type HamburgerIconProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

export const HamburgerIcon: FC<HamburgerIconProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
      <HamburgerBar isOpen={isOpen} number={1} />
      <HamburgerBar isOpen={isOpen} number={2} />
      <HamburgerBar isOpen={isOpen} number={3} />
    </HamburgerButton>
  );
};
