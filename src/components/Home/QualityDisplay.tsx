import styled, { css } from "styled-components/macro";
import { COLORS } from "../../colors";
import Products from "../../util/Products";

const QualityDisplay = () => {
  const { pizza, frappe, egg, taco, nigiri, icecream, watermelon, cherry } = Products;
  return (
    <>
      <QualityContainer>
        <QualityWrapper>
          <LeftStickers>
            <Pizza src={pizza.src} />
            <Frappe src={frappe.src} />
            <Nigiri src={nigiri.src} />
            <Taco src={taco.src} />
          </LeftStickers>
          <TextWrapper>
            <Text>
              Only the{"\n"}
              <Best>BEST</Best> stickers{"\n"}
              on the{"\n"}
              internet{"\n"}
            </Text>
          </TextWrapper>
          <RightStickers>
            <Egg src={egg.src} />
            <Icecream src={icecream.src} />
            <Watermelon src={watermelon.src} />
            <Cherry src={cherry.src} />
          </RightStickers>
        </QualityWrapper>
      </QualityContainer>
    </>
  );
}

const QualityContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: ${COLORS.quality_bg};
`;

const QualityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;


const TextWrapper = styled.div`
  text-align: center;
`;

const Text = styled.div`
  color: white;
  font-size: clamp(2em, 3vw, 3em);
  white-space: pre-line;
`;

const Best = styled.div`
  display: inline;
  background: linear-gradient(to right, #8484ff, #72c7ff , #87fc87, #fd8fc6, #8787ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 3s ease-in-out infinite alternate;
  background-size: 400% 100%;
  @keyframes rainbow_animation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`;

const Stickers = css`
  display: flex;
  flex-direction: column;
`;

const LeftStickers = styled.div`
  ${Stickers};
  width: 0px;
`;
const RightStickers = styled.div`
  ${Stickers};
  width: 0px;
`;

const images = css`
  position: relative;
  animation: pulse 2s infinite alternate ease-in-out;
  @keyframes pulse {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(20%);
    }
  }
`;

const Pizza = styled.img`
  ${images};
  right: 400px;
  top: -10px;
  width: 250px;
  height: 250px;
  rotate: 10deg;
  @media screen and (max-width: 1300px) {
    width: 125px;
    height: 125px;
    right: 0px;
    top: -250px;
  }
`;

const Frappe = styled.img`
  ${images};
  right: 500px;
  top: 90px;
  width: 200px;
  height: 200px;
  rotate: -20deg;
  @media screen and (max-width: 1300px) {
    width: 100px;
    height: 100px;
    right: 20px;
    top: -170px;
  }
`;

const Nigiri = styled.img`
  ${images};
  top: -40px;
  right: 250px;
  width: 140px;
  height: 140px;
  rotate: 10deg;
  @media screen and (max-width: 1300px) {
    width: 70px;
    height: 70px;
    right: 40px;
    top: 80px;
  }
`;

const Taco = styled.img`
  ${images};
  right: 400px;
  top: -40px;
  width: 200px;
  height: 200px;
  rotate: 10deg;
  @media screen and (max-width: 1300px) {
    width: 100px;
    height: 100px;
    right: 0px;
    top: 140px;
  }
`;

const Egg = styled.img`
  ${images};
  left: 150px;
  top: -70px;
  width: 150px;
  height: 150px;
  rotate: -10deg;
  @media screen and (max-width: 1300px) {
    width: 75px;
    height: 75px;
    left: -90px;
    top: -150px;
  }
`;

const Icecream = styled.img`
  ${images};
  left: 300px;
  top: -50px;
  width: 180px;
  height: 180px;
  rotate: -10deg;
  @media screen and (max-width: 1300px) {
    width: 70px;
    height: 70px;
    left: -30px;
    top: -110px;
  }
`;

const Watermelon = styled.img`
  ${images};
  left: 130px;
  width: 180px;
  height: 180px;
  rotate: 10deg;
  @media screen and (max-width: 1300px) {
    width: 80px;
    height: 80px;
    left: -30px;
    top: 80px;
  }
`;

const Cherry = styled.img`
  ${images};
  top: 0px;
  left: 350px;
  width: 140px;
  height: 140px;
  rotate: 10deg;
  @media screen and (max-width: 1300px) {
    width: 70px;
    height: 70px;
    left: -60px;
    top: 250px;
  }
`;



export default QualityDisplay;