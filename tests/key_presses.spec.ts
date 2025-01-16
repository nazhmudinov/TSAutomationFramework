import {test, expect, Locator} from '@playwright/test';


test('key press test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    const input: Locator = page.locator('#target');
    const result: Locator = page.locator('#result');

    // Press the Tab key and verify that correct text is displayed
    page.keyboard.press('Tab');
    expect(await result.textContent()).toBe('You entered: TAB');

    // Press the Tab key and verify that input is focused
    page.keyboard.press('Tab');
    await expect(input).toBeFocused();
})