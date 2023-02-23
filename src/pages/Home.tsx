import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import ScrollingText from "../components/ScrollingText";
import FeaturedStickers from '../components/FeaturedStickers';
import { COLORS } from '../colors';

import { Product } from '../util/Products';

interface HomeProps {
  addToCart: (event: Event, product: Product) => void;
}

const Home = ({ addToCart }: HomeProps) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <HomeBody>
      <WelcomeWrapper>
        <WelcomeTitle>Welcome!</WelcomeTitle>
        <WelcomeDescription>Welcome to Sticker Avenue, where stickers are our love language! We're so excited to have you here and can't wait to share our fun and colorful collection with you. So, come on in, take a look around, and let's add some personality to your world, one sticker at a time!</WelcomeDescription>
      </WelcomeWrapper>
      <ScrollingText />
      <FeaturedStickers addToCart={addToCart} />
      <FooterContainer>
        <Github href="https://github.com/scottti312/sticker-avenue">
          <Footer className='hidden'>
            Created by Scott Ti
            <i className="fa-brands fa-github fa-xl" style={{ paddingLeft: "15px" }}>
            </i>
          </Footer>
        </Github>
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
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.welcome_bg};
  padding: 130px 30px 60px 5%;
`;

const WelcomeTitle = styled.h1`
  margin: 0 0 10px 0;
  padding-left: 25%;
`;

const WelcomeDescription = styled.p`
  font-size: 1.2em;
  min-width: 500px;
  width: 40%;
  padding-left: 30%;
  line-height: 1.7em;
`;

const FooterContainer = styled.div`
  position: sticky;
  top: 100vh;
  width: 100%;
  margin: 0 auto;
  background-color: black;
  text-align: center;
  padding: 30px 0 30px 0;
`;

const Footer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Github = styled.a`
  text-decoration: none;
`;

export default Home;