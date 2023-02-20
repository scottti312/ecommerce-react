import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bread from "../resources/stickers/bread.png";
import shampoo from "../resources/stickers/shampoo.png";
import love from "../resources/stickers/love.png";
import bedding from "../resources/stickers/bedding.png";
import grain from "../resources/stickers/grain.png";
import {COLORS} from "../colors";

const FeaturedStickers = () => {
  return (
    <SectionContainer>
      <FeaturedTitle>Featured Stickers</FeaturedTitle>
      <FeaturedContainer>
        <FeaturedWrapper> 
          <Product title="bread" price="$1" src={bread} alt="bread" />
          <Product title="shampoo" price="$2" src={shampoo} alt="shampoo" />
          <Product title="love" price="$2" src={love} alt="love" />
          <Product title="bedding" price="$1" src={bedding} alt="bedding" />
          <Product title="grain" price="$1" src={grain} alt="grain" />
        </FeaturedWrapper>
      </FeaturedContainer>
      <CreditContainer>
        <Credit href="https://www.flaticon.com/free-icons/volunteering" title="volunteering icons">
          Icons created by Freepik - Flaticon
        </Credit>
      </CreditContainer>
    </SectionContainer>
  );
};

const Product = ({ title, price, src, alt }) => {
  return (
    <Link to="/about" style={LinkStyle}>
      <ProductContainer>
        <ProductWrapper>
          <ProductImage src={src} alt={alt} />
        </ProductWrapper>
        <ProductBottom>
          <ProductInfo>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>{price}</ProductPrice>
          </ProductInfo>
          <CartContainer>
            <AddToCart>
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </AddToCart>
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
  margin: 8vh;
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
`;

const FeaturedWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  gap: 20px;
  padding: 30px;
  margin: 0 30vw 0 30vw; 
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
  padding: 10px;
  border-radius: 12px;
  background-color: ${COLORS.addcart_bg};
  display: flex;
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