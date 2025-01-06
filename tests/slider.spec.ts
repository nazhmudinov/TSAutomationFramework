import { test, expect, Locator } from '@playwright/test';

test('slider test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/horizontal_slider');

    const slider: Locator = page.locator('input[type="range"]');
    const sliderValue: Locator = page.locator('#range');

    // Move the slider to the right by 50 percent of its width
    await slider.click({ position: { x: 100, y: 0 } });
    expect(await sliderValue.innerText()).toBe('4');
})