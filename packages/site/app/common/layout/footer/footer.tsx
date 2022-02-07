import { links } from '~/common/links';
import { LinkIcon } from '~/common/ui-elements';
import { menuItems } from '../menu-items';

export const Footer = () => {
  return (
    <footer className="flex justify-center w-screen items-end pb-3">
      <nav className="flex justify-evenly space-x-4">
        {menuItems.map((mi) => {
          if (mi.path === links.home()) {
            return;
          }

          return (
            <LinkIcon key={`footer-${mi.name}`} href={mi.path}>
              {mi.icon}
            </LinkIcon>
          );
        })}
      </nav>
    </footer>
  );
};
