import CartPageLocators from '../locators/CartPageLocators';
import { CartPageAssertions } from '../assertions/CartPageAssertions';

// Page Object Model for Shopping Cart Page
class CartPage {
  // Actions
  proceedToCheckout() {
    cy.get(CartPageLocators.checkoutButton).click();
  }

  removeProduct(productName) {
    cy.contains(CartPageLocators.cartItems, productName)
      .find('button')
      .click();
  }

  continueShopping() {
    cy.get(CartPageLocators.continueShoppingButton).click();
  }

  removeProductByIndex(index) {
    cy.get(CartPageLocators.removeButton(index)).click();
  }

  getProductPrice(productName) {
    return cy.contains(CartPageLocators.cartItems, productName)
      .find(CartPageLocators.cartItemPrice)
      .invoke('text')
      .then((price) => price.trim());
  }

  // Assertions (delegated to assertion class)
  verifyPageLoaded() {
    CartPageAssertions.verifyPageLoaded();
  }

  verifyProductInCart(productName) {
    CartPageAssertions.verifyProductInCart(productName);
  }

  verifyCartItemCount(count) {
    CartPageAssertions.verifyCartItemCount(count);
  }

  verifyCartIsEmpty() {
    CartPageAssertions.verifyCartIsEmpty();
  }

  verifyCheckoutButtonVisible() {
    CartPageAssertions.verifyCheckoutButtonVisible();
  }

  verifyProductPrice(productName, expectedPrice) {
    CartPageAssertions.verifyProductPrice(productName, expectedPrice);
  }
}

export default new CartPage();
