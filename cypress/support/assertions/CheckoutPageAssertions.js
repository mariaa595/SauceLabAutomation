import CheckoutPageLocators from '../locators/CheckoutPageLocators';

// Assertions for Checkout Information Page
export class CheckoutPageAssertions {
  static verifyPageLoaded() {
    cy.get(CheckoutPageLocators.title)
      .should('have.text', 'Checkout: Your Information');
  }

  static verifyErrorMessage(expectedMessage) {
    cy.get(CheckoutPageLocators.errorMessage)
      .should('be.visible')
      .and('contain', expectedMessage);
  }

  static verifyErrorMessageNotVisible() {
    cy.get(CheckoutPageLocators.errorMessage).should('not.exist');
  }

  static verifyContinueButtonEnabled() {
    cy.get(CheckoutPageLocators.continueButton)
      .should('be.visible')
      .and('not.be.disabled');
  }

  static verifyCancelButtonVisible() {
    cy.get(CheckoutPageLocators.cancelButton)
      .should('be.visible');
  }

  static verifyFormFieldsVisible() {
    cy.get(CheckoutPageLocators.firstNameInput).should('be.visible');
    cy.get(CheckoutPageLocators.lastNameInput).should('be.visible');
    cy.get(CheckoutPageLocators.postalCodeInput).should('be.visible');
  }

  static verifyFirstNameValue(expectedValue) {
    cy.get(CheckoutPageLocators.firstNameInput)
      .should('have.value', expectedValue);
  }
}
