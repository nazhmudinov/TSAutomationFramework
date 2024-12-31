import {Locator, test} from '@playwright/test';


test('Entry Ad', async ({ page }) => {

    //Displays an ad on page load.
    await page.goto('https://the-internet.herokuapp.com/entry_ad');

    const modalText: Locator = page.locator('.modal-body').locator('p');
    const modalCloseBtn: Locator = page.locator('.modal-footer').getByText('Close')

    // Print out modal text and after close the modal
    console.log(await modalText.textContent())
    await modalCloseBtn.click();
})