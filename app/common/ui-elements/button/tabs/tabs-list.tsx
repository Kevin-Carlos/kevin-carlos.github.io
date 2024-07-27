import clsx from 'clsx';
import { type FC } from 'react';

export type TabsListProps = {
  children: JSX.Element[];
  className?: string;
};

export const TabsList: FC<TabsListProps> = ({ children, className }) => {
  return (
    <div
      role='tablist'
      className={clsx(
        'relative',
        'max-w-max',
        'mb-5',
        'flex',
        'items-center',
        'border-b-[1px]',
        'px-3',
        'border-theme-black',
        'dark:border-theme-orange',
        'before:h-[4px]',
        'before:w-[4px]',
        'before:absolute',
        'before:bottom-[-2.5px]',
        'before:left-0',
        'before:bg-theme-black',
        'dark:before:bg-theme-orange',
        'after:h-[4px]',
        'after:w-[4px]',
        'after:absolute',
        'after:bottom-[-2.5px]',
        'after:right-0',
        'after:bg-theme-black',
        'dark:after:bg-theme-orange',
        className,
      )}
    >
      {Array.isArray(children) ? children.map((c) => c) : children}
    </div>
  );
};
