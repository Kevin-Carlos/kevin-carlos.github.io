import { ReactElement } from 'react';
import { Button } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

type IconButtonProps = {
  children: ReactElement;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
};

export const IconButton = (
  { children, disabled, className, onClick }: IconButtonProps,
): ReactElement => {
  return (
    <Button
      isDisabled={disabled}
      className={twMerge(
        'focus:outline-theme-orange focus:outline-2 focus:outline rounded-md hover:opacity-60 transition-opacity disabled:opacity-40 disabled:cursor-wait',
        className,
      )}
      onPress={onClick}
    >
      {children}
    </Button>
  );
};
