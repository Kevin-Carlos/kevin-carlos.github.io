import { FC } from 'react';
import { Link } from 'remix';

type LinkIconProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  animateScale?: boolean;
};

export const LinkIcon: FC<LinkIconProps> = ({
  children,
  href,
  animateScale = true,
  ...props
}) => {
  if (href?.includes('http')) {
    return (
      <a
        {...props}
        href={href}
        target={href?.includes('http') ? '_blank' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link {...props} to={href ?? ''}>
      {children}
    </Link>
  );
};
