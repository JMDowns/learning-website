import { expect, test } from '@playwright/test';

// test('about page has expected h1', async ({ page }) => {
// 	await page.goto('/about');
// 	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
// });

test('home page has Welcome text', async ({page}) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit'})).toBeVisible();
});
