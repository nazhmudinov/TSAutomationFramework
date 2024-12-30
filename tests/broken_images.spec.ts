import {test, Locator} from '@playwright/test';

test('Broken Images', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');

    // Wait for images to load 
    await page.waitForLoadState('domcontentloaded');

    // Get the list of all images and their src attributes
    const images : Locator = page.locator('img');
    const imageSrcs: Array<string | null> = await images.evaluateAll((imgs) => {
        return imgs.map((img) => img.getAttribute('src'));
    });

    // Create an empty array to store broken URLs
    const brokenURLs : Array<string> = [];

    // Send requests for each image and if status code is 404 then image is broken
    for (const src of imageSrcs) {
        if (src) {
            const response = await page.request.get(`https://the-internet.herokuapp.com/${src}`) 

            // If an image is broken , add it to the brokenURLs array and print it
            if (!response.ok()) {
                brokenURLs.push(src)
            }
        }
    }

    // Print the list of broken URLs
    console.log(`Broken images: ${brokenURLs}`);
});