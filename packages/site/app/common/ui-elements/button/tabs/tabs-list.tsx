import clsx from 'clsx';
import { type FC } from 'react';

export type TabsListProps = {
  children: JSX.Element[];
  className?: string;
};

export const TabsList: FC<TabsListProps> = ({ children, className }) => {
  return (
    <ol
      className={clsx([
        className,
        'max-w-max',
        'mb-5',
        'flex',
        'items-center',
        'border-b-2',
        'border-b-theme-dteal',
        'dark:border-b-theme-orange',
      ])}
    >
      {Array.isArray(children) ? children.map((c) => c) : children}
    </ol>
  );
};
