// import CartCacheGateway from "./cartCacheGateway.js";
import CartEntity from './cartEntity';
import CartAPIGateway from './cartAPIGateway';

export default class CartService {
  static getCart() {
    // let cart = new CartCacheGateway().getCart();
    // if (!(cart instanceof CartEntity)) {
    //     cart = new CartEntity();
    //     new CartCacheGateway().saveCart(cart);
    // }
    let cart = new CartEntity();
    return cart;
  }

  static completeCheckout(items: []) {
    // const cart = new CartEntity();
    // const checkoutItems = cart.items;
    // console.log(checkoutItems);
    // console.log(cart instanceof CartEntity);
    // if (cart instanceof CartEntity) {
    //     return CartAPIGateway.completeCheckout(checkoutItems);
    // }
    return CartAPIGateway.completeCheckout(items);
  }
}
