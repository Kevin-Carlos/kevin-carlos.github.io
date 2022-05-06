import clsx from 'clsx';
import React, { FC } from 'react';

const HamburgerBar: FC<{ isOpen: boolean; number: number }> = ({
  isOpen,
  number,
}) => {
  return (
    <div
      className={clsx([
        'w-6',
        'h-[2.5px]',
        'rounded-lg',
        'relative',
        'origin-[1px]',
        'bg-theme-white',
        'transition-transform',
        'duration-[250ms]',
        'ease-in-out',
        // Bar 1
        isOpen && number === 1 && 'rotate-45',
        // Bar 2
        isOpen && number === 2 && 'translate-x-5',
        isOpen && number === 2 && 'opacity-0',
        // Bar 3
        isOpen && number === 3 && '-rotate-45',
      ])}
    />
  );
};

type HamburgerIconProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

export const HamburgerIcon: FC<HamburgerIconProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="z-50 relative flex flex-col justify-evenly"
    >
      <HamburgerBar isOpen={isOpen} number={1} />
      <HamburgerBar isOpen={isOpen} number={2} />
      <HamburgerBar isOpen={isOpen} number={3} />
    </button>
  );
};
