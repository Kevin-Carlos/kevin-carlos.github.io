import { useFetcher } from '@remix-run/react';
import { Moon, Sun } from 'phosphor-react';
import { ReactElement, useCallback, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconButton } from '~/common/ui-elements/button/icon-button';
import { Theme } from '~/ThemeContext';
import { useTheme } from '~/useTheme';
import * as styles from './anim.module.css';

const ICON_SIZE = 24;

const getClass = (
  isFocused: boolean,
  wasFocused: boolean,
  kind: Theme,
  mode: Theme,
) => {
  // Keyboard focus interaction takes precedence
  // Might need to track if it was focused, but now it's not
  if (isFocused && kind === mode) {
    // @ts-expect-error css module typings
    return styles.halfOrbitIn;
  } else if (!isFocused && wasFocused && kind === mode) {
    // @ts-expect-error css module typings
    return styles.halfOrbitOut;
  }

  return kind === 'light' && mode === 'dark'
    // @ts-expect-error css module typings
    ? styles.orbitIn
    : kind === 'dark' && mode === 'light'
    // @ts-expect-error css module typings
    ? styles.orbitIn
    // @ts-expect-error css module typings
    : styles.orbitOut;
};

type ThemeButtonProps = {
  kind: Theme;
  interacted: boolean;
  onClick: () => void;
};

export const ThemeButton = ({
  kind,
  interacted,
  onClick,
}: ThemeButtonProps): ReactElement => {
  const themeMode = useFetcher({ key: 'theme' });
  const [mode, setMode] = useTheme();

  const [disabled, setDisabled] = useState(false);
  const hadFocus = useRef(false);

  const onThemeToggle = useCallback((m: 'light' | 'dark') => {
    if (kind === mode) {
      return;
    }

    setMode(m);
    setDisabled(true);
    onClick();

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
  }, [mode, kind, themeMode]);

  return (
    <IconButton
      aria-label={`${kind} mode`}
      aria-disabled={disabled}
      onClick={() => {
        onThemeToggle(kind);
      }}
      className={({ isFocusVisible }) => {
        if (isFocusVisible) {
          hadFocus.current = true;
        }

        const animClass = getClass(
          isFocusVisible,
          hadFocus.current,
          kind,
          mode,
        );

        if (!isFocusVisible && hadFocus.current) {
          setTimeout(() => {
            hadFocus.current = false;
          }, 500);
        }

        return twMerge(
          'bg-theme-lgray dark:bg-theme-dteal rounded-full h-8 w-8 flex justify-center items-center z-10 hover:opacity-100 group absolute',
          disabled && 'pointer-events-none',
          animClass,
        );
      }}
      style={{
        animationFillMode: 'forwards',

        // For the math behind these values see also anim.module.css
        // https://www.useragentman.com/blog/2013/03/03/animating-circular-paths-using-css3-transitions/
        //
        // If the button kind is the opposite of the active mode, show it as the
        // available button, otherwise "hide" it offscreen / out of orbit
        transform: !interacted
          ? (kind === 'light' && mode === 'dark') ||
              (kind === 'dark' && mode === 'light')
            ? 'rotate(360deg) translate3d(56px, 4px, 0) rotate(-360deg)'
            : 'rotate(180deg) translate3d(56px, 4px, 0) rotate(-180deg)'
          : undefined,
      }}
    >
      {kind === 'dark'
        ? (
          <Moon
            size={ICON_SIZE}
            className={twMerge(
              'group-hover:opacity-40 group-hover:scale-95',
              disabled && 'opacity-40',
            )}
          />
        )
        : (
          <Sun
            size={ICON_SIZE}
            className={twMerge(
              'group-hover:opacity-40 group-hover:scale-95',
              disabled && 'opacity-40',
            )}
          />
        )}
    </IconButton>
  );
};
