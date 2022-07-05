import {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { useContext, useEffect } from 'react';
import { useDarkMode } from './common/hooks/theme';
import { getColorScheme } from './cookies';
import { ClientStyleContext, styled } from './stitches';
import { ThemeCtx } from './ThemeContext';

// className="h-full w-full bg-theme-white dark:bg-theme-black font-body overflow-hidden"
const Body = styled('body', {
  height: '100%',
  width: '100%',
  fontFamily: '$body',
  overflow: 'hidden',
  backgroundColor: '$body',
});

export const headers: HeadersFunction = () => ({
  'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
});

export const loader: LoaderFunction = async ({ request }) => {
  const cs = await getColorScheme(request);

  console.log('COLOR SHCEME', cs);

  return { colorScheme: cs };
};

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
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Kevin Carlos',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const { colorScheme } = useLoaderData();

  const [themeMode, setThemeMode] = useDarkMode();

  useEffect(() => {
    setThemeMode(colorScheme);
  }, [colorScheme]);

  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEffect(() => {
    // reset cache to re-apply global styles
    clientStyleData.reset();
  }, [clientStyleData]);

  return (
    <html lang="en" style={{ height: '100%', width: '100%' }}>
      <head>
        <Meta />
        <Links />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: clientStyleData.sheet }}
          suppressHydrationWarning
        />
      </head>
      <Body className={colorScheme}>
        <ThemeCtx.Provider value={{ mode: themeMode, setMode: setThemeMode }}>
          <Outlet />
        </ThemeCtx.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </Body>
    </html>
  );
}
