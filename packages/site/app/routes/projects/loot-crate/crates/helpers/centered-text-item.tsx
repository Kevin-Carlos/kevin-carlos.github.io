import clsx from 'clsx';
import { type FC } from 'react';

export const CenteredTextItem: FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx([
        className,
        'flex',
        'items-center',
        'justify-center',
        'p-4',
      ])}
    >
      {children}
    </div>
  );
};
