import { Link } from '@remix-run/react';
import clsx from 'clsx';
import {
  type AnchorHTMLAttributes,
  type FC,
  Fragment,
  type ReactNode,
  useMemo,
} from 'react';

type LinkText = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
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
  const className = useMemo(() => {
    return clsx(
      'group',
      'relative',
      'text-theme-black',
      'dark:text-theme-white',
      'no-underline',
      'transition-all',
      'hover:scale(1.05)',
      'rounded-md',
      'focus:outline-theme-dteal',
      'focus:outline',
      'focus:outline-offset-[-1px]',
      'dark:focus:outline-theme-orange',
      props.className,
    );
  }, []);

  const LinkChildren = () => {
    return (
      <Fragment>
        <span className={childrenClassName}>{children}</span>
        {animateScale
          ? (
            <hr
              className={clsx(
                'bg-theme-dteal',
                'dark:bg-theme-orange',
                'w-0',
                'h-0.5',
                'transition-all',
                'absolute',
                'bottom-[-4px]',
                'left-0',
                'border-0',
                'group-hover:w-[28px]',
              )}
            />
          )
          : null}
      </Fragment>
    );
  };

  if (href?.includes('http')) {
    return (
      <a
        {...props}
        href={href}
        target={href?.includes('http') ? '_blank' : undefined}
        rel='noreferrer'
        className={className}
      >
        <LinkChildren />
      </a>
    );
  }

  return (
    <Link
      {...props}
      className={className}
      to={href ?? ''}
    >
      <LinkChildren />
    </Link>
  );
};
