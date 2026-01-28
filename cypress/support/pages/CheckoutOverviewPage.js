import CheckoutOverviewPageLocators from '../locators/CheckoutOverviewPageLocators';
import { CheckoutOverviewPageAssertions } from '../assertions/CheckoutOverviewPageAssertions';

// Page Object Model for Checkout Overview Page
class CheckoutOverviewPage {
  // Actions
  finishCheckout() {
    cy.get(CheckoutOverviewPageLocators.finishButton).click();
  }

  cancel() {
    cy.get(CheckoutOverviewPageLocators.cancelButton).click();
  }

  getSubtotalAmount() {
    return cy.get(CheckoutOverviewPageLocators.subtotal).invoke('text');
  }

  getTaxAmount() {
    return cy.get(CheckoutOverviewPageLocators.tax).invoke('text');
  }

  getTotalAmount() {
    return cy.get(CheckoutOverviewPageLocators.total).invoke('text');
  }

  getProductPrice(productName) {
    return cy.contains(CheckoutOverviewPageLocators.cartItems, productName)
      .find(CheckoutOverviewPageLocators.cartItemPrice)
      .invoke('text')
      .then((price) => price.trim());
  }

  // Assertions (delegated to assertion class)
  verifyPageLoaded() {
    CheckoutOverviewPageAssertions.verifyPageLoaded();
  }

  verifyProductInOverview(productName) {
    CheckoutOverviewPageAssertions.verifyProductInOverview(productName);
  }

  verifyItemCount(count) {
    CheckoutOverviewPageAssertions.verifyItemCount(count);
  }

  verifyPriceDisplayed() {
    CheckoutOverviewPageAssertions.verifyPriceDisplayed();
  }

  verifyFinishButtonVisible() {
    CheckoutOverviewPageAssertions.verifyFinishButtonVisible();
  }

  verifyProductPrice(productName, expectedPrice) {
    CheckoutOverviewPageAssertions.verifyProductPrice(productName, expectedPrice);
  }

  verifySubtotalAmount(expectedAmount) {
    CheckoutOverviewPageAssertions.verifySubtotalAmount(expectedAmount);
  }

  verifyTaxAmount(expectedAmount) {
    CheckoutOverviewPageAssertions.verifyTaxAmount(expectedAmount);
  }

  verifyTotalAmount(expectedAmount) {
    CheckoutOverviewPageAssertions.verifyTotalAmount(expectedAmount);
  }

  verifyPriceCalculation() {
    CheckoutOverviewPageAssertions.verifyPriceCalculation();
  }
}

export default new CheckoutOverviewPage();
