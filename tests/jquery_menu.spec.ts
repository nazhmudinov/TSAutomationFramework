import {test, expect, Locator} from '@playwright/test';


test('jquery menu test', async ({page}) => {
    // The main goal is to click on the PDF menu item in the jQuery menu

    await page.goto('https://the-internet.herokuapp.com/jqueryui/menu');

    const menu: Locator = page.locator('#menu');
    const enabledMenuItem: Locator = menu.getByText('Enabled');
    const backtoJQueryMenuItem: Locator = menu.getByText('Back to JQuery UI');

    // Hover over the enabled menu item
    await enabledMenuItem.hover();

    // Hover over the Downloads menu item
    await backtoJQueryMenuItem.click();

    // Assert that main page is loaded
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/jqueryui');
})