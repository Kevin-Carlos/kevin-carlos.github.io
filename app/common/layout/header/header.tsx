import { useFetcher } from '@remix-run/react';
import { Moon } from 'phosphor-react';
import { Fragment, useCallback, useRef, useState } from 'react';
import { useClickOutside } from '~/common/hooks/events';
import { LinkText } from '~/common/ui-elements';
import { Switch } from '~/common/ui-elements/library';
import { styled } from '~/stitches';
import { useTheme } from '~/useTheme';
import { menuItems } from '../menu-items';
import { HamburgerIcon } from './hamburger-icon';
import { HamburgerMenu } from './hamburger-menu';
import { Logo } from './logo';

const ICON_SIZE = 24;

const StyledHeader = styled('header', {
  display: 'flex',
  padding: '8px 24px',
  zIndex: 40,

  color: '$text',
});

const LogoAndModeWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridGap: '16px',
});

// className="hidden md:flex flex-grow items-center justify-end space-x-4"
const Nav = styled('nav', {
  // TODO STITCHES breakpoints
  'display': 'flex',
  'flexGrow': 1,
  'alignItems': 'center',
  'justifyContent': 'flex-end',

  '& > a': {
    margin: '0 16px',
  },
});

const StyledMoon = styled(Moon, {
  backgroundColor: '$body',
});

const StyledSun = styled(Moon, {
  backgroundColor: '$body',
});

export const Header = () => {
  const [mode, setMode] = useTheme();

  const themeMode = useFetcher();

  const [mobileNav, toggleMobileNav] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => toggleMobileNav(false));

  const setIsOpen = useCallback(() => {
    toggleMobileNav(!mobileNav);
  }, [mobileNav]);

  return (
    <StyledHeader role="banner">
      <LogoAndModeWrapper>
        <Logo />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StyledMoon
            size={ICON_SIZE}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              themeMode.submit(
                { value: 'dark' },
                {
                  method: 'post',
                  action: '/theme/mode',
                }
              );
              setMode('dark');
            }}
          />
          <Switch
            checked={mode === 'light' ? true : false}
            onCheckedChange={(checked) => {
              const mode = checked ? 'light' : 'dark';
              setMode(checked ? 'light' : 'dark');
              themeMode.submit(
                { mode: mode, url: window.location.pathname },
                { method: 'post', action: '/theme/mode', replace: true }
              );
            }}
          />
          <StyledSun
            size={ICON_SIZE}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setMode('light');
              themeMode.submit(
                { value: 'light' },
                {
                  method: 'post',
                  action: '/theme/mode',
                }
              );
            }}
          />
        </div>
      </LogoAndModeWrapper>
      <Nav role="navigation">
        {menuItems.map((mi) => {
          if (mi.mobileOnly) {
            return;
          }

          return (
            <Fragment key={`header-${mi.name}`}>
              <LinkText href={mi.path}>{mi.name}</LinkText>
            </Fragment>
          );
        })}
      </Nav>
      <div
        ref={menuRef}
        // TODO STITCHES breakpoints
        style={{ display: 'none' }}
        className="md:hidden flex justify-end flex-grow"
      >
        <HamburgerIcon isOpen={mobileNav} setIsOpen={setIsOpen} />
        <HamburgerMenu isOpen={mobileNav} setIsOpen={setIsOpen} />
      </div>
    </StyledHeader>
  );
};
