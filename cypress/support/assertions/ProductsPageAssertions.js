import ProductsPageLocators from '../locators/ProductsPageLocators';

// Assertions for Products Page
export class ProductsPageAssertions {
  static verifyPageLoaded() {
    cy.get(ProductsPageLocators.inventoryContainer).should('be.visible');
    cy.get(ProductsPageLocators.productTitle).should('contain', 'Products');
  }

  static verifyCartBadge(count) {
    if (count > 0) {
      cy.get(ProductsPageLocators.shoppingCartBadge)
        .should('be.visible')
        .and('have.text', count.toString());
    } else {
      cy.get(ProductsPageLocators.shoppingCartBadge).should('not.exist');
    }
  }

  static verifyCartBadgeNotVisible() {
    cy.get(ProductsPageLocators.shoppingCartBadge).should('not.exist');
  }

  static verifyProductDisplayed(productName) {
    cy.contains(ProductsPageLocators.inventoryItems, productName)
      .should('be.visible');
  }

  static verifyProductCount(count) {
    cy.get(ProductsPageLocators.inventoryItems)
      .should('have.length', count);
  }

  static verifyProductAddedToCart(productName) {
    const formattedName = productName.toLowerCase().replace(/\s+/g, '-');
    cy.get(ProductsPageLocators.removeButton(productName))
      .should('be.visible')
      .and('contain', 'Remove');
  }

  static verifyProductNotInCart(productName) {
    const formattedName = productName.toLowerCase().replace(/\s+/g, '-');
    cy.get(ProductsPageLocators.addToCartButton(productName))
      .should('be.visible')
      .and('contain', 'Add to cart');
  }

  static verifySortDropdownVisible() {
    cy.get(ProductsPageLocators.sortDropdown).should('be.visible');
  }
}
