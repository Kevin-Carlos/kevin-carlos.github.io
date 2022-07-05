import { Link, type LinkProps } from '@remix-run/react';
import clsx from 'clsx';
import { type FC } from 'react';

type PillButtonProps = JSX.IntrinsicElements['button'] & {
  to?: LinkProps['to'];
};

/**
 * Not to be confused with switch-like pill button
 * This just is styled to look like a pill
 */
export const PillButton: FC<PillButtonProps> = ({
  children,
  to,
  disabled,
  ...props
}) => {
  const MainButton = () => (
    <button
      {...props}
      disabled={disabled}
      className={clsx(
        'font-accent',
        'py-2',
        'px-5',
        'rounded-[20px]',
        'text-theme-black',
        'dark:text-theme-white',
        'transition-colors',
        'duration-[250ms]',
        'ease-in-out',
        'disabled:opacity-50',
        props.className
      )}
    >
      {children}
    </button>
  );

  if (to) {
    return (
      <Link to={to}>
        <MainButton />
      </Link>
    );
  }

  return <MainButton />;
};
