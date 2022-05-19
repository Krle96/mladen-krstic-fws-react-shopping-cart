import ProductEntity from './ProductEntity';

type ResponseType = {
  id: number;
  name: string;
  photo: string;
  price: number;
};

export default class ProductFactory {
  reconstitute(data: []) {
    const items: {}[] = [];

    if (data && data.length > 0) {
      data.forEach((item: ResponseType) => {
        const makeInstance = this.makeEmpty();
        makeInstance
          .setId(item.id)
          .setName(item.name)
          .setPhotoUrl(item.photo)
          .setPrice(item.price);

        items.push(makeInstance);
      });
    }

    return {
      items: items,
    };
  }

  makeEmpty() {
    return new ProductEntity();
  }
}
