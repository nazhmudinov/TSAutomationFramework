import { test, expect, Locator } from '@playwright/test';


test('mouse hover test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');

    const avatar1: Locator = page.locator('.figure').first();

    // Hover over the first avatar
    await avatar1.hover();
    await expect(avatar1.locator('.figcaption')).toBeVisible();
})