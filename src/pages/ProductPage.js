import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ProductPage = () => {
  const { productId } = useParams();
  const {title, price, src} = useLocation().state;
  // const { state } = useLocation();
  return (
    <>
      <div>Product Page</div>
      <div>{title}</div>
      <ProductImage src={src} alt={productId}></ProductImage>
      <ProductPrice>{price}</ProductPrice>
    </>
  );
};

const ProductImage = styled.img`
`;

const ProductPrice = styled.div`
  font-size: 20px;
`;

export default ProductPage;