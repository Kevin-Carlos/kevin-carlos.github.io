import { Moon, Sun } from 'phosphor-react';
import { Fragment, useCallback, useRef, useState } from 'react';
import { colors, Divider, Switch } from 'sublimity-ui';
import { useClickOutside } from '~/common/hooks/events';
import { LinkText } from '~/common/ui-elements';
import { useTheme } from '~/useTheme';
import { menuItems } from '../menu-items';
import { HamburgerIcon } from './hamburger-icon';
import { HamburgerMenu } from './hamburger-menu';
import { Logo } from './logo';

export const Header = () => {
  const [mode, setMode] = useTheme();

  const [mobileNav, toggleMobileNav] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => toggleMobileNav(false));

  const setIsOpen = useCallback(() => {
    toggleMobileNav(!mobileNav);
  }, [mobileNav]);

  return (
    <header role="banner" className="flex dark:text-theme-white py-2 px-6 z-40">
      <div className="grid gap-4 grid-cols-[auto_1fr]">
        <Logo />
        <div className="flex items-center justify-center">
          <Moon size={24} />
          <Switch
            checked={mode === 'light' ? true : false}
            onCheckedChange={(checked) => setMode(checked ? 'light' : 'dark')}
          />
          <Sun size={24} />
        </div>
      </div>
      <nav
        role="navigation"
        className="hidden md:flex flex-grow items-center justify-end space-x-4"
      >
        {menuItems.map((mi, idx) => {
          if (mi.mobileOnly) {
            return;
          }

          return (
            <Fragment key={`header-${mi.name}`}>
              <LinkText href={mi.path}>{mi.name}</LinkText>
              {idx !== menuItems.length - 1 ? (
                <Divider
                  orientation="vertical"
                  color={mode === 'dark' ? colors.dark_teal : colors.light_teal}
                />
              ) : null}
            </Fragment>
          );
        })}
      </nav>
      <div ref={menuRef} className="md:hidden flex justify-end flex-grow">
        <HamburgerIcon isOpen={mobileNav} setIsOpen={setIsOpen} />
        <HamburgerMenu isOpen={mobileNav} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};
