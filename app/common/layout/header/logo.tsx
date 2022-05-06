import { Link } from '@remix-run/react';
import darkLogo from '~/common/assets/images/logo-dark.png';
import { links } from '~/common/links';

const Circle = () => {
  return (
    <div className="bg-theme-lgray dark:bg-theme-white w-10 h-10 absolute rounded-full border-0 transition ease-in-out  duration-200 group-hover:bg-opacity-60" />
  );
};

export const Logo = () => {
  return (
    <div className="relative w-10 h-10 group">
      <Link to={links.home()}>
        <Circle />
        <img src={darkLogo} className="absolute w-10" />
      </Link>
    </div>
  );
};
