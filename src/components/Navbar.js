import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../colors';

import CartMenu from './CartMenu';

const Navbar = ({ cart }) => {

  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = scrolled ? 'scrolled' : '';

  function handleCartClick() {
    setCartOpen(true);
  }

  function handleCartClose() {
    setCartOpen(false);
  }

  return (
      <NavWrapper className={navbarClass}>
        <Nav>
          <Link to="/sticker-avenue" style={{...LinkStyle,...Title}}>Sticker Avenue</Link>
          <RightNav>
            <Link to="/about" style={LinkStyle}>About</Link>
            <Link to="/products" style={LinkStyle}>Products</Link>
            <CartButtonWrapper onClick={handleCartClick}>
              <CartButton>Cart</CartButton>
              <ItemsIndicator>{cart.size}</ItemsIndicator>
            </CartButtonWrapper>
            <CartMenuWrapper className={cartOpen ? 'active' : 'inactive'}>
              <CartMenu handleCartClose={handleCartClose}/>
            </CartMenuWrapper>
          </RightNav>
        </Nav>

      </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.welcome_bg};
  position: fixed;
  top: 0;
  z-index: 7;
  transition: all 0.2s ease-in-out;

  &.scrolled {
    background-color: ${COLORS.secondary_bg};
    border-bottom: 1px solid black;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
  }

`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  text-decoration: none,
`;

const Title = {
  fontSize: '3em',
};

const RightNav = styled.div`
  display: flex;
  gap: 5vw;
`;

const LinkStyle = {
  color: "black",
  textDecoration: "none",
  fontSize: '1.4em',
}

const CartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

const ItemsIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 20px;
`;

const CartButton = styled.div`
  font-size: 1.4em;
  cursor: pointer;
`;

const CartMenuWrapper = styled.div`
  &.inactive {
    display: none;
  }
`;


export default Navbar;