import { expect, test } from '@playwright/test';

test('homepage has dark mode demo section and dark mode button', async ({
  page,
}) => {
  await page.goto('http://localhost:9999/');

  const body = page.locator('body');

  // Click dark mode button
  await page.locator('[data-test-id=color-scheme-toggle]').click();

  // Assert body has class "dark"
  expect(await body.getAttribute('class')).toContain('dark');

  // Click dark mode button
  await page.locator('[data-test-id=color-scheme-toggle]').click();

  // Assert body doesn't have class "dark"
  expect(await body.getAttribute('class')).not.toContain('dark');

  // Click demo dark mode button
  await page.locator('[data-test-id=demo-color-scheme-toggle]').click();

  // Assert body has class "dark"
  expect(await body.getAttribute('class')).toContain('dark');

  // Click demo dark mode button
  await page.locator('[data-test-id=demo-color-scheme-toggle]').click();

  // Assert body doesn't have class "dark"
  expect(await body.getAttribute('class')).not.toContain('dark');
});

test('homepage has github button and link to react-template repository', async ({
  page,
}) => {
  await page.goto('http://localhost:9999/');

  const [popup] = await Promise.all([
    // It is important to call waitForEvent before click to set up waiting.
    page.waitForEvent('popup'),
    // Click github button
    page.locator('[data-test-id=github-link]').click(),
  ]);
  // Assert url is https://github.com/DuckyMomo20012/react-template
  expect(popup.url()).toBe('https://github.com/DuckyMomo20012/react-template');
});
