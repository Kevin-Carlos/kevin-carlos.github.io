import { Link, type LinkProps } from '@remix-run/react';
import clsx from 'clsx';
import { type FC, type ReactNode, useMemo } from 'react';
import { Button, type ButtonProps } from 'react-aria-components';

type PillButtonProps = ButtonProps & {
  children: ReactNode;
  to?: LinkProps['to'];
};

/**
 * Not to be confused with switch-like pill button
 * This just is styled to look like a pill
 */
export const PillButton: FC<PillButtonProps> = ({
  children,
  to,
  isDisabled,
  ...props
}) => {
  const className = useMemo(() => {
    return clsx(
      'font-accent',
      'py-2',
      'px-5',
      'rounded-full',
      'cursor-pointer',
      'border-0',
      'text-base',
      'text-theme-black',
      'dark:text-theme-white',
      'transition-colors',
      'focus:outline',
      'focus:outline-2',
      'focus:outline-theme-dteal',
      'focus:outline-offset-2',
      'dark:focus:outline-theme-orange',
      'disabled:opacity-50',
      props.className,
    );
  }, []);

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <Button {...props} isDisabled={isDisabled} className={className}>
      {children}
    </Button>
  );
};
