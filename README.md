# LearnPlaywright

A small Playwright test suite and learning project that demonstrates end-to-end UI testing using Playwright for Node.js. This repository contains example tests for login flows, data-driven scenarios, and adding an employee, useful as a starter template for learning Playwright or building simple automated test suites.

**Project Structure**

- `tests/` - Playwright test files (e.g. `login.spec.js`, `addemployee.spec.js`, `datadriven.spec.js`).
- `testdata/` - Sample test data used by the tests.
- `test-results/` - Output directory for test artifacts and results.
- `playwright-report/` - Generated HTML reports (opened via `npx playwright show-report` or by opening `playwright-report/index.html`).

**Prerequisites**

- Node.js (>= 16)
- npm or yarn

**Install Dependencies**

```bash
npm install
# or
# yarn install
```

**Running Tests**

Run the full test suite:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/login.spec.js
```

Run with headed browser for debugging:

```bash
npx playwright test --headed
```

Generate and open the HTML report:

```bash
npx playwright show-report
# or open the static file: open playwright-report/index.html
```

**Notes & Tips**

- Test files live in the `tests/` folder; update or add new `*.spec.js` files to expand coverage.
- Use `testdata/` to manage fixtures and input values for data-driven tests.
- CI integration: call `npm install` and `npx playwright test` in your CI pipeline. Consider running `npx playwright install --with-deps` on new machines to ensure browsers are installed.

If you want, I can also run the tests locally and open the report — tell me to proceed.

