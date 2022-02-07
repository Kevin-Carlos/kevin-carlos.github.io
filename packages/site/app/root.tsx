import type { MetaFunction } from 'remix';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
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

export const meta: MetaFunction = () => {
  return { title: 'Kevin Carlos' };
};

export default function App() {
  const [themeMode, setThemeMode] = useDarkMode();

  return (
    <html lang="en" className="h-full w-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full w-full bg-theme-white dark:bg-theme-black font-body overflow-hidden">
        <ThemeCtx.Provider value={{ mode: themeMode, setMode: setThemeMode }}>
          <Outlet />
        </ThemeCtx.Provider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
