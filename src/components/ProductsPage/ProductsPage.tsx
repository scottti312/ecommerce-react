import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../colors';
import CategoriesList from './CategoriesList';
import ProductsSection from './ProductsSection';

const ProductsPage = () => {
  const [selected, setSelected] = useState('food');

  const handleSelect = (event: any) => {
    setSelected(event.target.value);
  }

  return (
    <ProductsWrapper>
      <CategoriesContainer>
        <CategoriesList selected={selected} handleSelect={handleSelect} />
      </CategoriesContainer>
      <ProductsView>
        <ProductsSection selected={selected} />
      </ProductsView>
    </ProductsWrapper>
  )
}

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100vh;
  margin: 0 auto;
  max-width: 2500px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.hover_bg};
  height: 100%;
`;

const ProductsView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 10% 75px 10%;
  @media screen and (max-width: 550px) {
    margin: 100px 0 75px 0;
  }
`;

export default ProductsPage;