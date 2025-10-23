import { expect, test} from '@playwright/test';

test('adding snacks', async ({ page }) => {
    await page.goto('http://localhost:4201/snacks');

    await page.getByPlaceholder('De snacknaam graag').fill('McChicken vanaf Playwright')
    await page.getByPlaceholder('De kcals graag').fill('465')
    await page.getByPlaceholder('Een URL van de snack graag').fill('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmcd.lt%2Fwp-content%2Fuploads%2F2019%2F07%2FMcD_web2021_McChicken-1024x693.png&f=1&nofb=1&ipt=7f5eb8730e4f4fbeff81ba2a8f3b9fb6181773deab60bb8e3f613a03093ddd60')
    await page.getByRole('button', { name: 'Voeg snack reactive toe'}).click();

    await expect(page.getByRole('table')).toContainText('McChicken vanaf Playwright');
});

// await page.goto('http://localhost:4201/snacks');
// await page.getByRole('link', { name: 'Signals' }).click();
// await page.getByRole('button', { name: 'Increment' }).click();
// await expect(page.locator('app-signals')).toContainText('11664');

test('snapshot testing / visual comparison testing',async ({ page }) => {
    await page.goto('http://localhost:4201/snacks');

    // page.locator('form').screenshot();
    await expect(page).toHaveScreenshot();
});