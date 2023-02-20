import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../colors';

const Navbar = () => {
  return (
    <NavWrapper>
      <Nav>
        <Link to="/" style={{...LinkStyle,...Title}}>Sticker Avenue</Link>
        <RightNav>
          <Link to="/about" style={LinkStyle}>About</Link>
          <Link to="/products" style={LinkStyle}>Products</Link>
          <Link to="/cart" style={LinkStyle}>Cart</Link>
        </RightNav>
      </Nav>

    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  padding: 1vh 10vw 1vh 10vw;
  background-color: ${COLORS.welcome_bg};
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
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

export default Navbar;