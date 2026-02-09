# Catawiki Test Project - Allure Reporting Setup

## Prerequisites

### Install Allure CLI

**On macOS (using Homebrew):**
```bash
brew install allure
```

**On Windows (using Scoop):**
```bash
scoop install allure
```

**On Linux:**
```bash
# Download and extract from https://github.com/allure-framework/allure2/releases
# Or use package manager specific to your distribution
```

Verify installation:
```bash
allure --version
```

## Running Tests

### Run all tests
```bash
npm run test:all
```

### Run specific test suites
```bash
npm run test:task    # Run task-test.spec.js only
npm run test:ui      # Run without-sign-in-tests.spec.js only
```

### Basic test run (default Playwright config)
```bash
npm test
```

### Run tests with UI (headed mode)
```bash
npm run test:headed
```

### Debug tests
```bash
npm run test:debug
```

### Run all tests and generate report
```bash
npm run test:report
```

This command will:
1. Run all tests in the tests/ directory
2. Generate the Allure report
3. Open the report in your browser

## Allure Reporting

### Generate and view Allure report
```bash
npm run report
```

This command will:
1. Generate the Allure report from test results
2. Open the report in your default browser

### Steps to generate report manually:

1. **Generate the report**
   ```bash
   npm run allure:report
   ```

2. **Open the report**
   ```bash
   npm run allure:open
   ```

## Report Details

The Allure report includes:
- ✅ Test execution history
- 📊 Test statistics and trends
- 🔴 Failed test details with screenshots/videos
- 📝 Test descriptions and steps
- ⏱️ Test duration metrics
- 🎯 Test severity and status

## Configuration

Allure reporting is configured in `playwright.config.js`:
- Reporter: `allure-playwright`
- Results stored in: `allure-results/`
- Report generated to: `allure-report/`

Both directories are added to `.gitignore` to keep repositories clean.

## Notes

- Screenshots and videos are captured on-failure for failed tests
- Traces are captured on first retry for debugging
- Full HTML reports are also generated in `playwright-report/`
