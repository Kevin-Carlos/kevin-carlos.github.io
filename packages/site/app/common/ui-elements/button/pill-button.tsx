import clsx from 'clsx';
import { type FC } from 'react';

/**
 * Not to be confused with switch-like pill button
 * This just is styled to look like a pill
 */
export const PillButton: FC<JSX.IntrinsicElements['button']> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        'font-accent',
        'py-2',
        'px-5',
        'rounded-[20px]',
        'text-theme-black',
        'dark:text-theme-white',
        'transition-colors',
        'duration-[250ms]',
        'ease-in-out',
        props.className
      )}
    >
      {children}
    </button>
  );
};
