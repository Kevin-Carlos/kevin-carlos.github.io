import test, { expect } from '@playwright/test';

test.use({ viewport: { width: 600, height: 800 } });

test('Warning message displays', async ({ page }) => {
  await page.goto('/projects/connect-4');

  await expect(
    page.getByText(
      'Sorry, this game is only optimized for larger screens at the moment.'
    )
  ).toBeVisible();
});
