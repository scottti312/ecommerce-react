import React from 'react';
import styled from 'styled-components';
import bread from "./resources/bread.png";
import shampoo from "./resources/shampoo.png";
import love from "./resources/love.png";

const Home = () => {
  return (
    <HomeBody>
      <WelcomeWrapper>
        <h1>Welcome!</h1>
        <p>This is my sample ecommerce storefront.</p>
      </WelcomeWrapper>

      <FeaturedContainer>
        <FeaturedWrapper>
          <ProductWrapper>
            <ProductImage src={bread} alt="bread" />
            <ProductTitle>Bread</ProductTitle>
            <ProductPrice>$1</ProductPrice>
          </ProductWrapper>
          <ProductWrapper>
            <ProductImage src={shampoo} alt="shampoo" />
            <ProductTitle>Shampoo</ProductTitle>
            <ProductPrice>$2</ProductPrice>
          </ProductWrapper>
          <ProductWrapper>
            <ProductImage src={love} alt="love" />
            <ProductTitle>Love</ProductTitle>
            <ProductPrice>Free!</ProductPrice>
          </ProductWrapper>
        </FeaturedWrapper>
      </FeaturedContainer>

      <CreditContainer>
        <Credit href="https://www.flaticon.com/free-icons/volunteering" title="volunteering icons">
          Volunteering icons created by Freepik - Flaticon
        </Credit>
      </CreditContainer>

      <FooterContainer>
        <Footer>
          Created by Scott Ti 
        </Footer>
      </FooterContainer>
    </HomeBody>
  )
}

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeWrapper = styled.div`
  width: 100%;
`;

const FeaturedContainer = styled.div`
  width: 100%;
`;

const FeaturedWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px;
  margin: 10%;
  border: 2px solid black;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
`;

const ProductImage = styled.img`
  height: 50%;
`;

const ProductTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.div`

`;

const CreditContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Credit = styled.a`
  color: inherit;
  &:link {
    text-decoration: none;
  }
`;

const FooterContainer = styled.div`
  position: sticky;
  top: 100vh;
  width: 100%;
  margin: 0 auto;
  background-color: black;
  text-align: center;
  padding: 30px;
`;

const Footer = styled.div`
  color: white;
`;

export default Home;