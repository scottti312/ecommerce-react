import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Yaught from "../three/Yaught";
import "./showcasestyle.css";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"

const StunningShowcase = () => {
  return (
    <ShowcaseWrapper>
      <ShowcaseText>
        <RoughNotationGroup show={true}>
          <span>💎   </span>
          <RoughNotation type="underline" strokeWidth={2} order="1" animationDelay={500} animationDuration={800} color="#5dadec">Stunning. {"\n"}</RoughNotation>
          <span>🌱   </span>
          <RoughNotation type="underline" strokeWidth={2} order="2" animationDelay={500} animationDuration={800} color="#77b255">Sustainable.{"\n"}</RoughNotation>
          <span>✨   </span>
          <RoughNotation type="underline" strokeWidth={2} order="3" animationDelay={500} animationDuration={800} color="#ffac33">Stylish.{"\n"}</RoughNotation>
        </RoughNotationGroup>
      </ShowcaseText>
      <YaughtWrapper>
        <InteractiveNote>
          <InteractiveText>
            Interactive!
          </InteractiveText>
          <Doodle2 viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="doodle2" d="M84.1428 1.12604C68.4579 15.0432 48.2728 24.8484 26.7076 22.7737C20.393 22.1662 13.251 19.5041 7.51 16.6647C6.29685 16.0646 5.19832 15.2656 4.08583 14.4969C3.06981 13.7949 4.95423 22.296 5.12047 23.2959C6.89794 33.9863 5.2443 22.4385 4.04146 18.4653C3.10796 15.3818 1.13626 12.2911 0.701068 9.07517C0.350636 6.4856 5.49948 7.02736 7.26614 6.8582C9.08258 6.68426 20.8214 3.77937 19.2507 7.81152C16.4328 15.0458 10.9147 19.889 6.01223 25.5572" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          </Doodle2>

        </InteractiveNote>
        <CanvasWrapper>
          <Yaught url={"newfood.gltf"} />
        </CanvasWrapper>
      </YaughtWrapper>
    </ShowcaseWrapper>
  );
};

const ShowcaseWrapper = styled.div`
  padding: 80px 0 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1090px) {
    flex-direction: column;
    padding: 0 0 80px 0;
  }
`;

const Doodle2 = styled.svg`
  rotate: 180deg;
  transform: scaleY(-1);
  width: 90px;
  @media screen and (max-width: 660px) {
    display: none;
  }
`

const ShowcaseText = styled.div`
  font-size: 3.5em;
  white-space: pre-line;
  margin: 50px clamp(20px, 2vw, 400px) 50px 50px;
  min-width: 375px;
  line-height: 2em;
  @media screen and (max-width: 445px) {
    font-size: 3em;
  }
`;

const YaughtWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 660px) {
    flex-direction: column-reverse;
  }
`;

const InteractiveNote = styled.div`
  position: relative;
  display: flex;
  margin-right: 10px;
  flex-direction: column;
  align-items: center;
  top: 180px;
  @media screen and (max-width: 660px) {
    top: 20px;
  }
`;

const InteractiveText = styled.div`
  position: relative;
  font-size: 1.3em;
`;

const CanvasWrapper = styled.div`
  min-width: 500px;
  height: 500px;
  @media screen and (max-width: 550px) {
    width: 300px;
    height: 300px;
  }
  border-radius: 35px;
  background-color: white;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 552px) {
    min-width: 0px;
    width: 300px;
    height: 300px;
  }
`;

export default StunningShowcase;