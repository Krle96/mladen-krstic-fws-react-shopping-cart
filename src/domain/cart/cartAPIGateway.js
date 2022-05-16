import api from '../../api/ApiClient';

export default class CartAPIGateway {
  static completeCheckout(cartItems) {
    return api.post('Purchase', cartItems);
  }
}
