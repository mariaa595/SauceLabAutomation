import CartPageLocators from '../locators/CartPageLocators';

// Assertions for Cart Page
export class CartPageAssertions {
  static verifyPageLoaded() {
    cy.get(CartPageLocators.title).should('have.text', 'Your Cart');
  }

  static verifyProductInCart(productName) {
    cy.get(CartPageLocators.cartItemName)
      .should('contain', productName);
  }

  static verifyCartItemCount(count) {
    cy.get(CartPageLocators.cartItems)
      .should('have.length', count);
  }

  static verifyCartIsEmpty() {
    cy.get(CartPageLocators.cartItems).should('not.exist');
  }

  static verifyCheckoutButtonVisible() {
    cy.get(CartPageLocators.checkoutButton)
      .should('be.visible')
      .and('not.be.disabled');
  }

  static verifyContinueShoppingButtonVisible() {
    cy.get(CartPageLocators.continueShoppingButton)
      .should('be.visible');
  }

  static verifyProductPrice(productName, expectedPrice) {
    cy.contains(CartPageLocators.cartItems, productName)
      .find(CartPageLocators.cartItemPrice)
      .should('contain', expectedPrice);
  }

  static verifyQuantity(expectedQuantity) {
    cy.get(CartPageLocators.cartQuantity)
      .should('contain', expectedQuantity);
  }

  static verifyProductPrice(productName, expectedPrice) {
    cy.contains(CartPageLocators.cartItems, productName)
      .find(CartPageLocators.cartItemPrice)
      .should('have.text', expectedPrice);
  }
}
