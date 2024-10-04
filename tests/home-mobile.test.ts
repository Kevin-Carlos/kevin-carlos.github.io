import test, { expect } from '@playwright/test';

test.use({ viewport: { width: 600, height: 800 } });

test('Hamburger Menu displays', async ({ page }) => {
  await page.goto('/');

  const mobileMenu = page.getByRole('button', { name: 'Hamburger Menu' });
  const mobileMenuItems = page.locator('menu').locator('nav');

  await expect(mobileMenu).toBeVisible();
  await mobileMenu.click();

  expect(
    (await mobileMenuItems.getByRole('listitem').all()).length
  ).toBeGreaterThan(0);

  await mobileMenu.click();
  await expect(mobileMenuItems).not.toBeVisible();
});
