import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from "../colors";

const FeaturedStickers = () => {
  let bread = require("../resources/stickers/bread.png");
  let love = require("../resources/stickers/love.png");
  let bedding = require("../resources/stickers/bedding.png");
  let grain = require("../resources/stickers/grain.png");
  let shampoo = require("../resources/stickers/shampoo.png");

  return (
    <SectionContainer>
      <FeaturedTitle>Featured Stickers</FeaturedTitle>
      <FeaturedContainer>
        <FeaturedWrapper> 
          <Product id="bread" title="bread" price="$1" src={bread} alt="bread" />
          <Product id="shampoo" title="shampoo" price="$2" src={shampoo} alt="shampoo" />
          <Product id="love" title="love" price="$2" src={love} alt="love" />
          <Product id="bedding" title="bedding" price="$1" src={bedding} alt="bedding" />
          <Product id="grain" title="grain" price="$1" src={grain} alt="grain" />
        </FeaturedWrapper>
      </FeaturedContainer>
      <CreditContainer>
        <Credit href="https://www.flaticon.com/free-icons/volunteering" title="Icons Credit - THANK YOU!!">
          Icons created by Freepik - Flaticon
        </Credit>
      </CreditContainer>
    </SectionContainer>
  );
};

const Product = ({ id, title, price, src, alt }) => {
  return (
    <Link to={`/products/${id}`} style={LinkStyle} state={{title: title, price: price, src: src}}>
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
  padding: 10px;
  border-radius: 12px;
  background-color: ${COLORS.addcart_bg};
  display: flex;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${COLORS.hover_bg};
    transform: scale(1.2);
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