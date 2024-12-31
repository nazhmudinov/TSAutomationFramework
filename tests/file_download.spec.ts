import {test, expect} from '@playwright/test';
import path from 'path';


test('File Download', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');

    const downloadPromise = page.waitForEvent('download');
    await page.getByText('apple.txt').click();
    const download = await downloadPromise;

    // Wait for the download process to complete and save the downloaded file in a temp folder
    const downloadPath = path.resolve(__dirname, '../downloads', download.suggestedFilename());
    await download.saveAs(downloadPath);
})
