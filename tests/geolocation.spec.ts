import { test, expect, Locator } from '@playwright/test';


test('geolocation test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/geolocation');

    const context = page.context()
    await context.setGeolocation({ longitude: 12.492507, latitude: 41.889938 });

    const whereAmIButton: Locator = page.getByText('Where am I?')
    const latitude: Locator = page.locator('#lat-value')
    const longitude: Locator = page.locator('#long-value')

    await whereAmIButton.click()
    await expect(longitude).toHaveText('12.492507')
    await expect(latitude).toHaveText('41.889938')
})