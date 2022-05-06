import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { type FC } from 'react';

const MaybeLinkedContent: FC<{ to?: string }> = ({ to, children }) => {
  if (!to) {
    return <>{children}</>;
  } else if (to.includes('http')) {
    return <a href={to}>{children}</a>;
  }

  return <Link to={to}>{children}</Link>;
};

type CardProps = {
  title: string;
  to?: string;
};

export const Card: FC<CardProps> = ({ title, to, children }) => {
  return (
    <li
      style={{ boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.2)' }}
      className={clsx([
        // general
        'p-4',
        'relative',
        'hover:scale-[1.02]',
        'transition-transform',
        'ease-out',
        'cursor-pointer',

        // backgrounds
        'bg-theme-lteal2',
        'bg-opacity-40',
        'dark:bg-theme-black',

        // Border
        'border-[1px]',
        'rounded-md',
        'border-theme-dteal',
        'border-solid',

        // Absolutely positioned, colored top bar
        "before:content-['']",
        'before:absolute',
        'before:top-0',
        'before:left-0',
        'before:right-0',
        'before:w-full',
        'before:bg-theme-black',
        'before:dark:bg-theme-orange',
        'before:h-1',
        'before:rounded-tl-md',
        'before:rounded-tr-md',
      ])}
    >
      <MaybeLinkedContent to={to}>
        <>
          <h1 className="text-xl mb-5 tracking-wider">{title}</h1>
          {children}
        </>
      </MaybeLinkedContent>
    </li>
  );
};
