import LoginPage from '../support/pages/LoginPage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';
import CheckoutPage from '../support/pages/CheckoutPage';
import CheckoutOverviewPage from '../support/pages/CheckoutOverviewPage';
import CheckoutCompletePage from '../support/pages/CheckoutCompletePage';

describe('Sauce Demo - End to End Purchase Flow', () => {
  let testData;

  before(() => {
    // Load test data from fixture
    cy.fixture('testData').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    // Login before each test
    LoginPage.visit();
    LoginPage.login(testData.user.username, testData.user.password);
    ProductsPage.verifyPageLoaded();
  });

  it('should complete full purchase flow for single product', () => {
    const productName = 'Sauce Labs Backpack';
    let productPrice;

    // Get product price from product page
    ProductsPage.getProductPrice(productName).then((price) => {
      productPrice = price;
      cy.log(`Product price: ${productPrice}`);
    });

    // Add product to cart and verify button changes to Remove
    ProductsPage.addProductToCart(productName);
    ProductsPage.verifyProductAddedToCart(productName);
    ProductsPage.verifyCartBadge(1);

    // Go to cart and verify price
    ProductsPage.goToCart();
    CartPage.verifyPageLoaded();
    CartPage.verifyProductInCart(productName);
    CartPage.verifyCartItemCount(1);
    cy.then(() => {
      CartPage.verifyProductPrice(productName, productPrice);
    });

    // Proceed to checkout
    CartPage.proceedToCheckout();
    CheckoutPage.verifyPageLoaded();

    // Fill checkout information
    CheckoutPage.fillInformation(
      testData.checkout.firstName,
      testData.checkout.lastName,
      testData.checkout.postalCode
    );
    CheckoutPage.continue();

    // Verify checkout overview with price validation
    CheckoutOverviewPage.verifyPageLoaded();
    CheckoutOverviewPage.verifyProductInOverview(productName);
    CheckoutOverviewPage.verifyItemCount(1);
    cy.then(() => {
      CheckoutOverviewPage.verifyProductPrice(productName, productPrice);
    });
    CheckoutOverviewPage.verifyPriceDisplayed();
    CheckoutOverviewPage.verifyPriceCalculation(); // Verify subtotal + tax = total

    // Complete purchase
    CheckoutOverviewPage.finishCheckout();
    CheckoutCompletePage.verifyPageLoaded();
    CheckoutCompletePage.verifyOrderComplete();
  });

  it('should complete purchase flow for multiple products', () => {
    const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];

    // Add multiple products to cart
    ProductsPage.addMultipleProducts(products);
    ProductsPage.verifyCartBadge(products.length);

    // Go to cart
    ProductsPage.goToCart();
    CartPage.verifyPageLoaded();
    CartPage.verifyCartItemCount(products.length);

    // Verify all products in cart
    products.forEach(product => {
      CartPage.verifyProductInCart(product);
    });

    // Proceed to checkout
    CartPage.proceedToCheckout();
    CheckoutPage.verifyPageLoaded();

    // Fill checkout information
    CheckoutPage.fillInformation(
      testData.checkout.firstName,
      testData.checkout.lastName,
      testData.checkout.postalCode
    );
    CheckoutPage.continue();

    // Verify checkout overview
    CheckoutOverviewPage.verifyPageLoaded();
    CheckoutOverviewPage.verifyItemCount(products.length);
    CheckoutOverviewPage.verifyPriceDisplayed();

    // Complete purchase
    CheckoutOverviewPage.finishCheckout();
    CheckoutCompletePage.verifyPageLoaded();
    CheckoutCompletePage.verifyOrderComplete();
  });

  it('should prevent checkout without filling required information', () => {
    const productName = 'Sauce Labs Backpack';

    // Add product and go to checkout
    ProductsPage.addProductToCart(productName);
    ProductsPage.goToCart();
    CartPage.proceedToCheckout();
    CheckoutPage.verifyPageLoaded();

    // Try to continue without filling information
    CheckoutPage.continue();
    CheckoutPage.verifyErrorMessage('Error: First Name is required');
  });

  it('should allow user to return to products after order completion', () => {
    const productName = 'Sauce Labs Onesie';

    // Complete full flow
    ProductsPage.addProductToCart(productName);
    ProductsPage.goToCart();
    CartPage.proceedToCheckout();
    CheckoutPage.fillInformation(
      testData.checkout.firstName,
      testData.checkout.lastName,
      testData.checkout.postalCode
    );
    CheckoutPage.continue();
    CheckoutOverviewPage.finishCheckout();
    CheckoutCompletePage.verifyOrderComplete();

    // Return to products page
    CheckoutCompletePage.backToProducts();
    ProductsPage.verifyPageLoaded();
  });
});