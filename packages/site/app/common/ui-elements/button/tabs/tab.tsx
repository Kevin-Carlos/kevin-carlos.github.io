import clsx from 'clsx';
import { type FC } from 'react';

export type TabProps = JSX.IntrinsicElements['li'] & {
  /** 1 based */
  childNumber: number;
  active: boolean;
};

export const Tab: FC<TabProps> = ({
  children,
  childNumber,
  active,
  ...rest
}) => {
  const commonActiveClasses = [
    active && 'border-b-2',
    active && 'border-b-theme-orange',
    active && 'relative',
    active && 'before:content-[""]',
    active && 'before:absolute',
    active && 'before:bottom-[-2px]',
    active && 'before:w-0',
    active && 'before:border-t-[2px]',
    active && 'before:border-theme-black',
  ];

  const firstChildActiveClasses =
    childNumber === 1
      ? [
          ...commonActiveClasses,
          active && 'before:right-0',
          active && 'before:border-l-theme-orange',
          active && 'before:border-l-[2px]',
        ]
      : [];

  const lastChildActiveClasses =
    childNumber === 2
      ? [
          ...commonActiveClasses,
          active && 'before:left-0',
          active && 'before:border-r-theme-orange',
          active && 'before:border-r-[2px]',
        ]
      : [];

  return (
    <li
      {...rest}
      className={clsx([
        rest.className,
        ...firstChildActiveClasses,
        ...lastChildActiveClasses,
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
