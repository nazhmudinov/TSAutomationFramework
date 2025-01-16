import {test, expect, Locator} from '@playwright/test'


test('Multiple Windows', async ({ page, browser }) => {
    await page.goto('https://the-internet.herokuapp.com/windows');
    const link : Locator = page.getByRole('link', { name: 'Click Here' });

    // Wait for the new window to open and get its reference
    //Used Promise.all to handle both the popup waiting and link clicking simultaneously
    const [newPage] = await Promise.all([
        // to wait for and capture the new window
        page.context().waitForEvent('page'),
        // page.waitForEvent('popup'),
        link.click()
    ]);

    // assert that new window is opened
    await expect(newPage).toHaveURL('https://the-internet.herokuapp.com/windows/new');
    await expect(newPage).toHaveTitle('New Window');
})