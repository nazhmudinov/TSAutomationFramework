import {test, expect, Locator} from '@playwright/test';

test('Context Menu', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    
    // In order to modify default playwright dialog handling , we need to add a listener to the page
    page.on('dialog', dialog => console.log(dialog.message()));
    page.on('dialog', dialog => dialog.accept());

    // Perfom the right click on the box
    const box: Locator = page.locator('#hot-spot');
    await box.click({ button: 'right' });
});
