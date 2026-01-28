import LoginPageLocators from '../locators/LoginPageLocators';

// Assertions for Login Page
export class LoginPageAssertions {
  static verifyLoginPageLoaded() {
    cy.get(LoginPageLocators.usernameInput).should('be.visible');
    cy.get(LoginPageLocators.passwordInput).should('be.visible');
    cy.get(LoginPageLocators.loginButton).should('be.visible');
  }

  static verifyErrorMessage(expectedMessage) {
    cy.get(LoginPageLocators.errorMessage)
      .should('be.visible')
      .and('contain', expectedMessage);
  }

  static verifyErrorMessageNotVisible() {
    cy.get(LoginPageLocators.errorMessage).should('not.exist');
  }

  static verifyLoginButtonEnabled() {
    cy.get(LoginPageLocators.loginButton)
      .should('be.visible')
      .and('not.be.disabled');
  }

  static verifyUsernameInputEmpty() {
    cy.get(LoginPageLocators.usernameInput).should('have.value', '');
  }

  static verifyPasswordInputEmpty() {
    cy.get(LoginPageLocators.passwordInput).should('have.value', '');
  }

  static verifyCredentialsDisplayed() {
    cy.get(LoginPageLocators.loginCredentials).should('be.visible');
    cy.get(LoginPageLocators.loginPasswordInfo).should('be.visible');
  }
}
