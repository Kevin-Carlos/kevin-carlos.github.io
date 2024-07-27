import clsx from 'clsx';
import { type FC, type ReactNode } from 'react';

export const CenteredTextItem: FC<{
  children: ReactNode;
  className?: string;
}> = ({ className, children }) => {
  return <div className={clsx("flex items-center justify-center p-4", className)}>{children}</div>;
};
