import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../../colors';
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
      <ScrollText>
        <i className="fa-solid fa-check" style={{marginRight: "10px"}}></i>
        Affordable
      </ScrollText>
      <ScrollText>
        <i className="fa-solid fa-check" style={{marginRight: "10px"}}></i>
        Cruelty-free</ScrollText>
      <ScrollText>
        <i className="fa-solid fa-check" style={{marginRight: "10px"}}></i>
        Free shipping on $10+</ScrollText>
      <ScrollText>
        <i className="fa-solid fa-check" style={{marginRight: "10px"}}></i>
        Detailed</ScrollText>
      <ScrollText>
        <i className="fa-solid fa-check" style={{marginRight: "10px"}}></i>
        High Quality</ScrollText>
      <ScrollText>
        <i className="fa-solid fa-check" style={{marginRight: "10px"}}></i>
        Durable</ScrollText>
      <ScrollText>
        <i className="fa-solid fa-check" style={{marginRight: "10px"}}></i>
        New collections</ScrollText>
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