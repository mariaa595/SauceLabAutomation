import CheckoutOverviewPageLocators from '../locators/CheckoutOverviewPageLocators';

// Assertions for Checkout Overview Page
export class CheckoutOverviewPageAssertions {
  static verifyPageLoaded() {
    cy.get(CheckoutOverviewPageLocators.title)
      .should('have.text', 'Checkout: Overview');
  }

  static verifyProductInOverview(productName) {
    cy.get(CheckoutOverviewPageLocators.cartItemName)
      .should('contain', productName);
  }

  static verifyItemCount(count) {
    cy.get(CheckoutOverviewPageLocators.cartItems)
      .should('have.length', count);
  }

  static verifyPriceDisplayed() {
    cy.get(CheckoutOverviewPageLocators.subtotal).should('be.visible');
    cy.get(CheckoutOverviewPageLocators.tax).should('be.visible');
    cy.get(CheckoutOverviewPageLocators.total).should('be.visible');
  }

  static verifyFinishButtonVisible() {
    cy.get(CheckoutOverviewPageLocators.finishButton)
      .should('be.visible')
      .and('not.be.disabled');
  }

  static verifySubtotal(expectedAmount) {
    cy.get(CheckoutOverviewPageLocators.subtotal)
      .should('contain', expectedAmount);
  }

  static verifyTax(expectedAmount) {
    cy.get(CheckoutOverviewPageLocators.tax)
      .should('contain', expectedAmount);
  }

  static verifyTotal(expectedAmount) {
    cy.get(CheckoutOverviewPageLocators.total)
      .should('contain', expectedAmount);
  }

  static verifyPaymentInfoVisible() {
    cy.get(CheckoutOverviewPageLocators.paymentInfo).should('be.visible');
  }

  static verifyProductPrice(productName, expectedPrice) {
    cy.contains(CheckoutOverviewPageLocators.cartItems, productName)
      .find(CheckoutOverviewPageLocators.cartItemPrice)
      .should('have.text', expectedPrice);
  }

  static verifySubtotalAmount(expectedAmount) {
    cy.get(CheckoutOverviewPageLocators.subtotal)
      .invoke('text')
      .should('include', expectedAmount);
  }

  static verifyTaxAmount(expectedAmount) {
    cy.get(CheckoutOverviewPageLocators.tax)
      .invoke('text')
      .should('include', expectedAmount);
  }

  static verifyTotalAmount(expectedAmount) {
    cy.get(CheckoutOverviewPageLocators.total)
      .invoke('text')
      .should('include', expectedAmount);
  }

  static verifyPriceCalculation() {
    let subtotalValue;
    let taxValue;
    let totalValue;

    // Extract subtotal
    cy.get(CheckoutOverviewPageLocators.subtotal)
      .invoke('text')
      .then((text) => {
        subtotalValue = parseFloat(text.replace('Item total: $', ''));
      });

    // Extract tax
    cy.get(CheckoutOverviewPageLocators.tax)
      .invoke('text')
      .then((text) => {
        taxValue = parseFloat(text.replace('Tax: $', ''));
      });

    // Extract and verify total
    cy.get(CheckoutOverviewPageLocators.total)
      .invoke('text')
      .then((text) => {
        totalValue = parseFloat(text.replace('Total: $', ''));
        const calculatedTotal = (subtotalValue + taxValue).toFixed(2);
        expect(totalValue.toFixed(2)).to.equal(calculatedTotal);
      });
  }
}
