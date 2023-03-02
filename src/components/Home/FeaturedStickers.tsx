import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';

import Products, { Product } from "../../util/Products";
import ProductDisplay from '../ProductDisplay';
import { debounce } from 'lodash';

interface ContainerState {
  isDragging: boolean;
  startX: number;
  scrollLeft: number;
}

const FeaturedStickers = () => {
  const { bread, love, bedding, grain, shampoo } = Products;
  const productsArr = [bread, love, bedding, grain, shampoo];
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

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
              <ProductDisplay product={product} />

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
  width: 65%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
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