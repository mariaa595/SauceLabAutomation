// Locators for Products/Inventory Page
const ProductsPageLocators = {
  inventoryContainer: '[data-test="inventory-container"]',
  inventoryItems: '[data-test="inventory-item"]',
  inventoryItemName: '[data-test="inventory-item-name"]',
  productTitle: '[data-test="title"]',
  shoppingCartBadge: '[data-test="shopping-cart-badge"]',
  shoppingCartLink: '[data-test="shopping-cart-link"]',
  sortDropdown: '[data-test="product-sort-container"]',
  burgerMenuButton: '[data-test="open-menu"]',
  inventoryItemPrice: '[data-test="inventory-item-price"]',
  addToCartButton: (productName) => `[data-test="add-to-cart-${productName.toLowerCase().replace(/\s+/g, '-')}"]`,
  removeButton: (productName) => `[data-test="remove-${productName.toLowerCase().replace(/\s+/g, '-')}"]`
};

export default ProductsPageLocators;
