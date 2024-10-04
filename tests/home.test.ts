import { expect, test } from '@playwright/test';

test('Homepage functional', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('button', { name: 'Hamburger Menu' })
  ).not.toBeVisible();

  await test.step('Header displays', async () => {
    await expect(
      page.getByRole('heading').filter({ hasText: 'Kevin Carlos' })
    ).toBeVisible();
  });

  await test.step('Dark / Light Mode', async () => {
    await expect(page.locator('html')).toHaveClass('');

    await page.getByRole('button', { name: 'dark mode' }).click();

    await expect(page.locator('html')).toHaveClass('dark');

    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      'rgb(1, 38, 48)'
    );
  });
});
