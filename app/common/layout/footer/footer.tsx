import { links } from '~/common/links';
import { LinkIcon } from '~/common/ui-elements';
import { menuItems } from '../menu-items';

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="flex justify-center w-screen items-end pb-3"
    >
      <nav role="navigation" className="flex justify-evenly space-x-4">
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
