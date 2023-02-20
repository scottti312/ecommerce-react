import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const ScrollingText = () => {
  return (
    <ScrollWrapper>
      <ScrollContainer>
        <ScrollText>Here is some scrolling text!</ScrollText>
        <ScrollText>Hello world!</ScrollText>
        <ScrollText>Bedding</ScrollText>
        <ScrollText>Bread</ScrollText>
        <ScrollText>Clothes</ScrollText>
        <ScrollText>Shampoo</ScrollText>
        <ScrollText>Love</ScrollText>
        <ScrollText>Couple</ScrollText>
      </ScrollContainer>
      <ScrollContainer>
        <ScrollText>Here is some scrolling text!</ScrollText>
        <ScrollText>Hello world!</ScrollText>
        <ScrollText>Bedding</ScrollText>
        <ScrollText>Bread</ScrollText>
        <ScrollText>Clothes</ScrollText>
        <ScrollText>Shampoo</ScrollText>
        <ScrollText>Love</ScrollText>
        <ScrollText>Couple</ScrollText>
      </ScrollContainer>
      <ScrollContainer>
        <ScrollText>Here is some scrolling text!</ScrollText>
        <ScrollText>Hello world!</ScrollText>
        <ScrollText>Bedding</ScrollText>
        <ScrollText>Bread</ScrollText>
        <ScrollText>Clothes</ScrollText>
        <ScrollText>Shampoo</ScrollText>
        <ScrollText>Love</ScrollText>
        <ScrollText>Couple</ScrollText>
      </ScrollContainer>
      <ScrollContainer>
        <ScrollText>Here is some scrolling text!</ScrollText>
        <ScrollText>Hello world!</ScrollText>
        <ScrollText>Bedding</ScrollText>
        <ScrollText>Bread</ScrollText>
        <ScrollText>Clothes</ScrollText>
        <ScrollText>Shampoo</ScrollText>
        <ScrollText>Love</ScrollText>
        <ScrollText>Couple</ScrollText>
      </ScrollContainer>
    </ScrollWrapper>
  );
};

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
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 24px;
  font-weight: bold;
  animation: ${scroll} 20s linear infinite; 
`;

const ScrollText = styled.div`
  display: inline-block;
  padding-right: 60px;
`;

export default ScrollingText;