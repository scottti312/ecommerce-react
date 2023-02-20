import React from 'react';
import styled from 'styled-components';
import ScrollingText from "../components/ScrollingText";
import FeaturedStickers from '../components/FeaturedStickers';
import { COLORS } from '../colors';

const Home = () => {
  return (
    <HomeBody>
      <WelcomeWrapper>
        <WelcomeTitle>Welcome!</WelcomeTitle>
        <WelcomeDescription>Welcome to Sticker Avenue, where stickers are our love language! We're so excited to have you here and can't wait to share our fun and colorful collection with you. Whether you're looking for something sweet and whimsical or bold and trendy, we've got you covered. So, come on in, take a look around, and let's add some personality to your world, one sticker at a time!</WelcomeDescription>
      </WelcomeWrapper>
      <ScrollingText />
      <FeaturedStickers />
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
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.welcome_bg};
  padding: 5vh 15vw 5vh 15vw;
`;

const WelcomeTitle = styled.h1`
  margin: 0;
  padding-left: 15%;
`;

const WelcomeDescription = styled.p`
  width: 50%;
  padding-left: 20%;
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