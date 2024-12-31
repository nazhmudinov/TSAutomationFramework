import {test, expect, Locator} from '@playwright/test';


test('Checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox_1: Locator = page.getByRole('checkbox').first()
    const checkbox_2: Locator = page.getByRole('checkbox').nth(1)
    
    // Assert current state of checkboxes
    expect(checkbox_1).not.toBeChecked();
    expect(checkbox_2).toBeChecked();

    // Check and uncheck checkboxes
    await checkbox_1.check();
    await checkbox_2.uncheck();
    
    // Assert new state of checkboxes
    expect(checkbox_1).toBeChecked();
    expect(checkbox_2).not.toBeChecked();
});