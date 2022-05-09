import api from '../../api/ApiClient';

export default class ProductAPIGateway {
  searchProducts() {
    return api.get('SearchProducts');
  }
}
