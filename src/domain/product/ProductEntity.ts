export default class ProductEntity {
  private _id: number;
  private _name: string;
  private _photoUrl: string;
  private _price: number;

  get id() {
    return this._id;
  }

  setId(id: number) {
    this._id = id;
    return this;
  }

  get name() {
    return this._name;
  }

  setName(name: string) {
    this._name = name;
    return this;
  }

  get photoUrl() {
    return this._photoUrl;
  }

  setPhotoUrl(photoUrl: string) {
    this._photoUrl = photoUrl;
    return this;
  }

  get price() {
    return this._price;
  }

  setPrice(price: number) {
    this._price = price;
    return this;
  }
}
