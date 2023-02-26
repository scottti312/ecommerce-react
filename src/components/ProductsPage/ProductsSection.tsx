import styled from "styled-components";

import Products, { Product } from "../../util/Products";
import ProductDisplay from '../ProductDisplay';

interface ProductsSectionProps {
  selected: string;
}

const ProductsSection = ({ selected }: ProductsSectionProps) => {
  const productsArr = Object.values(Products);
  return (
    <>
      <ProductsContainer>
        {
          selected === 'food' &&
            productsArr
            .filter(product => product.category === 'food')
            .map((product: Product) => (
              <ProductWrapper key={product.id}>
                <ProductDisplay product={product} />
              </ProductWrapper>
            ))
        }
        {
          selected === 'other' &&
            productsArr
            .filter(product => product.category === 'other')
            .map((product: Product) => (
              <ProductWrapper key={product.id}>
                <ProductDisplay product={product} />
              </ProductWrapper>
            ))
        }
      </ProductsContainer>
    </>
  );
}

const ProductsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 340px);
  gap: 10px;
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export default ProductsSection;