import { Fragment, useCallback, useRef, useState } from 'react';
import { useClickOutside } from '~/common/hooks/events';
import { LinkText } from '~/common/ui-elements';
import { menuItems } from '../menu-items';
import { HamburgerIcon } from './hamburger-icon';
import { HamburgerMenu } from './hamburger-menu';
import { Logo } from './logo';
import { ThemeButton } from './ThemeButton';

export const Header = () => {
  const [mobileNav, toggleMobileNav] = useState(false);
  const [interacted, setInteracted] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => toggleMobileNav(false));

  const setIsOpen = useCallback(() => {
    toggleMobileNav(!mobileNav);
  }, [mobileNav]);

  return (
    <header className='flex py-2 px-6 z-40 h-[56px] text-theme-black dark:text-theme-white sticky top-0 bg-theme-white dark:bg-theme-black border-b-2 border-b-theme-dteal md:border-b-0'>
      <div className='flex gap-[16px] justify-center items-center'>
        <Logo>
          <ThemeButton
            kind='dark'
            interacted={interacted}
            onClick={() => {
              setInteracted(true);
            }}
          />
          <ThemeButton
            kind='light'
            interacted={interacted}
            onClick={() => {
              setInteracted(true);
            }}
          />
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
