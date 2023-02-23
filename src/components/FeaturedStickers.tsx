import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { COLORS } from "../colors";

import Products, { Product } from "../util/Products";


interface FeaturedStickersProps {
  addToCart: (event: Event, product: Product) => void;
}

interface FeaturedProductProps {
  addToCart: (event: Event, product: Product) => void;
  product: Product;
}

const FeaturedStickers = ({ addToCart }: FeaturedStickersProps) => {
  const { bread, love, bedding, grain, shampoo } = Products;

  return (
    <SectionContainer>
      <FeaturedTitle>Featured Stickers</FeaturedTitle>
      <FeaturedContainer>
        <FeaturedWrapper>
          <FeaturedProduct addToCart={addToCart} product={bread} />
          <FeaturedProduct addToCart={addToCart} product={love} />
          <FeaturedProduct addToCart={addToCart} product={bedding} />
          <FeaturedProduct addToCart={addToCart} product={grain} />
          <FeaturedProduct addToCart={addToCart} product={shampoo} />
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

const FeaturedProduct = ({ addToCart, product }: FeaturedProductProps) => {
  const { id, title, price, src, alt } = product;
  const handleCartClick = (event: any) => {
    addToCart(event, product);
  };

  return (
    <Link to={`/products/${id}`} style={LinkStyle} state={{ product: product }}>
      <ProductContainer>
        <ProductWrapper>
          <ProductImage src={src} alt={alt} />
        </ProductWrapper>
        <ProductBottom>
          <ProductInfo>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>${price}</ProductPrice>
          </ProductInfo>
          <CartContainer onClick={handleCartClick}>
            <CartWrapper>
              <AddToCart>
                <i className="fa-solid fa-cart-shopping fa-lg"></i>
              </AddToCart>
            </CartWrapper>
          </CartContainer>
        </ProductBottom>
      </ProductContainer>
    </Link>
  );
};

const LinkStyle = {
  textDecoration: "none",
  color: "inherit",
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
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FeaturedWrapper = styled.div`
  overflow: scroll;
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: safe center;
  gap: 20px;
  padding: 30px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductWrapper = styled.div`
  display: flex;
  height: 100%;
  background-color: ${COLORS.product_bg};
  padding: 50px;
  border-radius: 20px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${COLORS.hover_bg};
    transform: scale(1.1);
  }
`;

const ProductBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
`;

const ProductInfo = styled.div`
`;

const CartContainer = styled.div`
  display: flex;
  z-index: 3;
`;

const CartWrapper = styled.div`
  padding: 10px;
  border-radius: 12px;
  background-color: ${COLORS.addcart_bg};
  display: flex;
  transition: all 0.2s ease;
  z-index: 4;
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

const ProductImage = styled.img`
  height: 120px;
  width: 120px;
`;

const ProductTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1.5em;
`;

const ProductPrice = styled.div`
  font-size: 1em;
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