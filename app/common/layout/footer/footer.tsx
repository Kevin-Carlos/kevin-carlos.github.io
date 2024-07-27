import { links } from '~/common/links';
import { LinkIcon } from '~/common/ui-elements';
import { menuItems } from '../menu-items';

// const FooterNav = styled('nav', {
//   'display': 'flex',
//   'justifyContent': 'space-evenly',

//   '& > a': {
//     margin: '0 12px',
//   },
// });

export const Footer = () => {
  return (
    <footer className='flex justify-center items-center w-full sticky bottom-0 md:[position:initial] z-20 bg-theme-white dark:bg-theme-black border-t-2 border-t-theme-dteal md:border-t-0'>
      <nav className='flex justify-evenly py-3'>
        {menuItems.map((mi) => {
          if (mi.path === links.home()) {
            return;
          }

          return (
            <LinkIcon
              key={`footer-${mi.name}`}
              href={mi.path}
              className='mx-3 last:mr-0'
            >
              {mi.icon}
            </LinkIcon>
          );
        })}
      </nav>
    </footer>
  );
};
