import ProductEntity from './ProductEntity';

type ResponseType = {
  id: number;
  name: string;
  photoUrl: string;
  price: number;
};

export default class ProductFactory {
  //   reconstitute(productData: any) {
  //     return new ProductEntity()
  //       .setId(productData.id)
  //       .setName(productData.name)
  //       .setPhotoUrl(productData.photoUrl);
  //   }
  reconstitute(data: any) {
    const items: any = [];

    if (data && data.length > 0) {
      data.forEach((item: ResponseType) => {
        const makeInstance = this.makeEmpty();
        makeInstance
          .setId(item.id)
          .setName(item.name)
          .setPhotoUrl(item.photoUrl)
          .setPrice(item.price);

        items.push(makeInstance);
      });
    }

    return {
      items: items,
      //   data,
    };
  }

  makeEmpty() {
    return new ProductEntity();
  }
}
