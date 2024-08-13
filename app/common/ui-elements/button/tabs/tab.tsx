import clsx from 'clsx';
import { type FC } from 'react';
import {
  Tab as RACTab,
  type TabProps as RACTabProps,
} from 'react-aria-components';

export type TabProps = RACTabProps;

export const Tab: FC<TabProps> = ({ children, ...rest }) => {
  return (
    <RACTab
      {...rest}
      className={clsx(
        'relative',
        'cursor-pointer',
        'p-2',
        'transition-colors',
        'hover:text-theme-lteal',
        'dark:hover:text-theme-orange',
        'before:bg-theme-black',
        'dark:before:bg-theme-orange',
        'mr-2',
        'last:mr-0',
        'rounded-md',
        'outline-none',
        'outline-offset-[-6px]',
        'focus:outline-theme-black',
        'dark:focus:outline-theme-orange',
        // 16px is the horizontal padding
        'data-[selected]:before:absolute',
        'data-[selected]:before:bottom-[-2px]',
        'data-[selected]:before:h-1',
        'data-[selected]:before:w-[calc(100%-16px)]',
      )}
    >
      {children}
    </RACTab>
  );
};
