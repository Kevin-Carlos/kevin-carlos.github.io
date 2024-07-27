import { Link } from '@remix-run/react';
import darkLogo from '~/common/assets/images/logo-dark.png';
import { links } from '~/common/links';

// const LogoWrapper = styled('div', {
//   'position': 'relative',
//   'width': '40px',
//   'height': '40px',

//   '&:hover': {
//     '& > a > div': {
//       opacity: 0.4,
//     },
//   },
// });

export const Logo = () => {
  return (
    <Link
      to={links.home()}
      className='focus:outline-theme-dteal dark:focus:outline-theme-orange rounded-full focus:outline-offset-2 focus:outline focus:outline-2'
    >
      <div className='w-[40px] h-[40px] rounded-full border-0 bg-theme-lgray dark:bg-theme-white absolute transition-opacity'>
        <img src={darkLogo} style={{ position: 'absolute', width: '40px' }} />
      </div>
    </Link>
  );
};
