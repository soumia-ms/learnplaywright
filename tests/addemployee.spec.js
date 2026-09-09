import { test, expect } from '@playwright/test';

test('Verify add Employee with Basic details', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Mia');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('S');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'O+' }).click();
  await page.locator('form').filter({ hasText: 'Blood TypeO+Test_Field Save' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
});