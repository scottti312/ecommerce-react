import React from 'react';
import styled from 'styled-components/macro';

const Products = () => {
  return (
    <ProductsWrapper>
      <h1>Products</h1>
      <div>Welcome to products</div>
    </ProductsWrapper>
  )
}

const ProductsWrapper = styled.div`
  padding: 100px;
`;

export default Products;