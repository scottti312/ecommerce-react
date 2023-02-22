import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components/macro';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import ProductPage from './pages/ProductPage';
import CartMenu from './components/CartMenu';
import Navbar from './components/Navbar';
import ScrollToTop from './util/ScrollToTop';
import CartController from './util/CartController';

function App() {
  const [cart, setCart] = useState(new Map());
  const [cartOpen, setCartOpen] = useState(false);
  const [itemAmount, setItemAmount] = useState(0)

  const cartController = new CartController(setCart, setItemAmount, itemAmount, cart);

  function handleCartClick() {
    setCartOpen(true);
  }

  function handleCartClose() {
    setCartOpen(false);
  }

  function handleAddToCart(event, product) {
    // Stops Link from calling an onClick to product page
    // when the add to cart icon is clicked. At FeaturedStickers.js
    event.preventDefault();
    addToCart(product);
  }

  function handleAddToCart1(product) {
    addToCart(product);
  }

  function addToCart(product) {
    let productString = JSON.stringify(product);
    if (cart.has(productString)) {
      cart.set(productString, cart.get(productString) + 1);
    } else {
      cart.set(productString, 1);
    }
    setCart(cart); 
    setItemAmount(itemAmount + 1);
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <CartMenuWrapper className={cartOpen ? 'active' : 'inactive'}>
          <CartMenu handleCartClose={handleCartClose} cart={cart} cartController={cartController} />
        </CartMenuWrapper>
        <Navbar itemAmount={itemAmount} handleCartClick={handleCartClick}/>
        <Routes>
          <Route path="/sticker-avenue" element={<Home addToCart={handleAddToCart}/>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:productId" element={<ProductPage handleAddToCart1={handleAddToCart1} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const CartMenuWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  &.inactive {
    display: none;
  }
  z-index: 11;
`;

export default App;
