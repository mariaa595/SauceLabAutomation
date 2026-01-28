// Locators for Cart Page
const CartPageLocators = {
  cartItems: '[data-test="inventory-item"]',
  cartItemName: '[data-test="inventory-item-name"]',
  cartItemPrice: '[data-test="inventory-item-price"]',
  cartQuantity: '[data-test="item-quantity"]',
  checkoutButton: '[data-test="checkout"]',
  continueShoppingButton: '[data-test="continue-shopping"]',
  cartBadge: '[data-test="shopping-cart-badge"]',
  title: '[data-test="title"]',
  cartDescription: '[data-test="inventory-item-desc"]',
  removeButton: (productName) => `[data-test="remove-${productName.toLowerCase().replace(/\s+/g, '-')}"]`
};

export default CartPageLocators;
