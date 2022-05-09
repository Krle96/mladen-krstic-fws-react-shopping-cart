import Factory from './ProductFactory';
import Gateway from './ProductAPIGateway';

export default class ProductRepository {
  _gateway: Gateway;
  _factory: Factory;

  constructor(gateway: Gateway, factory: Factory) {
    this._gateway = gateway;
    this._factory = factory;
  }

  async searchProducts() {
    // const productData: any = await this._gateway.searchProducts();
    // const products = [];
    // productData.forEach(productData => {
    //   products.push(this._factory.reconstitute(productData));
    // });
    return this._factory.reconstitute(await this._gateway.searchProducts());
    // return products;
  }
}
