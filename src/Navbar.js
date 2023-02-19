import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Link to="/" style={{...LinkStyle,...Title}}>Sticker Avenue</Link>
      <RightNav>
        <Link to="/about" style={LinkStyle}>About</Link>
        <Link to="/products" style={LinkStyle}>Products</Link>
        <Link to="/cart" style={LinkStyle}>Cart</Link>
      </RightNav>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  text-decoration: none,
`;

const Title = {
  fontSize: '40px',
};

const LinkStyle = {
  color: "black",
  textDecoration: "none",
}

const RightNav = styled.div`

`;

export default Navbar;