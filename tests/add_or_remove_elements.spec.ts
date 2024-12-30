import { test, expect, Locator } from '@playwright/test';

test('Add/Remove Elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  const addElementButton: Locator = page.getByRole('button', { name: 'Add Element' });
  const removeElementButton: Locator = page.getByRole('button', { name: 'Delete' });

  await addElementButton.click();
  // check that the button is visible
  expect(removeElementButton).toBeVisible();
  
  await removeElementButton.click();
  // check that the button is not visible
  expect(removeElementButton).not.toBeVisible();
});
