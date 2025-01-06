import {test, expect, Locator} from '@playwright/test';


test('Infinite Scroll', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/infinite_scroll');

  // Set the target number of paragraphs to load
  const targetNum : number = 3; 
  const paragraph: Locator = page.locator('.jscroll-added');

  while (await paragraph.count() < targetNum) {
    // Scroll to load more content
    await page.mouse.wheel(0, 100);
  }

  // Verify the expected number of paragraphs are loaded
  const totalParagraphs = await paragraph.count();
  expect(totalParagraphs).toBeGreaterThanOrEqual(targetNum);

  // Print the total number of paragraphs
  console.log(`Loaded ${totalParagraphs} paragraphs`);
});
