import { useFetcher } from '@remix-run/react';
import { Moon, Sun } from 'phosphor-react';
import { Fragment, useCallback, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useClickOutside } from '~/common/hooks/events';
import { LinkText } from '~/common/ui-elements';
import { IconButton } from '~/common/ui-elements/button/icon-button';
import { useTheme } from '~/useTheme';
import { menuItems } from '../menu-items';
import * as styles from './anim.module.css';
import { HamburgerIcon } from './hamburger-icon';
import { HamburgerMenu } from './hamburger-menu';
import { Logo } from './logo';

const ICON_SIZE = 24;

export const Header = () => {
  const themeMode = useFetcher({ key: 'theme' });
  const [mode, setMode] = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [mobileNav, toggleMobileNav] = useState(false);

  const [interacted, setInteracted] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => toggleMobileNav(false));

  const setIsOpen = useCallback(() => {
    toggleMobileNav(!mobileNav);
  }, [mobileNav]);

  const onThemeToggle = (m: 'light' | 'dark') => {
    setMode(m);
    setDisabled(true);
    setInteracted(true);

    themeMode.submit(
      { mode: m, url: window.location.pathname },
      {
        method: 'POST',
        action: '/theme',
      },
    );

    setTimeout(() => {
      setDisabled(false);
    }, 1_000);
  };

  return (
    <header className='flex py-2 px-6 z-40 h-[56px] text-theme-black dark:text-theme-white sticky top-0 bg-theme-white dark:bg-theme-black border-b-2 border-b-theme-dteal md:border-b-0'>
      <div className='flex gap-[16px] justify-center items-center'>
        <Logo>
          <IconButton
            aria-label='Dark Mode'
            disabled={disabled}
            onClick={() => {
              onThemeToggle('dark');
            }}
            className={twMerge(
              'bg-theme-lgray dark:bg-theme-dteal rounded-full h-8 w-8 flex justify-center items-center z-10 hover:opacity-100 disabled:opacity-100 group absolute',
              // @ts-expect-error css module typings
              interacted && mode === 'dark' && styles.orbitOut,
              // @ts-expect-error css module typings
              interacted && mode === 'light' && styles.orbitIn,
            )}
            style={{
              animationFillMode: 'forwards',

              // For the math behind these values see also anim.module.css
              // https://www.useragentman.com/blog/2013/03/03/animating-circular-paths-using-css3-transitions/
              transform: interacted
                ? undefined
                : mode === 'light'
                ? 'rotate(360deg) translate3d(56px, 4px, 0) rotate(-360deg)'
                : 'rotate(180deg) translate3d(56px, 4px, 0) rotate(-180deg)',
            }}
          >
            <Moon
              size={ICON_SIZE}
              className='group-hover:opacity-40 group-hover:scale-95 group-disabled:opacity-40'
            />
          </IconButton>
          <IconButton
            aria-label='Light Mode'
            disabled={disabled}
            onClick={() => {
              onThemeToggle('light');
            }}
            className={twMerge(
              'bg-theme-lgray dark:bg-theme-dteal rounded-full h-8 w-8 flex justify-center items-center z-10 hover:opacity-100 disabled:opacity-100 group absolute',
              // @ts-expect-error css module typings
              interacted && mode === 'light' && styles.orbitOut,
              // @ts-expect-error css module typings
              interacted && mode === 'dark' && styles.orbitIn,
            )}
            style={{
              // For the math behind these values see also anim.module.css
              // https://www.useragentman.com/blog/2013/03/03/animating-circular-paths-using-css3-transitions/
              transform: interacted
                ? undefined
                : mode === 'dark'
                ? 'rotate(360deg) translate3d(56px, 4px, 0) rotate(-360deg)'
                : 'rotate(180deg) translate3d(56px, 4px, 0) rotate(-180deg)',
            }}
          >
            <Sun
              size={ICON_SIZE}
              className='group-hover:opacity-40 group-hover:scale-95 group-disabled:opacity-40'
            />
          </IconButton>
        </Logo>
      </div>
      <nav className='hidden grow-[1] items-center justify-end sm:flex h-[40px]'>
        {menuItems.map((mi) => {
          if (mi.mobileOnly) {
            return;
          }

          return (
            <Fragment key={`header-${mi.name}`}>
              <LinkText href={mi.path} className='mx-4 last:mr-0'>
                {mi.name}
              </LinkText>
            </Fragment>
          );
        })}
      </nav>
      <div ref={menuRef} className='flex justify-end grow sm:hidden'>
        <HamburgerIcon isOpen={mobileNav} setIsOpen={setIsOpen} />
        {mobileNav && (
          <HamburgerMenu
            isOpen={mobileNav}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </header>
  );
};
