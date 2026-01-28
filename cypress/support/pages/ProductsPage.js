import ProductsPageLocators from '../locators/ProductsPageLocators';
import { ProductsPageAssertions } from '../assertions/ProductsPageAssertions';

// Page Object Model for Products/Inventory Page
class ProductsPage {
  // Actions
  addProductToCart(productName) {
    cy.contains(ProductsPageLocators.inventoryItems, productName)
      .find('button')
      .click();
  }

  addMultipleProducts(productNames) {
    productNames.forEach(productName => {
      this.addProductToCart(productName);
    });
  }

  goToCart() {
    cy.get(ProductsPageLocators.shoppingCartLink).click();
  }

  sortProducts(sortOption) {
    cy.get(ProductsPageLocators.sortDropdown).select(sortOption);
  }

  openBurgerMenu() {
    cy.get(ProductsPageLocators.burgerMenuButton).click();
  }

  removeProductFromCart(productName) {
    cy.contains(ProductsPageLocators.inventoryItems, productName)
      .find('button')
      .click();
  }

  getProductPrice(productName) {
    return cy.contains(ProductsPageLocators.inventoryItems, productName)
      .find(ProductsPageLocators.inventoryItemPrice)
      .invoke('text')
      .then((price) => price.trim());
  }

  // Assertions (delegated to assertion class)
  verifyPageLoaded() {
    ProductsPageAssertions.verifyPageLoaded();
  }

  verifyCartBadge(count) {
    ProductsPageAssertions.verifyCartBadge(count);
  }

  verifyProductDisplayed(productName) {
    ProductsPageAssertions.verifyProductDisplayed(productName);
  }

  verifyProductCount(count) {
    ProductsPageAssertions.verifyProductCount(count);
  }

  verifyProductAddedToCart(productName) {
    ProductsPageAssertions.verifyProductAddedToCart(productName);
  }

  verifyProductNotInCart(productName) {
    ProductsPageAssertions.verifyProductNotInCart(productName);
  }
}

export default new ProductsPage();
