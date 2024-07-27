import clsx from 'clsx';
import { type FC } from 'react';

export type TabProps = Omit<JSX.IntrinsicElements['div'], 'ref'> & {
  active: boolean;
};

export const Tab: FC<TabProps> = ({ children, active, ...rest }) => {
  return (
    <div
      role='tab'
      tabIndex={active ? 0 : -1}
      {...rest}
      className={clsx(
        'relative',
        'cursor-pointer',
        'pt-5',
        'pb-2',
        'px-2',
        'transition-colors',
        'hover:text-theme-lteal',
        'dark:hover:text-theme-orange',
        'before:bg-theme-black',
        'dark:before:bg-theme-orange',
        'mr-2',
        'last:mr-0',
        'rounded-md',
        // 16px is the horizontal padding
        active &&
          'before:absolute before:bottom-[-2px] before:h-1 before:w-[calc(100%-16px)]',
      )}
    >
      {children}
    </div>
  );
};
