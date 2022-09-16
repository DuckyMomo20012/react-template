import { test, expect } from '@playwright/test';

test('homepage has dark mode demo section and dark mode button', async ({
  page,
}) => {
  // Go to https://my-react-template.netlify.app/
  await page.goto('https://my-react-template.netlify.app/');

  const body = page.locator('body');

  // Click dark mode button
  await page.locator('[data-test-id=color-scheme-toggle]').click();

  // Assert body has class "dark"
  expect(await body.getAttribute('class')).toContain('dark');

  // Click dark mode button
  await page.locator('button').first().click();

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
  // Go to https://my-react-template.netlify.app/
  await page.goto('https://my-react-template.netlify.app/');

  const [popup] = await Promise.all([
    // It is important to call waitForEvent before click to set up waiting.
    page.waitForEvent('popup'),
    // Click github button
    page.locator('[data-test-id=github-link]').click(),
  ]);
  // Assert url is https://github.com/DuckyMomo20012/react-template
  expect(popup.url()).toBe('https://github.com/DuckyMomo20012/react-template');
});
