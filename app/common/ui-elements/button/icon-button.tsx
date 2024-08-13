import type { CSSProperties, ReactElement } from 'react';
import { Button } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

type IconButtonProps = {
  children: ReactElement;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick: () => void;
};

export const IconButton = (
  { children, disabled, className, style, onClick, ...rest }: IconButtonProps,
): ReactElement => {
  return (
    <Button
      {...rest}
      isDisabled={disabled}
      className={twMerge(
        'focus:outline-theme-orange focus:outline-2 focus:outline rounded-md hover:opacity-60 transition-opacity disabled:opacity-40 disabled:cursor-wait',
        className,
      )}
      onPress={onClick}
      style={style}
    >
      {children}
    </Button>
  );
};
