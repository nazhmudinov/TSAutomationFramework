import {test, expect, Locator} from '@playwright/test';


test('Upload File', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');

    const fileUpload: Locator = page.locator('#file-upload');
    const uploadButton: Locator = page.locator('#file-submit');
    const uploadedFiles: Locator = page.locator('#uploaded-files')

    // Upload a file
    await fileUpload.setInputFiles({
        name: 'test.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('This is a test file')
    });

    // Click the upload button
    await uploadButton.click();

    // Assert that the file was uploaded successfully
    await expect(page.getByText('File Uploaded!')).toBeVisible();
    await expect(uploadedFiles).toContainText('test.txt');

})