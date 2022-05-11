export default class cartEntity {
    constructor() {
        this._items = [];
    }

    get items() {
        return this._items;
    }

    findItem(id) {
        return this._items.find(item => item.product.id === id);
    }

    addItem(item) {
        this._items.push(item);
    }

    removeItem(id) {
        this._items = this._items.filter((item) => item.product.id !== id);
    }

    calculateTotal() {
        let total = 0;
        this._items.forEach((item) => {
            total += item.product.price * item.amount;
        });
        return total.toFixed(2);
    }

}