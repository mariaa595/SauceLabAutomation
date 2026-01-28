import LoginPageLocators from '../locators/LoginPageLocators';
import { LoginPageAssertions } from '../assertions/LoginPageAssertions';

// Page Object Model for Login Page
class LoginPage {
  // Actions
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  enterUsername(username) {
    cy.get(LoginPageLocators.usernameInput).clear().type(username);
  }

  enterPassword(password) {
    cy.get(LoginPageLocators.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(LoginPageLocators.loginButton).click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  clearUsername() {
    cy.get(LoginPageLocators.usernameInput).clear();
  }

  clearPassword() {
    cy.get(LoginPageLocators.passwordInput).clear();
  }

  // Assertions (delegated to assertion class)
  verifyLoginPageLoaded() {
    LoginPageAssertions.verifyLoginPageLoaded();
  }

  verifyErrorMessage(message) {
    LoginPageAssertions.verifyErrorMessage(message);
  }

  verifyCredentialsDisplayed() {
    LoginPageAssertions.verifyCredentialsDisplayed();
  }
}

export default new LoginPage();
