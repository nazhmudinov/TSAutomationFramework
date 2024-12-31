import {test, expect, Locator} from '@playwright/test';

test('Drag and Drop', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    
    const columns: Locator = page.locator('.column');
    const source: Locator = page.locator('#column-a');
    const target: Locator = page.locator('#column-b');
    
    // Drag and Drop element
    await source.dragTo(target);

    // Assert that first element is in the second column
    expect(await columns.nth(0).textContent()).toBe('B');
    expect(await columns.nth(1).textContent()).toBe('A');
}); 