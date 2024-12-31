import {test, Locator, expect} from '@playwright/test';

test('Context Menu', async ({ page }) => {
    /* 
    * Context menu items are custom additions that appear in the right-click menu.
    * Right-click in the box below to see one called 'the-internet'. When you click it, it will trigger a JavaScript alert.
    */ 
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    
    // In order to modify default playwright dialog handling , we need to add a listener to the page and perform the assertion before clicking
    page.on('dialog', dialog => expect(dialog.message()).toContain('You selected a context menu'));
    page.on('dialog', dialog => dialog.accept());

    // Perfom the right click on the box
    const box: Locator = page.locator('#hot-spot');
    await box.click({ button: 'right' });
});
