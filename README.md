# Catawiki Test Automation Project

E2E test automation framework for Catawiki using Playwright with Page Object Model design pattern.

## 🎯 Project Overview

This project contains automated tests for the Catawiki platform (https://www.catawiki.com/en) covering various user flows without authentication.

## 📋 Test Structure

### Test Organization

The tests are organized into separate spec files for better readability and maintainability:

- **`tests/task-test.spec.js`** - Contains the main test scenario described in the task requirements (search for train, verify lot details)
- **`tests/without-sign-in-tests.spec.js`** - Contains additional UI tests:
  - Browse categories
  - Search with no results
  - Filter and sort search results
  - Unsuccessful login with invalid credentials

> **Note:** The test described in the original task was moved to a separate class (`task-test.spec.js`) for better readability and isolation. The remaining tests are organized in the `without-sign-in-tests.spec.js` class.

### Page Object Model Structure

The project follows the POM design pattern with all page objects located in `tests/pages/`:

```
tests/
├── fixtures/
│   └── base.fixture.js          # Shared setup/teardown fixture
├── pages/
│   ├── auth.page.js              # Authentication page objects
│   ├── categories.page.js        # Category navigation
│   ├── filters.page.js           # Search filters
│   ├── lotDetails.page.js        # Lot details extraction
│   └── search.page.js            # Search functionality
├── task-test.spec.js             # Main task test
└── without-sign-in-tests.spec.js # Additional UI tests
```

**Key Features:**
- **Selector Constants:** Static selectors exported as constants (e.g., `SEARCH_INPUT`)
- **Action Functions:** Reusable functions for complex workflows (e.g., `search()`, `attemptLogin()`)
- **No Duplication:** Shared setup/teardown via Playwright fixtures
- **Clean Tests:** Test specs focus on business logic, not implementation details

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Allure CLI for reporting (optional, but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd catawiki-test-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Allure CLI (for reporting)**
   
   On macOS:
   ```bash
   brew install allure
   ```
   
   On Windows (using Scoop):
   ```bash
   scoop install allure
   ```
   
   Verify installation:
   ```bash
   allure --version
   ```

### Install Playwright Browsers

```bash
npx playwright install
```

## 🧪 Running Tests

### Run All Tests
```bash
npm run test:all
```

### Run Specific Test Suites
```bash
npm run test:task     # Run task-test.spec.js only
npm run test:ui       # Run without-sign-in-tests.spec.js only
```

### Run with Browser UI (Headed Mode)
```bash
npm run test:headed
```

### Debug Tests
```bash
npm run test:debug
```

### Run Tests and Generate Report
```bash
npm run test:report
```
This command will:
1. Run all tests
2. Generate Allure report
3. Open the report in your browser

## 📊 Test Reporting

### Generate Allure Report

After running tests, generate and view the Allure report:

```bash
npm run report
```

Or generate and view separately:
```bash
npm run allure:report    # Generate report
npm run allure:open      # Open in browser
```

### HTML Report

Playwright also generates an HTML report automatically:
```bash
npx playwright show-report
```

### Report Features

The Allure report includes:
- ✅ Test execution history and trends
- 📊 Statistics (passed, failed, skipped)
- 🔴 Detailed failure information
- 📸 Screenshots on failure
- 🎥 Video recordings on failure
- 📝 Test steps and descriptions
- ⏱️ Execution duration metrics

## 📁 Project Structure

```
catawiki-test-project/
├── tests/
│   ├── fixtures/
│   │   └── base.fixture.js           # Shared test fixtures
│   ├── pages/
│   │   ├── auth.page.js              # Login/authentication POMs
│   │   ├── categories.page.js        # Category browsing POMs
│   │   ├── filters.page.js           # Search filter POMs
│   │   ├── lotDetails.page.js        # Lot details POMs
│   │   └── search.page.js            # Search functionality POMs
│   ├── task-test.spec.js             # Main task test suite
│   └── without-sign-in-tests.spec.js # Additional test suite
├── playwright.config.js               # Playwright configuration
├── package.json                       # Dependencies and scripts
├── .gitignore                         # Git ignore rules
├── ALLURE_SETUP.md                    # Allure setup guide
└── README.md                          # This file
```

### Environment Variables

No environment variables required. All settings are in `playwright.config.js`.

## 🛠️ Best Practices Implemented

1. **Page Object Model (POM):** All page interactions abstracted into reusable functions
2. **DRY Principle:** No code duplication; shared fixtures for setup/teardown
3. **Explicit Waits:** No `waitForLoadState('networkidle')`; using explicit element state checks
4. **Selector Constants:** Static selectors as constants for easy maintenance
5. **Test Isolation:** Each test is independent with proper cleanup
6. **Clear Test Structure:** Arrange-Act-Assert pattern
7. **Meaningful Names:** Descriptive function and variable names
8. **Comprehensive Reporting:** Multiple report formats (HTML, Allure)


## 📝 Test Scenarios

### Task Test (task-test.spec.js)

1. **Search for train**
   - Navigate to homepage
   - Search for "train"
   - Verify search results page
   - Open second lot from results
   - Verify lot details page
   - Extract and log lot information (name, favorites, current bid)

### Additional Tests (without-sign-in-tests.spec.js)

1. **Browse categories**
   - Open categories modal
   - Navigate to "Archaeology & Natural History"
   - Verify category page loads

2. **Search with no results**
   - Search with invalid input (spaces)
   - Verify "No matches" message

3. **Filter and sort search results**
   - Search for "car"
   - Apply category filter
   - Verify results count decreases

4. **Unsuccessful login**
   - Attempt login with invalid credentials
   - Verify error message

## 🤝 Contributing

When adding new tests:
1. Follow the existing POM structure
2. Add selectors as constants in appropriate page files
3. Create reusable action functions for common workflows
4. Write clear test descriptions
5. Ensure proper cleanup using the base fixture

## 👥 Author

**Oleksandr Parkhomenko**