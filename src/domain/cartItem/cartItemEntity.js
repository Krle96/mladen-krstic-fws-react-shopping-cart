export default class CartItemEntity {
  constructor(product, amount) {
    this._product = product;
    this._amount = amount;
  }

  get product() {
    return this._product;
  }

  get amount() {
    return this._amount;
  }

  setAmount(amount) {
    this._amount = amount;
    return this;
  }

  increaseAmount(amount) {
    this._amount += amount;
  }
}
