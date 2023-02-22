import React from "react";

type setCart = React.Dispatch<React.SetStateAction<Map<string, number>>>;
type setItemAmount = React.Dispatch<React.SetStateAction<number>>;

class CartController {
  cart: Map<string, number>;
  setCart: setCart;
  setItemAmount: setItemAmount;
  itemAmount: number;

  constructor(setCart: setCart, setItemAmount: setItemAmount, itemAmount: number, cart: Map<string, number>) {
    this.cart = cart;
    this.itemAmount = itemAmount;
    this.setCart = setCart;
    this.setItemAmount = setItemAmount;
    this.handleMore = this.handleMore.bind(this);
    this.handleLess = this.handleLess.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleMore(product: string) {
    this.cart.set(product, this.cart.get(product)! + 1);
    this.setCart(this.cart);
    this.setItemAmount((prevAmount: number) => prevAmount + 1);
  }

  handleLess(product: string) {
    this.cart.set(product, this.cart.get(product)! - 1);
    if (this.cart.get(product)! < 1) {
      const amount: number = this.cart.get(product)!;
      this.cart.delete(product);
      this.setCart(this.cart);
      this.setItemAmount((prevAmount: number) => prevAmount - amount);
    }
    this.setCart(this.cart);
    this.setItemAmount((prevAmount: number) => prevAmount - 1);
  }

  handleDelete(product: string) {
    const amount: number = this.cart.get(product)!;
    this.cart.delete(product);
    console.log(this.cart);
    this.setCart(this.cart);
    this.setItemAmount((prevAmount: number) => prevAmount - amount);
  }
}

export default CartController;