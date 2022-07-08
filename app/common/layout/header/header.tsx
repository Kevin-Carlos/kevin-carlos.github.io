import { useFetcher } from '@remix-run/react';
import { Moon, Sun } from 'phosphor-react';
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

const Nav = styled('nav', {
  'display': 'none',
  'flexGrow': 1,
  'alignItems': 'center',
  'justifyContent': 'flex-end',

  '& > a': {
    margin: '0 8px',
  },

  '@media screen and (min-width: 640px)': {
    display: 'flex',
  },
});

const HamburgerWrapper = styled('div', {
  'display': 'flex',
  'justifyContent': 'flex-end',
  'flexGrow': 1,

  '@media screen and (min-width: 640px)': {
    display: 'none',
  },
});

const StyledMoon = styled(Moon, {
  '& > path': {
    stroke: '$headerIcons',
  },
});

const StyledSun = styled(Sun, {
  '& > circle, & > line': {
    stroke: '$headerIcons',
  },
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

  const onThemeToggle = (mode: 'light' | 'dark') => {
    themeMode.submit(
      { mode: mode, url: window.location.pathname },
      {
        method: 'post',
        action: '/theme/mode',
      }
    );

    setMode(mode);
  };

  return (
    <StyledHeader role="banner">
      <LogoAndModeWrapper>
        <Logo />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <StyledMoon
            size={ICON_SIZE}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              onThemeToggle('dark');
            }}
          />
          <Switch
            checked={mode === 'light' ? true : false}
            onCheckedChange={(checked) => {
              const mode = checked ? 'light' : 'dark';
              onThemeToggle(mode);
            }}
          />
          <StyledSun
            size={ICON_SIZE}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              onThemeToggle('light');
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
      <HamburgerWrapper ref={menuRef}>
        <HamburgerIcon isOpen={mobileNav} setIsOpen={setIsOpen} />
        <HamburgerMenu isOpen={mobileNav} setIsOpen={setIsOpen} />
      </HamburgerWrapper>
    </StyledHeader>
  );
};
