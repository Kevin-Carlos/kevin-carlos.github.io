import type { MetaFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { useDarkMode } from './common/hooks/theme';
import styles from './tailwind.css';
import { ThemeCtx } from './ThemeContext';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700;800;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap',
    },
    { rel: 'stylesheet', href: styles },
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Kevin Carlos',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const [themeMode, setThemeMode] = useDarkMode();

  return (
    <html lang="en" className="h-full w-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full w-full bg-theme-white dark:bg-theme-black font-body overflow-hidden">
        <ThemeCtx.Provider value={{ mode: themeMode, setMode: setThemeMode }}>
          <Outlet />
        </ThemeCtx.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
