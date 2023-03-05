import { Suspense } from 'react';
import styled from 'styled-components/macro';
import Yaught from '../three/Yaught';

const About = () => {

  return (
    <AboutWrapper>
      <Suspense fallback={<div>loading...</div>}>
        <Yaught url={"newfood.gltf"}/>
      </Suspense>
      <AboutTitle>About Us</AboutTitle>
      <AboutDescription>Sticker Avenue is an online store that specializes in selling stickers of all kinds. Out inventory includes a wide variety of high-quality stickers that can be used to decorate laptops, water bottles, journals, and more. Sticker Avenue offers unique designs and themes with new designs frequently added to our collection. With fast and reliable shipping, Sticker Avenue is a great choice for anyone looking to add a little personality to their belongings with fun, colorful stickers. (Not a real store!!)</AboutDescription>
    </AboutWrapper>
  );
}


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