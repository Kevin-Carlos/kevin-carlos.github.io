import { expect, test } from '@playwright/experimental-ct-react';
import { PillButton } from '../pill-button';

test('Button', async ({ mount }) => {
  const btn = await mount(
    <PillButton className="text-theme-white bg-theme-black">Test</PillButton>
  );

  await expect(btn).toBeVisible();
  await expect(btn).toContainText('Test');

  await btn.focus();
  await expect(btn).toHaveCSS('outline', 'rgb(43, 77, 89) solid 2px');
});
