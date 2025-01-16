import {test, expect, Page, Locator, Browser, BrowserContext} from '@playwright/test';

// Create a seperate function for authentication process
// const authenticate = async (page: Page, username: string, password: string) => {
//     const base64: string = Buffer.from(`${username}:${password}`).toString('base64');
//     await page.setExtraHTTPHeaders({
//         'Authorization': `Basic ${base64}`
//     })
// }

const authenticate = async (browser: Browser, username: string, password: string): Promise<BrowserContext> => {
    const context = await browser.newContext({
      httpCredentials: {
        username, // Use the username parameter
        password, // Use the password parameter
      },
    });
  
    // Return the authenticated context
    return context;
  };


test('basic auth', async ({ browser }) => {
    // authentication process
    // await authenticate(page, "admin", "admin");
    const context = await authenticate(browser, 'admin', 'admin');
    const page = await context.newPage();


    // navigate to the page
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    // assert that congratulations message is visible
    const authSuccessMessage : Locator = page.locator('css = p');
    await expect(authSuccessMessage).toHaveText('Congratulations! You must have the proper credentials.');
});