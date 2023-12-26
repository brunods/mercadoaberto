import { test, expect } from '@playwright/test';
import { register } from './utils';

test('register', async ({ browser }) => {
    const { page } = await register(browser);
    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText('Você está logado')).toBeVisible();
});

// test('login', async ({ page, browser }) => {
//     const { credentials } = await register(browser);

//     await page.goto(`/`);
//     await page.getByRole('link', { name: 'Log in' }).click();
//     await page.getByLabel('Email').fill(credentials.email);
//     await page.getByLabel('Password').fill(credentials.password);
//     await page.getByRole('button', { name: 'Log in' }).click();
//     await expect(page).toHaveURL('/dashboard');
//     await expect(page.getByText('Você está logado')).toBeVisible();
// });
