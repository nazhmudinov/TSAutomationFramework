import {test, expect, Locator} from '@playwright/test';


test.describe('Dynamic Controls', () => {
    // This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously.

    let checkbox: Locator;
    let removeButton: Locator;
    let addButton: Locator;
    let input: Locator;
    let enableButton: Locator;
    let disableButton: Locator


    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
        checkbox = page.getByRole('checkbox');
        removeButton = page.getByRole('button', { name: 'Remove' });
        addButton = page.getByRole('button', { name: 'Add' });
        input = page.getByRole('textbox');
        enableButton  = page.getByRole('button', { name: 'Enable' });
        disableButton = page.getByRole('button', { name: 'Disable' });
    })

    test('Add/ Remove Async Elements', async ({ page }) => {
         // Remove checkbox and see if the correct text is displayed and checkbox is removed
        await removeButton.click();
        await expect(page.getByText('It\'s gone!')).toBeVisible();
        expect(checkbox).not.toBeVisible();
    
        // Add back the checkbox
        await addButton.click();
        await expect(page.getByText('It\'s back!')).toBeVisible();
        expect(checkbox).toBeVisible();
    })
    test('Dynamic Controls - Input', async ({ page }) => {
        // Enable the input field and assert that the correct text is displayed and the input field is enabled
        await enableButton.click();
        await expect(page.getByText('It\'s enabled!')).toBeVisible();
        expect(input).toBeEnabled();

        // Disable the input field and assert that the correct text is displayed and the input field is disabled
        await disableButton.click();
        await expect(page.getByText('It\'s disabled!')).toBeVisible();
        expect(input).toBeDisabled();
    })
    
    test('Dynamic Controls - Loader', async ({ page }) => {
        const loader: Locator = page.locator('css = img[src="/img/ajax-loader.gif"]')
        await removeButton.click();
        await expect(loader).toBeVisible();
    })
    
})




