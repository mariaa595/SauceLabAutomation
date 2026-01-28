# Sauce Demo - Cypress E2E Automation

## Project Overview
This project demonstrates end-to-end test automation for the [Sauce Demo](https://www.saucedemo.com/) e-commerce website using Cypress. The test suite covers the complete purchase flow from login to order completion.

## Test Coverage
- Complete purchase flow for single product
- Complete purchase flow for multiple products
- Form validation testing (checkout information)
- Navigation testing (return to products after purchase)

## Project Structure
```
SauceLabAutomation/
├── cypress/
│   ├── e2e/
│   │   └── purchase.cy.js           # Main E2E test suite
│   ├── fixtures/
│   │   └── testData.json            # Test data (credentials, checkout info)
│   ├── support/
│   │   ├── commands.js              # Custom Cypress commands
│   │   ├── e2e.js                   # Support file
│   │   ├── pages/                   # Page Object Models (Actions)
│   │   │   ├── LoginPage.js
│   │   │   ├── ProductsPage.js
│   │   │   ├── CartPage.js
│   │   │   ├── CheckoutPage.js
│   │   │   ├── CheckoutOverviewPage.js
│   │   │   └── CheckoutCompletePage.js
│   │   ├── locators/                # Page Locators (Selectors)
│   │   │   ├── LoginPageLocators.js
│   │   │   ├── ProductsPageLocators.js
│   │   │   ├── CartPageLocators.js
│   │   │   ├── CheckoutPageLocators.js
│   │   │   ├── CheckoutOverviewPageLocators.js
│   │   │   └── CheckoutCompletePageLocators.js
│   │   └── assertions/              # Page Assertions (Validations)
│   │       ├── LoginPageAssertions.js
│   │       ├── ProductsPageAssertions.js
│   │       ├── CartPageAssertions.js
│   │       ├── CheckoutPageAssertions.js
│   │       ├── CheckoutOverviewPageAssertions.js
│   │       └── CheckoutCompletePageAssertions.js
├── cypress.config.js                # Cypress configuration
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd SauceLabAutomation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npx cypress open
```
This opens the Cypress UI where you can:
- Select and run individual tests
- Watch tests execute in real-time
- Debug test failures

### Run Tests in Headless Mode (CI/CD)
```bash
npx cypress run
```
This runs all tests in headless mode and generates:
- Video recordings (saved in `cypress/videos/`)
- Screenshots on failure (saved in `cypress/screenshots/`)

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/purchase.cy.js"
```

### Run Tests in Specific Browser
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```

## Design Patterns & Best Practices

### Advanced 3-Layer Architecture
The framework follows a **3-layer separation** pattern for maximum maintainability:

#### 1. **Locators Layer** (`cypress/support/locators/`)
- **Purpose**: Centralized repository of all element selectors
- **Benefits**:
  - Single source of truth for selectors
  - Easy to update when UI changes
  - Reduces duplication across tests

#### 2. **Assertions Layer** (`cypress/support/assertions/`)
- **Purpose**: Reusable validation methods
- **Benefits**:
  - Standardized assertion patterns
  - Easy to add new validations
  - Consistent error messages
  - Promotes assertion reusability

#### 3. **Page Objects Layer** (`cypress/support/pages/`)
- **Purpose**: User-facing actions and workflows
- **Benefits**:
  - Clean, readable test code
  - Encapsulates page behavior
  - Easy to compose complex workflows
  - Tests read like user stories

### Why This Architecture?
**Traditional POM**: `Page Objects contain Locators + Actions + Assertions` (tightly coupled)
**Advanced 3-Layer**: `Locators ← Assertions ← Page Objects ← Tests` (loosely coupled)

**Benefits of Separation**:
1. **UI Changes**: Only update locators layer
2. **Assertion Changes**: Only update assertions layer
3. **Business Logic Changes**: Only update page objects layer
4. **Reusability**: Assertions and locators shared across multiple page objects
5. **Testing**: Each layer can be tested independently
6. **Scalability**: Easy to add new pages without duplication

### Page Object Model (POM)
- **Separation of Concerns**: Page objects encapsulate page-specific selectors and actions
- **Reusability**: Methods can be reused across multiple test cases
- **Maintainability**: UI changes only require updates in one place
- **Readability**: Tests read like user stories

### Test Data Management
- **Fixture Files**: Credentials and test data stored in `testData.json`
- **Benefits**: 
  - Easy to update test data without touching test code
  - Can easily switch between different user types
  - Supports data-driven testing

### Custom Commands
Custom Cypress commands for common actions:
- `cy.login(username, password)` - Quick login
- `cy.addToCart(productName)` - Add product to cart
- `cy.completeCheckout(firstName, lastName, postalCode)` - Fill checkout form

## Test Scenarios

### 1. Single Product Purchase Flow
- Login with valid credentials
- Add one product to cart
- Verify cart badge counter
- Proceed to checkout
- Fill shipping information
- Verify order summary
- Complete purchase
- Verify order confirmation

### 2. Multiple Products Purchase Flow
- Login with valid credentials
- Add multiple products to cart
- Verify all products in cart
- Complete checkout process
- Verify final order includes all products

### 3. Checkout Validation
- Tests form validation for required fields
- Verifies appropriate error messages

### 4. Post-Purchase Navigation
- Verifies user can navigate back to products after completing order



##  To-Do Section (Future Enhancements)

- **Cross-browser testing**: Add parallel execution for Chrome, Firefox, Edge
- **API Testing**: Integrate API tests to validate backend responses
- **Visual Regression Testing**: Add screenshot comparison for UI consistency
- **Performance Testing**: Measure and assert page load times

### Medium Priority
- **Test Data Generation**: Implement faker.js for dynamic test data
- **Negative Test Cases**: 
  - Invalid login attempts
  - Special characters in forms
  - Boundary value testing
  - Session timeout handling
- **Product Filtering/Sorting**: Test product sort and filter functionality
- **Mobile Responsive Testing**: Test on various viewport sizes
- **Shopping Cart Edge Cases**:
  - Remove items from cart
  - Update quantities
  - Continue shopping flow

- **CI/CD Integration**: 
  - GitHub Actions workflow
  - Azure DevOps pipeline
  - Jenkins integration
- **Test Reports**: 
  - Mochawesome HTML reports
  - Allure reporting
  - Dashboard integration
- **Code Coverage**: Track application code coverage
- **Session Management**: Test remember me functionality
- **Security Testing**: 
  - XSS injection tests
  - SQL injection tests
  - Authentication bypass attempts

