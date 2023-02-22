class CartController {
  constructor(setCart, setItemAmount, itemAmount, cart) {
    this.cart = cart;
    this.itemAmount = itemAmount;
    this.setCart = setCart;
    this.setItemAmount = setItemAmount;
    this.handleMore = this.handleMore.bind(this);
    this.handleLess = this.handleLess.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleMore(item) {
    const newCart = new Map(this.cart);
    newCart.set(item, newCart.get(item) + 1);
    this.setCart(newCart);
    this.setItemAmount(prevAmount => prevAmount + 1);
  }

  handleLess(item) {
    const newCart = new Map(this.cart);
    newCart.set(item, newCart.get(item) - 1);
    if (newCart.get(item) < 1) {
      const amount = newCart.get(item);
      newCart.delete(item);
      this.setCart(newCart);
      this.setItemAmount(prevAmount => prevAmount - amount);
    }
    this.setCart(newCart);
    this.setItemAmount(prevAmount => prevAmount - 1);
  }

  handleDelete(item) {
    const newCart = new Map(this.cart);
    const amount = newCart.get(item);
    newCart.delete(item);
    this.setCart(newCart);
    this.setItemAmount(prevAmount => prevAmount - amount);
  }
}

export default CartController;