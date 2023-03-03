import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

import { COLORS } from '../../colors';
import { Product } from '../../util/Products';
import "./ProductPageStyle.css";

interface CartProp {
  addToCart: (product: Product) => void;
}

const ProductPage = ({ addToCart }: CartProp) => {
  const { productId } = useParams();
  const { product }: { product: Product } = useLocation().state;
  const { src, title, price } = product;
  return (
    <ProductContainer>
      <ProductWrapper>
        <ProductImageWrapper>
          <ProductImage src={src} alt={productId}></ProductImage>
        </ProductImageWrapper>
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>${price}</ProductPrice>
          <ProductDescription>
            <ul>
              <li>Made with quality paper and compostable adhesive</li>
              <li>Water resistant</li>
              <li>Vibrant, eye-catching colors</li>
              <li>2" x 2"</li>
            </ul>
          </ProductDescription>
          <CartContainer onClick={() => addToCart(product)}>
            <CartWrapper>
              <AddToCart>
                <div>add to cart</div>
              </AddToCart>
            </CartWrapper>
          </CartContainer>
        </ProductInfo>
      </ProductWrapper>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  margin: 0 auto;
  background-color: ${COLORS.product_bg};
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-width: 1060px;

  @media screen and (max-width: 870px) {
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  /* padding: 100px 0 100px 0;  */
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 870px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 100px 0 100px 0;
    margin: 0 20px 0 20px;
    width: 100%;
    height: auto;
  }
`;

const ProductInfo = styled.div`
  align-items: center;
  margin-left: 50px;
  @media screen and (max-width: 870px) {
    margin-left: 0;
  }
`;

const ProductImage = styled.img`
  max-width: 400px;
  width: 50vw;
  height: auto;

`;

const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`

const ProductTitle = styled.div`
  font-size: 3em;
`;

const ProductPrice = styled.div`
  font-size: 1.5em;
`;

const ProductDescription = styled.div`
  max-width: 380px;
  width: 50vw;
  @media screen and (max-width: 870px) {
    width: 80vw;
  }
`;

const CartContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 3;
`;

const CartWrapper = styled.div`
  padding: 10px;
  border-radius: 12px;
  background-color: ${COLORS.addcart_bg};
  transition: all 0.2s ease;
  z-index: 4;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${COLORS.hover_bg};
    transform: scale(1.2);
  }

  &:hover:active {
    transform: scale(0.8);
  }

`;

const AddToCart = styled.div`
`;

export default ProductPage;