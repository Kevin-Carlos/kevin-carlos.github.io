import { ReactNode, type FC } from 'react';

const ModalOverlay = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0  bg-theme-black bg-opacity-70 backdrop-blur-sm z-10 rounded-sm" />
  );
};

/**
 * Expects to be used underneath a `position: relative` container
 */
export const CharacterModal: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div role="dialog" className="absolute top-0 bottom-0 left-0 right-0">
      <ModalOverlay />
      <div className="relative h-full w-full">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20">
          <span className="text-theme-white">{children}</span>
        </div>
      </div>
    </div>
  );
};
