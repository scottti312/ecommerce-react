import styled from 'styled-components/macro';
import Yaught from '../three/Yaught';

const About = () => {

  return (
    <AboutWrapper>
      <Yaught url={"newfood.gltf"}/>
      <AboutTitle>About Us</AboutTitle>
      <p>Sticker Avenue is an online store that specializes in selling stickers of all kinds. Out inventory includes a wide variety of high-quality stickers that can be used to decorate laptops, water bottles, journals, and more. Sticker Avenue offers unique designs and themes with new designs frequently added to our collection. With fast and reliable shipping, Sticker Avenue is a great choice for anyone looking to add a little personality to their belongings with fun, colorful stickers. (Not a real store!!)</p>
    </AboutWrapper>
  );
}


const AboutWrapper = styled.div`
  padding: 100px;
`;

const AboutTitle = styled.h1`
`;

export default About;