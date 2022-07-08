import { Link } from '@remix-run/react';
import {
  Fragment,
  type AnchorHTMLAttributes,
  type FC,
  type ReactNode,
} from 'react';
import { styled } from '~/stitches';

const UnderLine = styled('hr', {
  backgroundColor: '$orange',
  width: 0,
  height: '2px',
  transition: 'width 200ms ease-in-out',
  borderWidth: 0,

  position: 'absolute',
  bottom: '-12px',
  left: 0,
});

const OutsideLink = styled('a', {
  'position': 'relative',
  'color': '$links',
  'textDecoration': 'none',
  'transition': 'transform 200ms ease-in-out',

  '&:hover': {
    transform: 'scale(1.05)',

    [`& ${UnderLine}`]: {
      width: '28px',
    },
  },
});

const RemixLink = styled(Link, {
  'position': 'relative',
  'color': '$links',
  'textDecoration': 'none',
  'transition': 'transform 200ms ease-in-out',

  '&:hover': {
    transform: 'scale(1.05)',

    [`& ${UnderLine}`]: {
      width: '28px',
    },
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
