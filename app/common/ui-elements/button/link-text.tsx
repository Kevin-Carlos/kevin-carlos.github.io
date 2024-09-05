import clsx from 'clsx';
import { type FC, Fragment, type ReactNode, useMemo } from 'react';
import { Link, type LinkProps } from 'react-aria-components';

type LinkText = LinkProps & {
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
      'group/root',
      'relative',
      'text-theme-black',
      'dark:text-theme-white',
      'no-underline',
      'transition-all',
      'hover:scale(1.05)',
      'rounded-md',
      'focus:outline-none',
      'data-[focus-visible]:outline-theme-dteal',
      'dark:data-[focus-visible]:outline-theme-orange',
      'data-[focus-visible]:outline',
      'data-[focus-visible]:outline-offset-[3.5px]',
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
                'group-data-[focus-visible]/root:w-[28px]',
                'group-data-[focus-visible]/root:rounded-sm',
                'group-hover/root:w-[28px]',
              )}
            />
          )
          : null}
      </Fragment>
    );
  };

  if (href?.includes('http')) {
    return (
      <Link
        {...props}
        href={href}
        target={href?.includes('http') ? '_blank' : undefined}
        rel='noreferrer'
        className={className}
      >
        <LinkChildren />
      </Link>
    );
  }

  return (
    <Link
      {...props}
      className={className}
      href={href ?? ''}
    >
      <LinkChildren />
    </Link>
  );
};
