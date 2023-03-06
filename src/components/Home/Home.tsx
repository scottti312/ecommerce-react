import React, { Suspense, useEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import ScrollingText from "./ScrollingText";
import FeaturedStickers from './FeaturedStickers';
import { COLORS } from '../../colors';

import Welcome from './Welcome';
import QualityDisplay from './QualityDisplay';
import StunningShowcase from './StunningShowcase';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <HomeBody>
      <WelcomeContainer>
        <WelcomeWrapper>
          <Welcome />
          <WelcomeDescription>to Sticker Avenue, where stickers are our love language! We're so excited to have you here and can't wait to share our fun and colorful collection with you. So, come on in, take a look around, and let's add some personality to your world, one sticker at a time!</WelcomeDescription>
        </WelcomeWrapper>
      </WelcomeContainer>
      <Suspense fallback={<div>loading...</div>}>
        <StunningShowcase />
      </Suspense>
      <QualityDisplay />
      <ScrollingText />
      <FeaturedStickers />
      <Footer />
    </HomeBody>
  )
}

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeContainer = styled.div`
  display: flex;
  background-color: ${COLORS.welcome_bg};
  width: 100%;
  justify-content: center;
`

const WelcomeWrapper = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.welcome_bg};
  padding: 130px 0 60px 0;

  @media screen and (max-width: 550px) {
    align-items: center;
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WelcomeDescription = styled.p`
  font-size: 1.5em;
  max-width: 1000px;
  height: 100%;
  padding-left: 10%;
  padding-right: 20px;
  margin-top: 40px;
  line-height: 1.7em;

  animation: ${appear} 0.5s ease-out;
  @media screen and (max-width: 550px) {
    line-height: 1.7em;
    font-size: 1.1em;
    padding-left: 0;
    padding: 20px;
    text-align: center;
  }
`;
export default Home;