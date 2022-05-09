import ProductAPIGateway from './ProductAPIGateway';
import ProductFactory from './ProductFactory';
import ProductRepository from './ProductRepository';

export default class ProductService {
  static searchProduct() {
    return new ProductRepository(
      new ProductAPIGateway(),
      new ProductFactory(),
    ).searchProducts();
  }
}
