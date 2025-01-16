import {test, expect , Locator} from '@playwright/test';


test('redirect test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/redirector');
    const redirectButton: Locator = page.locator('#redirect');

    // Click the redirect button and assert that the URL has changed
    await redirectButton.click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes');
})