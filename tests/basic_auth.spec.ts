import {test, expect, Page, Locator} from '@playwright/test';

// Create a seperate function for authentication process
const authenticate = async (page: Page, username: string, password: string) => {
    const base64: string = Buffer.from(`${username}:${password}`).toString('base64');
    await page.setExtraHTTPHeaders({
        'Authorization': `Basic ${base64}`
    })
}


test('basic auth', async ({ page }) => {
    // authentication process
    await authenticate(page, "admin", "admin");

    // navigate to the page
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    // assert that congratulations message is visible
    const authSuccessMessage : Locator = page.locator('css = p');
    await expect(authSuccessMessage).toHaveText('Congratulations! You must have the proper credentials.');
});