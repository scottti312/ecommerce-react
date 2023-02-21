import React from "react";
import styled from "styled-components";

const CartMenu = ({ handleCartClose }) => {
  return(
    <MenuWrapper>
      <MenuBackground onClick={handleCartClose}></MenuBackground>
      <Menu>
        <button onClick={handleCartClose}>Close</button>
      </Menu>
    </MenuWrapper>
  );
}

const MenuBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 30%;
  z-index: 9;
`;

const MenuWrapper = styled.div`
`;

const Menu = styled.div`
  background-color: white;
  width: 25%;
  min-width: 500px;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
`;

export default CartMenu;