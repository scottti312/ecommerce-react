import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import ScrollingText from "./ScrollingText";
import FeaturedStickers from './FeaturedStickers';
import { COLORS } from '../../colors';

import Welcome from './Welcome';

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
      <WelcomeWrapper>
        <Welcome />
        <WelcomeDescription>to Sticker Avenue, where stickers are our love language! We're so excited to have you here and can't wait to share our fun and colorful collection with you. So, come on in, take a look around, and let's add some personality to your world, one sticker at a time!</WelcomeDescription>
      </WelcomeWrapper>
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

const WelcomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.welcome_bg};
  padding: 130px 0 60px 0;
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