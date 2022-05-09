import api from '../../api/apiClient';

export default class ProductAPIGateway {
  searchProducts() {
    return api.get('SearchProducts');
  }
}
