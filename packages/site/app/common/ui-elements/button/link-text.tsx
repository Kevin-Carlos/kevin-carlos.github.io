import { FC } from 'react';
import { Link } from 'remix';

const UnderLine = () => {
  return (
    <hr className="group-hover:w-7 bg-theme-orange absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-200 ease-in-out border-0" />
  );
};

type LinkText = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  animateScale?: boolean;
};

export const LinkText: FC<LinkText> = ({
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
        className="group hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        <span>{children}</span>
        <UnderLine />
      </a>
    );
  }

  return (
    <Link
      {...props}
      to={href ?? ''}
      className="group hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      <span>{children}</span>
      <UnderLine />
    </Link>
  );
};
