import { expect, test } from '@playwright/test';

test('About Me functional', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'About Me' }).first().click();

  const aboutMe = page.getByRole('button', { name: 'Who Am I?' });
  const career = page.getByRole('button', { name: 'Career' });
  const edu = page.getByRole('button', { name: 'Education' });

  await expect(aboutMe).toBeVisible();
  await expect(page.getByText("Hi, I'm Kevin!")).toBeVisible();

  await edu.click();
  await expect(
    page.getByRole('heading', { name: 'University of Nevada, Reno' })
  ).toBeVisible();

  await career.click();
  await expect(page.getByRole('tab', { name: 'Square 8' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Cycle' })).toBeVisible();
});
