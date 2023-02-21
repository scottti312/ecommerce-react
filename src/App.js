import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import ProductPage from './pages/ProductPage';

function App() {
  const [cart, setCart] = useState(new Map());

  function handleAddToCart(event, id, title, price) {
    // Stops Link from calling an onClick to product page
    // when the add to cart icon is clicked. At FeaturedStickers.js
    event.preventDefault();
    addToCart(id, title, price);
  }

  function addToCart(id, title, price) {
    let product = {
      id: id,
      title: title,
      price: price,
    }
    let productString = JSON.stringify(product);
    if (cart.has(productString)) {
      cart.set(productString, cart.get(productString) + 1);
    } else {
      cart.set(productString, 1);
    }
    setCart(cart); 
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} key={cart.size}/>
        <Routes>
          <Route path="/sticker-avenue" element={<Home addToCart={handleAddToCart}/>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;