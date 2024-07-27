import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { useMemo, type FC, type ReactNode } from 'react';

type LinkIconProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  animateScale?: boolean;
};

export const LinkIcon: FC<LinkIconProps> = ({
  children,
  href,
  animateScale = true,
  ...props
}) => {
  const className = useMemo(() => {
    return clsx("text-theme-black dark:text-theme-white hover:opacity-80 hover:text-theme-dgray dark:hover:text-theme-lgray transition-colors rounded-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-theme-black dark:focus:outline-theme-orange", props.className)
  }, [props.className])

  if (href?.includes('http')) {
    return (
      <a
        {...props}
        href={href}
        target={href?.includes('http') ? '_blank' : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link {...props} to={href ?? ''} className={className}>
      {children}
    </Link>
  );
};
