import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../colors';
import { keyframes } from 'styled-components/macro';

const ScrollingText = () => {
  return (
    <ScrollWrapper>
      <ScrollContainerComp />
      <ScrollContainerComp />
      <ScrollContainerComp />
      <ScrollContainerComp />
      <ScrollContainerComp />
    </ScrollWrapper>
  );
};

const ScrollContainerComp = () => {
  return (
    <ScrollContainer>
      <ScrollText>Affordable</ScrollText>
      <ScrollText>Cruelty-free</ScrollText>
      <ScrollText>Free shipping on $10+</ScrollText>
      <ScrollText>Detailed</ScrollText>
      <ScrollText>High Quality</ScrollText>
      <ScrollText>Durable</ScrollText>
      <ScrollText>New collections</ScrollText>
    </ScrollContainer>
  );
}

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;

  background-color: ${COLORS.scrollbar_bg};
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const ScrollContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  white-space: nowrap;
  font-size: 24px;
  font-weight: bold;
  animation: ${scroll} 30s linear infinite; 
`;

const ScrollText = styled.div`
  display: inline-block;
  padding-right: 6em;
`;

export default ScrollingText;