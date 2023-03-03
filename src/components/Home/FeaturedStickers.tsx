import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../../colors';

import Products, { Product } from "../../util/Products";
import ProductDisplay from '../ProductDisplay';

const FeaturedStickers = () => {
  const { bread, love, bedding, grain, shampoo } = Products;
  const productsArr = [bread, love, bedding, grain, shampoo];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", (e) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY * 2;
      })
    }
  }, []);

  return (
    <SectionContainer>
      <FeaturedTitle>Featured Stickers</FeaturedTitle>
      <FeaturedContainer>
        <FeaturedWrapper ref={containerRef}>
          {productsArr.map((product: Product) => (
            <div key={product.id}>
              <ProductDisplay product={product} page={"featured"} />

            </div>
          ))}
        </FeaturedWrapper>
      </FeaturedContainer>
      <CreditContainer>
        <Credit href="https://www.flaticon.com/free-icons/volunteering" title="Icons Credit - THANK YOU!!">
          Sticker icons created by Freepik - Flaticon
        </Credit>
      </CreditContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 100%;
  margin: 8vh 0 8vw 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeaturedTitle = styled.div`
  font-family: ReallyAwesome;
  font-size: 2em;
`;

const FeaturedContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

const FeaturedWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 800px;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 30px;
  scroll-behavior: smooth;
  border: 5px solid ${COLORS.hover_bg};
  &::-webkit-scrollbar {
    height: 10px;
    width: 100%;
    border-radius: 10px;
    background-color: gray;
  }
  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 10px;
  }
  @media screen and (max-width: 990px) {
    width: 100%;
    border: none;
    box-shadow: none;
  }

`;


const CreditContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Credit = styled.a`
  margin: 0;
  color: inherit;
  font-size: 0.8em;
  &:link {
    text-decoration: none;
  }
`;


export default FeaturedStickers;