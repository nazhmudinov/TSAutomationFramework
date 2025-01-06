import { test, expect, Locator } from '@playwright/test';


test('login test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    const username: Locator = page.locator('#username')
    const password: Locator = page.locator('#password')
    const loginButton: Locator = page.locator('button[type="submit"]')
    const logoutButton: Locator = page.locator('a[href="/logout"]')
    const successMessage: string = 'Welcome to the Secure Area. When you are done click logout below.'
    const flashSucessMessage: Locator = page.locator('.flash.success')

    await username.fill('tomsmith')
    await password.fill('SuperSecretPassword!')
    await loginButton.click()

    await expect(page.getByText(successMessage)).toBeVisible()
    await logoutButton.click()
    await expect(flashSucessMessage).toBeVisible()
})