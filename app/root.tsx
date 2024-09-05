import type { HeadersFunction, LoaderFunction } from '@remix-run/cloudflare';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
} from '@remix-run/react';
import clsx from 'clsx';
import { useState } from 'react';
import { RouterProvider } from 'react-aria-components';
import { Header } from './common/layout/header/header';
import { getColorScheme } from './cookies';
import './tailwind.css';
import { ThemeCtx } from './ThemeContext';

declare module 'react-aria-components' {
  interface RouterConfig {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    routerOptions: any;
  }
}

type Loader = {
  colorScheme: Awaited<ReturnType<typeof getColorScheme>>;
};

export const headers: HeadersFunction = () => ({
  'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
});

export const loader: LoaderFunction = async ({ request }) => {
  const cs = await getColorScheme(request);

  return { colorScheme: cs } satisfies Loader;
};

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700;800;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap',
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  const loader = useLoaderData() as Loader | undefined;

  const [mode, setMode] = useState(loader?.colorScheme);

  const navigate = useNavigate();

  return (
    <html
      lang='en'
      className={clsx(
        mode === 'dark' ? 'dark' : '',
      )}
    >
      <head>
        <title>Kevin Carlos</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='m-0 font-body dark:bg-theme-black bg-theme-white grid grid-rows-[56px_1fr_40px] h-[100vh]'>
        <ThemeCtx.Provider
          value={{ mode: mode ?? 'light', setMode: (m) => setMode(m) }}
        >
          <RouterProvider navigate={navigate}>
            <Header />
            {children}
          </RouterProvider>
        </ThemeCtx.Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
