import {test, expect, Locator} from '@playwright/test';

test('Dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    
    const dropdown: Locator = page.locator('#dropdown');
    await dropdown.selectOption("2");
    
    // Assert that the selected option is "Option 2"
    expect(await dropdown.inputValue()).toBe('2');
});