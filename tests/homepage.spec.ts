import { expect, test } from '@playwright/test';

test('homepage has dark mode demo section', async ({ page }) => {
  await page.goto('http://localhost:9999/');

  const html = page.locator('html');

  // Click demo dark mode button
  await page.locator('[data-test-id=demo-color-scheme-toggle]').click();

  // Assert body has class "dark"
  expect(await html.getAttribute('data-mantine-color-scheme')).toContain(
    'dark',
  );

  // Click demo dark mode button
  await page.locator('[data-test-id=demo-color-scheme-toggle]').click();

  // Assert body doesn't have class "dark"
  expect(await html.getAttribute('data-mantine-color-scheme')).not.toContain(
    'dark',
  );
});
