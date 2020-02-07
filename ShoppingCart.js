class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getItems() {
    //returns an empty array
    //after adding items it return an array that includes the added items, that are objects.
    return this.items;
  }
  addItem(itemName, quantity, price) {
    // add new item to an internal array
  }

  clear() {
    //remove al the items out of the cart
    //after this one the getItems should be empty
  }
  total() {
    //pricePerUnit * quantity per product
  }
}

module.exports = ShoppingCart;
