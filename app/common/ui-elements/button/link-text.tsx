import { Link } from '@remix-run/react';
import {
  Fragment,
  type AnchorHTMLAttributes,
  type FC,
  type ReactNode,
} from 'react';
import { styled } from '~/stitches';

const UnderLine = styled('hr', {
  'backgroundColor': '$orange',
  'width': 0,
  'height': '2px',
  'transition': 'all 200ms ease-in-out',
  'borderWidth': 0,

  'position': 'absolute',
  'bottom': '4px',
  'left': 0,

  '&:hover': {
    width: '28px',
  },
});

const OutsideLink = styled('a', {
  'transition': 'transform 200ms ease-in-out',

  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const RemixLink = styled(Link, {
  'transition': 'transform 200ms ease-in-out',

  '&:hover': {
    transform: 'scale(1.05)',
  },
});

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
      <OutsideLink
        {...props}
        href={href}
        target={href?.includes('http') ? '_blank' : undefined}
        className={props.className}
      >
        <LinkChildren />
      </OutsideLink>
    );
  }

  return (
    <RemixLink {...props} className={props.className} to={href ?? ''}>
      <LinkChildren />
    </RemixLink>
  );
};
