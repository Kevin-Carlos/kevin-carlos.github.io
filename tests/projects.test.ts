import { expect, test } from '@playwright/test';

test('Projects functional', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Projects' }).first().click();

  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();

  await expect(
    page.getByText(
      'Sorry, this game is only optimized for larger screens at the moment.'
    )
  ).not.toBeVisible();

  expect((await page.getByRole('listitem').all()).length).toBeGreaterThan(1);

  await test.step('Can navigate to connect 4 project', async () => {
    await page.getByRole('link', { name: 'Connect4 Game' }).click();
    await expect(
      page.getByRole('heading', { name: "player-1's Turn" })
    ).toBeVisible();
  });

  const gameBtn = page.locator('section').getByRole('button');
  const resetBtn = page.getByRole('button', { name: 'Reset' });

  const winner = page.getByRole('heading', { name: 'Player-1 has won!' });

  await test.step('Connect 4, game can be won vertically', async () => {
    for (let i = 0; i < 4; i++) {
      // Player 1 gets the first column
      await gameBtn.first().click();

      // Because player 1 will win before player 2 can click again
      if (i < 3) {
        // Player 2 gets the second column
        await gameBtn.nth(1).click();
      }
    }

    await expect(winner).toBeVisible();
    await resetBtn.click();
  });

  await test.step('Connect 4, game can be won horizontally', async () => {
    /**
     * [_ _ _ _ _ _ _]
     * [_ _ _ _ _ _ _]
     * [o _ _ _ _ _ _]
     * [o _ _ _ _ _ _]
     * [o _ _ _ _ _ _]
     * [x x x x _ _ _]
     */
    await gameBtn.first().click(); // Player 1 x
    await gameBtn.first().click(); // Player 2 o

    await gameBtn.nth(1).click(); // Player 1 x
    await gameBtn.first().click(); // Player 2 o

    await gameBtn.nth(2).click(); // Player 1 x
    await gameBtn.first().click(); // Player 2 o

    await gameBtn.nth(3).click(); // Player 1 x

    await expect(winner).toBeVisible();
    await resetBtn.click();
  });

  await test.step('Connect 4, game can be won diagonally', async () => {
    /**
     * [_ _ _ _ _ _ _]
     * [_ _ _ _ _ _ _]
     * [_ _ _ x _ _ _]
     * [_ _ x x _ _ _]
     * [_ x o o _ _ _]
     * [x o o x o _ _]
     */
    await gameBtn.nth(0).click(); // Player 1 x
    await gameBtn.nth(1).click(); // Player 2 o

    await gameBtn.nth(1).click(); // Player 1 x
    await gameBtn.nth(2).click(); // Player 2 o

    await gameBtn.nth(3).click(); // Player 1 x
    await gameBtn.nth(2).click(); // Player 2 o

    await gameBtn.nth(2).click(); // Player 1 x
    await gameBtn.nth(3).click(); // Player 2 o

    await gameBtn.nth(3).click(); // Player 1 x
    await gameBtn.nth(4).click(); // Player 2 o

    await gameBtn.nth(3).click(); // Player 1 x

    await expect(winner).toBeVisible();
    await resetBtn.click();
  });
});
