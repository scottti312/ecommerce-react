import React, { useState } from "react";
import styled, { keyframes } from "styled-components/macro";

import CartItem from "./CartItem";
import { COLORS } from "../colors";

const CartMenu = ({ handleCartClose, cart, cartController }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  function handleCheckout() {
    alert('Thanks for visiting!');
  }

  function handleMenuClose() {
    console.log(menuOpen);
    setMenuOpen(false);
    setTimeout(() => {
      handleCartClose();
      setMenuOpen(true);
    }, 200);
  }

  return(
    <MenuWrapper>
      <Menu isOpen={menuOpen}>
        <TopBar>
          <CloseButton onClick={handleMenuClose}>
            <i className="fa-solid fa-xmark fa-2xl"></i>
          </CloseButton>
          <Title>My Cart</Title>
        </TopBar>
        <ItemsWrapper>
          {[...cart.keys()].map((item) => {
            const { id, title, price, src } = JSON.parse(item);
            const quantity = cart.get(item);
            return (
              <CartItem key={id} item={item} title={title} price={price} src={src} quantity={quantity} cartController={cartController} />
            );
          })}
        </ItemsWrapper>
        <CartFinishWrapper>
          <TotalWrapper>
            <TotalTitle>Total:</TotalTitle>
            <Total>$
              {(() => {
                let total = 0;
                [...cart.keys()].forEach(item => {
                  total += (JSON.parse(item).price * cart.get(item));
                })
                return total.toFixed(2);
              })()}
            </Total>
          </TotalWrapper>
          <CheckoutButton onClick={handleCheckout}>Continue To Checkout</CheckoutButton>
        </CartFinishWrapper>
      </Menu>
      <MenuBackground isOpen={menuOpen} onClick={handleMenuClose}></MenuBackground>
    </MenuWrapper>
  );
}

const opacityFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const opacityFadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const MenuBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px);
  background-color: rgba(0,0,0,0.3);
  z-index: 9;
  animation: ${({ isOpen }) => isOpen ? opacityFadeIn : opacityFadeOut} 0.2s ease;
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }  
  100% {
    transform: translateX(0%);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0%);
  }  
  100% {
    transform: translateX(100%);
  }
`;

const Menu = styled.div`
  background-color: ${COLORS.primary_bg};
  top: 0;
  right: 0;
  width: 25%;
  min-width: 500px;
  height: 100%;
  position: fixed;
  z-index: 10;

  display: flex;
  align-items: center;
  flex-direction: column;
  animation: ${({ isOpen }) => isOpen ? slideIn : slideOut} 0.2s ease-out;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 30px 0;
  border-bottom: 2px solid black;
`;

const CloseButton = styled.div`
  position: absolute;
  left: 30px;
  z-index: 5;
  cursor: pointer;
`;

const Title = styled.div`
  text-align: center;
  width: 100%;
  font-size: 1.5em;
`;

const ItemsWrapper = styled.div`
  overflow: scroll;
  width: 100%;
  @keyframes moveUp { 0% {
      margin-top: 181px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

const CartFinishWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-top: 1px solid black;
  padding: 40px 0 40px 0;
  animation: moveUp 0.3s ease-out;
  @keyframes moveUp { 0% {
      margin-top: 181px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

const TotalWrapper = styled.div`

`;

const TotalTitle = styled.div`

`;

const Total = styled.div`
  text-align: center;
`;

const CheckoutButton = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 4px solid black;
  border-radius: 50px;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${COLORS.primary_bg};
    color: black;
  }

  &:active {
    transform: scale(0.8);
  }
`;

export default CartMenu;