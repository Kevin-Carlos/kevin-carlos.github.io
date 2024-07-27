import { ActionFunction, redirect } from '@remix-run/cloudflare';
import { colorSchemeCookie, getColorScheme } from '~/cookies';

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const locationURL = form.get('url');

  const currentColorScheme = await getColorScheme(request);

  const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light';

  return redirect(locationURL as string, {
    headers: {
      'Set-Cookie': await colorSchemeCookie.serialize(newColorScheme),
    },
  });
};
