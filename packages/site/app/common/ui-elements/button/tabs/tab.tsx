import clsx from 'clsx';
import { type FC } from 'react';

export type TabProps = JSX.IntrinsicElements['li'] & {
  active: boolean;
};

export const Tab: FC<TabProps> = ({ children, active, ...rest }) => {
  return (
    <li
      {...rest}
      className={clsx([
        rest.className,
        active && 'border-b-2',
        active && 'border-b-theme-orange',
        'cursor-pointer',
        'px-2',
        'py-5',
        'bg-transparent',
        'transition-colors',
        'duration-[250ms]',
        'ease-in-out',
        'hover:text-theme-lgray',
        'dark:hover:text-theme-orange',
      ])}
    >
      {children}
    </li>
  );
};
