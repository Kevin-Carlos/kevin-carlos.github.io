import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { type FC, ReactNode } from 'react';

const MaybeLinkedContent: FC<{ to: string; children: string }> = (
  { to, children },
) => {
  if (to.includes('http')) {
    return <a href={to}>{children}</a>;
  }

  return (
    <Link
      to={to}
      className='self-end text-theme-dteal dark:text-theme-orange focus:outline-none rounded-md before:absolute before:inset-0 focus:before:outline focus:before:outline-2 focus:before:outline-offset-4 focus:before:outline-theme-black dark:focus:before:outline-theme-orange focus:before:rounded-md'
    >
      {children}
    </Link>
  );
};

type CardProps = {
  children: ReactNode;
  title: string;
  to?: string;
  linkText?: string;
};

export const Card: FC<CardProps> = ({ title, to, children, linkText }) => {
  return (
    <li
      className={clsx(
        'p-4',
        'relative',
        'cursor-pointer',
        'transition-transform',
        'bg-theme-lteal',
        'dark:bg-theme-black',
        'bg-opacity-40',
        'flex',
        'flex-col',
        'gap-5',
        'border-2',
        'border-solid',
        'border-theme-dteal',
        'rounded-md',
        'shadow-md',
        'before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-[4px]',
        'before:bg-theme-black dark:before:bg-theme-orange before:rounded-t-md',
        'hover:scale-105',
      )}
    >
      <h1 className='text-xl tracking-wider'>{title}</h1>
      {children}
      {!!(to && linkText) && (
        <MaybeLinkedContent to={to}>{linkText}</MaybeLinkedContent>
      )}
    </li>
  );
};
