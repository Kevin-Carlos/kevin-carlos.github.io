import clsx from 'clsx';
import { type FC } from 'react';

const HamburgerBar: FC<{ isOpen: boolean; number: number }> = ({
  isOpen,
  number,
}) => {
  return (
    <div
      className={clsx(
        'relative w-[24px] h-[4px] rounded-lg origin-[1px] transition-transform',
        'bg-theme-black dark:bg-theme-white',
        number === 1 && isOpen && 'rotate-45',
        number === 2 && isOpen && 'translate-x-[20px] opacity-0',
        number === 3 && isOpen && '-rotate-45'
      )}
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
      aria-label="Hamburger Menu"
      onClick={() => setIsOpen(!isOpen)}
      className="z-[100] relative flex flex-col justify-evenly"
    >
      <HamburgerBar isOpen={isOpen} number={1} />
      <HamburgerBar isOpen={isOpen} number={2} />
      <HamburgerBar isOpen={isOpen} number={3} />
    </button>
  );
};
