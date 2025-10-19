TS Automation Framework

A TypeScript-based automation framework for end-to-end and integration tests.
Designed to be modular, tested, and easy to extend for web UI or API automation.

Features

TypeScript-first test code and utilities
Configurable test runner (Playwright / Puppeteer / Cypress / Jest) — replace placeholders as needed
Page Object Model structure and reusable helpers
Built-in fixtures and test data management
CLI commands for running tests, building types, and reporting
CI-friendly configuration (GitHub Actions example included)
Quick start

Prerequisites

Node.js >= 18 (or specify LTS you use)
npm or pnpm or yarn
(Optional) Docker for consistent environments
Install

Clone the repo: git clone https://github.com/nazhmudinov/TSAutomationFramework.git
Install dependencies: npm install
or

pnpm install

yarn install

Configuration

Copy the example env/config files and edit: cp .env.example .env cp config/example.config.ts config/config.ts
Common settings:
BASE_URL — target application base URL
TEST_TIMEOUT — per-test timeout
BROWSER — chrome/firefox/webkit (if using Playwright)
Scripts

npm run build — compile TypeScript
npm run test — run the test suite (default)
npm run test:ci — run tests in CI mode (headless, minimal output)
npm run lint — run ESLint
npm run format — run Prettier
npm run test:watch — run tests in watch mode (local dev)
Example usage

Run all tests: npm run test
Run a single test file: npx vitest run tests/example.spec.ts
or the runner you use: npx playwright test tests/example.spec.ts

Generate a test report (example for Playwright): npx playwright show-report
Project layout (suggested)

src/
tests/ — test specs
pages/ — page objects
fixtures/ — test fixtures and data
utils/ — helpers and utilities
config/ — environment and runner config
scripts/ — helper scripts (start servers, seed data)
.github/workflows/ — CI workflows (GitHub Actions)
Best practices

Use Page Object Model for UI interactions
Keep tests deterministic and independent
Use environment variables for secrets and CI differences
Keep test data small and reset state between tests
CI (GitHub Actions) example (summary)

Workflow runs on push and PR against main
Uses Node setup action
Installs dependencies, runs lint, build, then tests in headless mode
Uploads test artifacts and reports
Contributing

Fork the repo and open a PR with a clear description and tests
Run lint and tests locally before submitting
Follow commit message conventions (optional: Conventional Commits)
Troubleshooting

Update drivers/browsers: e.g., npx playwright install
Increase timeouts if tests fail due to slow environments
Inspect CI logs and attach screenshots/trace where possible
License Specify a license (e.g., MIT). If you want, I can add a LICENSE file.

Authors

nazhmudinov — maintainer
Acknowledgements

List libraries and tools used (Playwright, Jest, ts-node, etc.)
Placeholders to fill

Test runner and specific commands (Playwright, Cypress, etc.)
Exact Node version
Any repo badges (build, coverage, npm version)
CI workflow file (I can create one if you want)
