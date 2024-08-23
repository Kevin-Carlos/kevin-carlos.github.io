import { Link } from '@remix-run/react';
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
      className='self-end text-theme-black dark:text-theme-orange focus:outline-none rounded-md before:absolute before:inset-0 focus:before:outline focus:before:outline-2 focus:before:outline-offset-4 focus:before:outline-theme-black dark:focus:before:outline-theme-orange focus:before:rounded-md'
    >
      {children}
    </Link>
  );
};

export type CardProps = {
  children: ReactNode;
  title: string;
  to?: string;
  linkText?: string;
};

export const Card: FC<CardProps> = ({ title, to, children, linkText }) => {
  return (
    <div className='relative z-[1] p-4 rounded-md bg-theme-lteal dark:bg-theme-black flex flex-col gap-5 before:absolute before:inset-[0_.4px_.4px] before:h-[4px] before:bg-theme-black dark:before:bg-theme-orange before:rounded-t-md'>
      <h1 className='text-xl tracking-wider'>{title}</h1>
      {children}
      {!!(to && linkText) && (
        <MaybeLinkedContent to={to}>{linkText}</MaybeLinkedContent>
      )}
    </div>
  );
};
