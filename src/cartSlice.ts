import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./util/Products";

export interface ProductInCart {
  product: Product;
  quantity: number;
}

export interface CartState {
  cart: ProductInCart[];
  cartOpen: boolean;
  itemAmount: number;
}

const initialState: CartState = {
  cart: [],
  cartOpen: false,
  itemAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const cart = state.cart;
      const product = action.payload;

      const index = cart.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        cart[index].quantity++;
      } else {
        cart.push({ product: product, quantity: 1 });
      }
      state.itemAmount++;
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const cart = state.cart;
      const product = action.payload;

      const index = cart.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        cart[index].quantity--;
        if (cart[index].quantity < 1) {
          cart.splice(index, 1);
        }
        state.itemAmount--;
      }

    },
    deleteFromCart: (state, action: PayloadAction<Product>) => {
      const cart = state.cart;
      const product = action.payload;

      const index = cart.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        state.itemAmount -= cart[index].quantity;
        cart.splice(index, 1);
      }
    },
    loadCart: (state, action: PayloadAction<ProductInCart[]>) => {
      const loadedCart = action.payload;
      state.cart = loadedCart;
      let totalQuantity = 0;
      loadedCart.forEach(product => totalQuantity += product.quantity)
      state.itemAmount = totalQuantity;
    },
  }

})

export const { addToCart, removeFromCart, deleteFromCart, loadCart } = cartSlice.actions;
export default cartSlice.reducer;