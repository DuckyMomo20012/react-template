import { expect, test } from '@playwright/test';

test('homepage has dark mode demo section', async ({ page }) => {
  await page.goto('http://localhost:9999/');

  const body = page.locator('body');

  // Click demo dark mode button
  await page.locator('[data-test-id=demo-color-scheme-toggle]').click();

  // Assert body has class "dark"
  expect(await body.getAttribute('class')).toContain('dark');

  // Click demo dark mode button
  await page.locator('[data-test-id=demo-color-scheme-toggle]').click();

  // Assert body doesn't have class "dark"
  expect(await body.getAttribute('class')).not.toContain('dark');
});
