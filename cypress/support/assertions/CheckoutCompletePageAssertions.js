import CheckoutCompletePageLocators from '../locators/CheckoutCompletePageLocators';

// Assertions for Checkout Complete Page
export class CheckoutCompletePageAssertions {
  static verifyPageLoaded() {
    cy.get(CheckoutCompletePageLocators.title)
      .should('have.text', 'Checkout: Complete!');
  }

  static verifyOrderComplete() {
    cy.get(CheckoutCompletePageLocators.completeHeader)
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');
    
    cy.get(CheckoutCompletePageLocators.completeText)
      .should('be.visible')
      .and('contain', 'Your order has been dispatched');
  }

  static verifySuccessMessage() {
    cy.get(CheckoutCompletePageLocators.completeHeader)
      .should('contain', 'Thank you for your order!');
  }

  static verifyBackHomeButtonVisible() {
    cy.get(CheckoutCompletePageLocators.backHomeButton)
      .should('be.visible')
      .and('not.be.disabled');
  }

  static verifyPonyExpressImageVisible() {
    cy.get(CheckoutCompletePageLocators.ponyExpressImage)
      .should('be.visible');
  }

  static verifyCheckoutCompleteContainerVisible() {
    cy.get(CheckoutCompletePageLocators.checkoutCompleteContainer)
      .should('be.visible');
  }
}
