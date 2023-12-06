import { faker } from "@faker-js/faker";
import { Browser } from "@playwright/test";

export const register = async (browser: Browser) => {
    const credentials = {
        email: faker.internet.email().toLowerCase(),
        password: faker.internet.password(),
    };

    const page = await browser.newPage();
    await page.goto(`/`);
    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByLabel('Name').fill(faker.person.fullName());
    await page.getByLabel('Email').fill(credentials.email);
    await page.getByLabel('Password', { exact: true }).fill(credentials.password);
    await page.getByLabel('Confirm Password').fill(credentials.password);
    await page.getByRole('button', { name: 'Register' }).click();

    return { credentials, page };
};
