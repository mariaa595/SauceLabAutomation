// ***********************************************
// Custom Commands for Sauce Demo Automation
// ***********************************************

/**
 * Custom command to login to Sauce Demo
 * @param {string} username - The username to login with
 * @param {string} password - The password to login with
 */
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
  cy.get('.inventory_container').should('be.visible');
});


/**
 * Custom command to add product to cart by name
 * @param {string} productName - The name of the product to add
 */
Cypress.Commands.add('addToCart', (productName) => {
  cy.contains('.inventory_item', productName)
    .find('button')
    .click();
});

/**
 * Custom command to complete checkout with provided information
 * @param {string} firstName - First name
 * @param {string} lastName - Last name
 * @param {string} postalCode - Postal code
 */
Cypress.Commands.add('completeCheckout', (firstName, lastName, postalCode) => {
  cy.get('[data-test="firstName"]').clear().type(firstName);
  cy.get('[data-test="lastName"]').clear().type(lastName);
  cy.get('[data-test="postalCode"]').clear().type(postalCode);
  cy.get('[data-test="continue"]').click();
});