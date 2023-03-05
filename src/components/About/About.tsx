import { Suspense } from 'react';
import styled from 'styled-components/macro';
import Yaught from '../three/Yaught';

const About = () => {

  return (
    <AboutWrapper>
      <Suspense fallback={<div>loading...</div>}>
        <CanvasWrapper>
          <Yaught url={"newfood.gltf"} />
        </CanvasWrapper>
      </Suspense>
      <AboutTitle>About Us</AboutTitle>
      <AboutDescription>Sticker Avenue is an online store that specializes in selling stickers of all kinds. Out inventory includes a wide variety of high-quality stickers that can be used to decorate laptops, water bottles, journals, and more. Sticker Avenue offers unique designs and themes with new designs frequently added to our collection. With fast and reliable shipping, Sticker Avenue is a great choice for anyone looking to add a little personality to their belongings with fun, colorful stickers. (Not a real store!!)</AboutDescription>
    </AboutWrapper>
  );
}


const CanvasWrapper = styled.div`
  width: 500px;
  height: 500px;
  @media screen and (max-width: 550px) {
    width: 300px;
    height: 300px;
  }
  border-radius: 35px;
  background-color: white;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AboutTitle = styled.h1`
  margin-top: 50px;
`;

const AboutDescription = styled.div`
  max-width: 1000px;
  padding: 40px;
`;

export default About;