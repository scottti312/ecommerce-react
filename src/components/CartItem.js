import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../colors";

const CartItem = ({ item, title, price, src, quantity, cartController }) => {

  function handleMore(item) {
    cartController.handleMore(item);
  }

  function handleLess(item) {
    // console.log(item);
    cartController.handleLess(item);
  }

  function handleDelete(item) {
    cartController.handleDelete(item);
  }

  return (
    <ItemContainer>
      <ItemWrapper>
        <ItemImage src={src} alt={title}></ItemImage>
        <ItemInfo>
          <ItemTitle>{title}</ItemTitle>
          <ItemPrice>${price}</ItemPrice>
        </ItemInfo>
        <ItemQuantityContainer>
          <ItemQuantityWrapper>
            <LessButton onClick={() => handleLess(item)}>-</LessButton>
            <ItemQuantity>{quantity}</ItemQuantity>
            <MoreButton onClick={() => handleMore(item)}>+</MoreButton>
          </ItemQuantityWrapper>
          <DeleteButton onClick={() => handleDelete(item)}>Delete</DeleteButton>
        </ItemQuantityContainer>
        <ItemTotal>${(() => {return (price * quantity).toFixed(2)})()}</ItemTotal>
      </ItemWrapper>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  @keyframes moveUp { 0% {
      margin-top: 181px;
    }
    100% {
      margin-top: 0px;
    }
  }
    animation: moveUp 0.3s ease-out;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 0.5fr 1fr;
  align-items: center;
  padding: 50px 30px 50px 30px;
  gap: 20px;
  border-bottom: 1px solid gray;
`;

const ItemImage = styled.img`
  height: 80px;
`;

const ItemInfo = styled.div`

`;


const ItemTitle = styled.div`

`;

const ItemPrice = styled.div`

`;

const ItemQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

`;

const ItemQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid black;
  border-radius: 20px;
  user-select: none;

`;

const LessButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 2em;
  cursor: pointer;
  border-radius: 20px 0 0 20px;
  margin-right: 5px;
  transition: all 0.2s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const MoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 2em;
  cursor: pointer;
  border-radius: 0 20px 20px 0;
  margin-left: 5px;
  transition: all 0.2s ease;

  &:hover {
    background-color: black;
    color: white
  }

`;

const DeleteButton = styled.div`
  padding: 3px 10px 3px 10px;
  border: 2px solid ${COLORS.delete_bg};
  border-radius: 15px;
  user-select: none;
  background-color: ${COLORS.delete_bg};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${COLORS.primary_bg};
  }

  &:active {

  }

`;

const ItemQuantity = styled.div`
  
`;

const ItemTotal = styled.div`
  text-align: center;
`;

export default CartItem;