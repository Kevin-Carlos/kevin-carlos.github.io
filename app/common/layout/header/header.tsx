import { useFetcher } from '@remix-run/react';
import { Moon, Sun } from 'phosphor-react';
import { Fragment, useCallback, useRef, useState } from 'react';
import { useClickOutside } from '~/common/hooks/events';
import { LinkText } from '~/common/ui-elements';
import { IconButton } from '~/common/ui-elements/button/icon-button';
import { Switch } from '~/common/ui-elements/library';
import { useTheme } from '~/useTheme';
import { menuItems } from '../menu-items';
import { HamburgerIcon } from './hamburger-icon';
import { HamburgerMenu } from './hamburger-menu';
import { Logo } from './logo';

const ICON_SIZE = 24;

export const Header = () => {
  const [mode, setMode] = useTheme();

  const themeMode = useFetcher({ key: "theme" });

  const [mobileNav, toggleMobileNav] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => toggleMobileNav(false));

  const setIsOpen = useCallback(() => {
    toggleMobileNav(!mobileNav);
  }, [mobileNav]);

  const onThemeToggle = (mode: 'light' | 'dark') => {
    themeMode.submit(
      { mode: mode, url: window.location.pathname },
      {
        method: 'POST',
        action: '/theme',
      }
    );

    setMode(mode);
  };

  return (
    <header className='flex py-2 px-6 z-40 h-[56px] text-theme-black dark:text-theme-white sticky top-0 bg-theme-white dark:bg-theme-black border-b-2 border-b-theme-dteal md:border-b-0'>
      <div className="grid grid-cols-[40px_1fr] gap-4">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          <IconButton
            onClick={() => {
              onThemeToggle('dark');
            }}
          >
            <Moon size={ICON_SIZE} />
          </IconButton>
          <Switch
            checked={mode === 'light' ? true : false}
            onCheckedChange={(checked) => {
              const mode = checked ? 'light' : 'dark';
              onThemeToggle(mode);
            }}
          />
          <IconButton
            onClick={() => {
              onThemeToggle('light');
            }}
          >
            <Sun size={ICON_SIZE} />
          </IconButton>
        </div>
      </div>
      <nav className="hidden grow-[1] items-center justify-end sm:flex h-[40px]">
        {menuItems.map((mi) => {
          if (mi.mobileOnly) {
            return;
          }

          return (
            <Fragment key={`header-${mi.name}`}>
              <LinkText href={mi.path} className="mx-4 last:mr-0">{mi.name}</LinkText>
            </Fragment>
          );
        })}
      </nav>
      <div ref={menuRef} className="flex justify-end grow sm:hidden">
        <HamburgerIcon isOpen={mobileNav} setIsOpen={setIsOpen} />
        {mobileNav && <HamburgerMenu isOpen={mobileNav} setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};
