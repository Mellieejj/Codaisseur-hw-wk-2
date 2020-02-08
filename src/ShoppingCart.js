class ShoppingCart {
  constructor() {
    this.items = [];
    this.totalPrice = 0;
  }
  // return items array
  getItems() {
    return this.items;
  }
  //add an item to the items array
  addItem(itemName, quantity, price) {
    return this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    });
  }
  // return an empty itemslist
  clear() {
    this.items = [];
    this.totalPrice = 0;
  }
  //returns total price of shopping cart
  total() {
    const totalCart = this.items.reduce((acc, currItem) => {
      return acc + currItem.pricePerUnit * currItem.quantity;
    }, 0);
    this.totalPrice = totalCart;
    return this.totalPrice;
  }
}

// const myCart = new ShoppingCart();
// myCart.addItem("apple", 3, 2.5);
// myCart.addItem("banana", 5, 1.5);
// myCart.total();
// console.log(myCart);
// myCart.clear();
// console.log(myCart);

module.exports = ShoppingCart;
