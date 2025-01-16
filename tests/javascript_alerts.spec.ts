import {test, expect, Locator} from '@playwright/test'


test.describe('JavaScript Alerts', () => {
    let result: Locator

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        result = page.locator('#result')
    });

    test('Test JS Alert', async ({ page }) => {
        // Register the dialog first
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        });

        // Click the button
        const alertButton: Locator = page.locator('//button[text()="Click for JS Alert"]');
        await alertButton.click();
    
        // Verify the result
        const resultText = await result.textContent();
        expect(resultText).toBe('You successfully clicked an alert');
    });

    test('Test JS Confirm (Accept)', async ({ page }) => {
        // Register the dialog first
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.accept();
        });

        // Click the button
        const alertButton: Locator = page.locator('//button[text()="Click for JS Confirm"]');
        await alertButton.click();
    

        // Verify the result
        const resultText = await result.textContent();
        expect(resultText).toBe('You clicked: Ok');
    });
    
    test('Test JS Confirm (Dismiss)', async ({ page }) => {
        // Register the dialog first
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.dismiss();
        });

        // Click the button
        const alertButton: Locator = page.locator('//button[text()="Click for JS Confirm"]');
        await alertButton.click();
    
        // Verify the result
        const resultText = await result.textContent();
        expect(resultText).toBe('You clicked: Cancel');
    });
    
    test('Test JS Prompt', async ({ page }) => {
        // Register the dialog first
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS prompt');
            await dialog.accept('Test Input');
        });

        // Click the button
        const alertButton: Locator = page.locator('//button[text()="Click for JS Prompt"]');
        await alertButton.click();
    
        // Verify the result
        const resultText = await result.textContent();
        expect(resultText).toBe('You entered: Test Input');
    });
})




