import { Browser, expect, test } from '@playwright/test';
import { register } from './utils';
import { faker } from '@faker-js/faker';

// const addProduct = async (browser: Browser) => {
//     const { page } = await register(browser);
//     const product = {
//         name: faker.lorem.words(2),
//         description: faker.lorem.sentence(),
//         price: faker.number.float({ min: 1, max: 999999, precision: 2 }).toString(),
//     };

//     await page.getByRole('link', { name: 'Produtos' }).click();
//     await page.getByRole('link', { name: '+ Adicionar' }).click();

//     await page.getByLabel('Nome').fill(product.name);
//     await page.getByLabel('Descrição').fill(product.description);
//     await page.getByLabel('Preço').fill(product.price);

//     await page.getByRole('button', { name: 'Salvar' }).click();

//     return { page, product };
// };

// test('create product', async ({ browser }) => {
//     const { page, product } = await addProduct(browser);

//     await expect(page.getByText(product.name)).toBeVisible();
// });

// test('edit product', async ({ browser }) => {
//     const newProductName = faker.lorem.words(2);
//     const { page, product } = await addProduct(browser);

//     await page.getByLabel(`edit ${product.name}`).click();
//     await page.getByLabel('nome').fill(newProductName);
//     await page.getByRole('button', { name: 'Salvar' }).click();
//     await expect(page.getByText(newProductName)).toBeVisible();
//     await expect(page.getByText(product.name)).not.toBeVisible();
// });

// test('delete product', async ({ browser }) => {
//     const { page, product } = await addProduct(browser);

//     await page.getByLabel(`delete ${product.name}`).click();
//     await page.waitForTimeout(2000);
//     await expect(page.getByLabel(product.name)).not.toBeVisible();
// });
