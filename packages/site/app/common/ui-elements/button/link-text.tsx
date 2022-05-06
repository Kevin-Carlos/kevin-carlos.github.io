import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { FC, Fragment } from 'react';

const UnderLine = () => {
  return (
    <hr className="group-hover:w-7 bg-theme-orange absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-200 ease-in-out border-0" />
  );
};

type LinkText = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  animateScale?: boolean;
  childrenClassName?: string;
};

export const LinkText: FC<LinkText> = ({
  children,
  childrenClassName,
  href,
  animateScale = true,
  ...props
}) => {
  const classNames = clsx([
    'group',
    'hover:scale-105',
    'transition-transform',
    'duration-200',
    'ease-in-out',
    props.className,
  ]);

  const LinkChildren = () => {
    return (
      <Fragment>
        <span className={childrenClassName}>{children}</span>
        {animateScale ? <UnderLine /> : null}
      </Fragment>
    );
  };

  if (href?.includes('http')) {
    return (
      <a
        {...props}
        href={href}
        target={href?.includes('http') ? '_blank' : undefined}
        className={classNames}
      >
        <LinkChildren />
      </a>
    );
  }

  return (
    <Link {...props} to={href ?? ''} className={classNames}>
      <LinkChildren />
    </Link>
  );
};
