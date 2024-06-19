/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
// @ts-check

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    this.items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    return this.items.reduce((acc, element) => {
      const { item, count } = element;
      const newAcc = acc + item.price * count;
      return newAcc;
    }, 0);
  }

  getCount() {
    return this.items.reduce((acc, element) => {
      const { count } = element;
      return acc + count;
    }, 0);
  }
}

export default Cart;
