async function waitForElement(page, selector, timeout = 30000) {
  await page.waitForSelector(selector, { state: 'visible', timeout });
  return page.locator(selector);
}

async function clickElement(page, selector, options = {}) {
  const locator = page.locator(selector);
  await locator.waitFor({ state: 'visible', timeout: options.timeout || 30000 });
  await locator.click({ force: options.force || false, timeout: options.timeout || 30000 });
  return locator;
}

async function fillField(page, selector, value, options = {}) {
  const locator = page.locator(selector);
  await locator.waitFor({ state: 'visible', timeout: options.timeout || 30000 });

  if (options.clear !== false) {
    await locator.clear();
  }

  await locator.fill(String(value));
  return locator;
}

async function typeText(page, selector, value, options = {}) {
  const locator = page.locator(selector);
  await locator.waitFor({ state: 'visible', timeout: options.timeout || 30000 });
  await locator.type(String(value), { delay: options.delay || 0 });
  return locator;
}

async function getText(page, selector) {
  const locator = page.locator(selector);
  await locator.waitFor({ state: 'visible', timeout: 30000 });
  return locator.innerText();
}

async function scrollToElement(page, selector) {
  const locator = page.locator(selector);
  await locator.scrollIntoViewIfNeeded();
  return locator;
}

module.exports = {
  waitForElement,
  clickElement,
  fillField,
  typeText,
  getText,
  scrollToElement,
};
