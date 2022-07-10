import { Link, type LinkProps } from '@remix-run/react';
import { type FC } from 'react';
import { styled } from '~/stitches';

const StyledButton = styled('button', {
  'fontFamily': '$accent',
  'padding': '8px 20px',
  'borderRadius': '20px',
  'border': 0,
  'cursor': 'pointer',
  'fontSize': '16px',

  'color': '$text',
  'transition': 'color 250ms ease-in-out',

  '&:disabled': {
    opacity: '0.5',
  },
});

type PillButtonProps = Omit<JSX.IntrinsicElements['button'], 'ref'> & {
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
    <StyledButton {...props} disabled={disabled} className={props.className}>
      {children}
    </StyledButton>
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
