const { expect } = require('@playwright/test');

async function expectVisible(page, selector, timeout = 30000) {
  await expect(page.locator(selector)).toBeVisible({ timeout });
}

async function expectText(page, text, timeout = 30000) {
  await expect(page.getByText(text, { exact: false })).toBeVisible({ timeout });
}

async function expectURL(page, expectedText, timeout = 30000) {
  await expect(page).toHaveURL(new RegExp(expectedText), { timeout });
}

async function expectContainsText(page, selector, expectedText, timeout = 30000) {
  const locator = page.locator(selector);
  await expect(locator).toContainText(expectedText, { timeout });
}

module.exports = {
  expectVisible,
  expectText,
  expectURL,
  expectContainsText,
};
