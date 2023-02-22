import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

import { COLORS } from '../colors';

const ProductPage = ({ handleAddToCart1 }) => {
  const { productId } = useParams();
  const { product } = useLocation().state;
  const { src, title, price } = product;
  return (
    <ProductWrapper>
      <ProductImage src={src} alt={productId}></ProductImage>
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
          <CartContainer onClick={() => handleAddToCart1(product)}>
            <CartWrapper>
              <AddToCart>
                {/* <i className="fa-solid fa-cart-shopping fa-lg"></i> */}
                <div>add to cart</div>
              </AddToCart>
            </CartWrapper>
          </CartContainer>
      </ProductInfo>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  padding: 100px;
`;

const ProductInfo = styled.div`
  align-items: center;
  margin-top: 100px;
  margin-left: 100px;
`;

const ProductImage = styled.img`
`;

const ProductTitle = styled.div`
  font-size: 3em;
`;

const ProductPrice = styled.div`
  font-size: 20px;
`;

const ProductDescription = styled.div`
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