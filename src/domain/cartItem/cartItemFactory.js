import CartItemEntity from './cartItemEntity.js';

export default class CartItemFactory {
  static make(product, amount) {
    return new CartItemEntity(product, amount);
  }
}
