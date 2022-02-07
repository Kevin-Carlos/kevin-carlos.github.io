import React, { FC } from 'react';

type HamburgerIconProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

export const HamburgerIcon: FC<HamburgerIconProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="z-50 relative">
      <span>Hammy</span>
      {/* <div />
      <div />
      <div /> */}
    </button>
  );
};
