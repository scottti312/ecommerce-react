import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import ScrollingText from "./ScrollingText";
import FeaturedStickers from './FeaturedStickers';
import { COLORS } from '../../colors';

import Welcome from './Welcome';
import QualityDisplay from './QualityDisplay';

const Home = () => {
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
      <WelcomeContainer>
        <WelcomeWrapper>
          <Welcome />
          <WelcomeDescription>to Sticker Avenue, where stickers are our love language! We're so excited to have you here and can't wait to share our fun and colorful collection with you. So, come on in, take a look around, and let's add some personality to your world, one sticker at a time!</WelcomeDescription>
        </WelcomeWrapper>
      </WelcomeContainer>
      <QualityDisplay />
      <ScrollingText />
      <FeaturedStickers />
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

const WelcomeDescription = styled.p`
  font-size: 1.5em;
  max-width: 1000px;
  height: 100%;
  padding-left: 10%;
  margin-top: 40px;
  line-height: 1.7em;
  @media screen and (max-width: 550px) {
    line-height: 1.7em;
    font-size: 1.1em;
    padding-left: 0;
    text-align: center;
  }
`;


const FooterContainer = styled.div`
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