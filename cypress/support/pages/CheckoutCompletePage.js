import CheckoutCompletePageLocators from '../locators/CheckoutCompletePageLocators';
import { CheckoutCompletePageAssertions } from '../assertions/CheckoutCompletePageAssertions';

// Page Object Model for Checkout Complete Page
class CheckoutCompletePage {
  // Actions
  backToProducts() {
    cy.get(CheckoutCompletePageLocators.backHomeButton).click();
  }

  getCompleteHeaderText() {
    return cy.get(CheckoutCompletePageLocators.completeHeader).invoke('text');
  }

  getCompleteMessageText() {
    return cy.get(CheckoutCompletePageLocators.completeText).invoke('text');
  }

  // Assertions (delegated to assertion class)
  verifyPageLoaded() {
    CheckoutCompletePageAssertions.verifyPageLoaded();
  }

  verifyOrderComplete() {
    CheckoutCompletePageAssertions.verifyOrderComplete();
  }

  verifyBackHomeButtonVisible() {
    CheckoutCompletePageAssertions.verifyBackHomeButtonVisible();
  }
}

export default new CheckoutCompletePage();
