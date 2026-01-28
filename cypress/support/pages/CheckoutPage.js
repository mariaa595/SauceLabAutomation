import CheckoutPageLocators from '../locators/CheckoutPageLocators';
import { CheckoutPageAssertions } from '../assertions/CheckoutPageAssertions';

// Page Object Model for Checkout Information Page
class CheckoutPage {
  // Actions
  fillInformation(firstName, lastName, postalCode) {
    cy.get(CheckoutPageLocators.firstNameInput).clear().type(firstName);
    cy.get(CheckoutPageLocators.lastNameInput).clear().type(lastName);
    cy.get(CheckoutPageLocators.postalCodeInput).clear().type(postalCode);
  }

  fillFirstName(firstName) {
    cy.get(CheckoutPageLocators.firstNameInput).clear().type(firstName);
  }

  fillLastName(lastName) {
    cy.get(CheckoutPageLocators.lastNameInput).clear().type(lastName);
  }

  fillPostalCode(postalCode) {
    cy.get(CheckoutPageLocators.postalCodeInput).clear().type(postalCode);
  }

  continue() {
    cy.get(CheckoutPageLocators.continueButton).click();
  }

  cancel() {
    cy.get(CheckoutPageLocators.cancelButton).click();
  }

  // Assertions (delegated to assertion class)
  verifyPageLoaded() {
    CheckoutPageAssertions.verifyPageLoaded();
  }

  verifyErrorMessage(message) {
    CheckoutPageAssertions.verifyErrorMessage(message);
  }

  verifyFormFieldsVisible() {
    CheckoutPageAssertions.verifyFormFieldsVisible();
  }
}

export default new CheckoutPage();
