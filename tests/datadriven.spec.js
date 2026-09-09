import { test, expect } from '@playwright/test';


let FirstName = ['Mia', 'Soumia', 'Sumiya', 'Sumi', 'Sumitha'];
let LastName = ['S', 'Test', 'Test1', 'Test2', 'Test3'];
let EmployeeId = ['123', '456', '789', '101', '112'];

test('Add Employees to the PIM Module', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();

  for (let i = 0; i < FirstName.length; i++) {

  await page.getByRole('link', { name: 'Add Employee' }).click();
//   await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(FirstName[i]);
//   await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(LastName[i]);
  await page.getByRole('textbox').nth(4).fill(EmployeeId[i]);
  await page.getByRole('button', { name: 'Save' }).click();
  }
});