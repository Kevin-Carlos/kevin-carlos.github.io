import { createCookie } from '@remix-run/cloudflare';

// Create a cookie to track color scheme state
export const colorSchemeCookie = createCookie('color-scheme');

// Helper function to get the value of the color scheme cookie
export const getColorSchemeToken = async (request: Request) =>
  await colorSchemeCookie.parse(request.headers.get('Cookie'));

export const getColorScheme = async (
  request: Request,
): Promise<'light' | 'dark'> => {
  // Manually selected theme
  const userSelectedColorScheme = await getColorSchemeToken(request);

  // System preferred color scheme header
  const systemPreferredColorScheme = request.headers.get(
    'Sec-CH-Prefers-Color-Scheme',
  );

  // Return the manually selected theme
  // or system preferred theme or default theme
  return userSelectedColorScheme ?? systemPreferredColorScheme ?? 'light';
};
