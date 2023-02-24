import React, { useState } from "react";
import styled, { keyframes } from "styled-components/macro";

import CartItem from "./CartItem";
import { COLORS } from "../colors";
import CartController from "../util/CartController";

interface CartMenuProps {
  handleCartClose: () => void;
  cart: Map<string, number>;
  cartController: CartController;
}

interface MenuProps {
  isOpen: boolean;
}

const CartMenu = ({ handleCartClose, cart, cartController }: CartMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(true);

  function handleCheckout() {
    if (cart.size === 0) {
      alert('Your cart is empty! Thanks for visiting still :)');
    } else {
      alert('Thanks for visiting!');
    }
  }

  function handleMenuClose() {
    setMenuOpen(false);
    setTimeout(() => {
      handleCartClose();
      setMenuOpen(true);
    }, 200);
  }

  return (
    <MenuWrapper>
      <Menu isOpen={menuOpen}>
        <TopBar>
          <CloseButton onClick={handleMenuClose}>
            <i className="fa-solid fa-xmark fa-2xl"></i>
          </CloseButton>
          <Title>My Cart</Title>
        </TopBar>
        <ItemsWrapper>
          {cart.size === 0 &&
            <EmptyWrapper>
              <EmptyImage src={require("../resources/stickers/surprised.png")} alt="surprised"></EmptyImage>
              <EmptyMessage>Your cart is empty!</EmptyMessage>
            </EmptyWrapper>
          }
          {[...cart.keys()].map((product) => {
            const id = JSON.parse(product).id;
            const productObj = JSON.parse(product);
            const quantity = cart.get(product)!;
            return (
              <CartItem key={id} product={productObj} quantity={quantity} cartController={cartController} />
            );
          })}
        </ItemsWrapper>
        <CartFinishWrapper>
          <TotalWrapper>
            <TotalTitle>Total:</TotalTitle>
            <Total>$
              {(() => {
                let total = 0;
                [...cart.keys()].forEach(product => {
                  total += (JSON.parse(product).price * cart.get(product)!);
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
  )
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

const MenuBackground = styled.div<MenuProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(0,0,0,0.3);
  z-index: 9;
  animation: ${({ isOpen }) => isOpen ? opacityFadeIn : opacityFadeOut} 0.5s ease;
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

const Menu = styled.div<MenuProps>`
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
  @keyframes moveUp {
    0% {
      margin-top: 181px;
    }
    100% {
      margin-top: 0px;
    }
  }
  animation: moveUp 0.5s ease-out
`;

const EmptyWrapper = styled.div`
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const EmptyImage = styled.img`
  height: 100px;
  width: 100px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  font-size: 1.5em;
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
  font-size: 1.5em;
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
  user-select: none;
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