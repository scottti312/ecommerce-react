import styled from 'styled-components/macro';
import { Canvas } from 'react-three-fiber';
import Yaught from '../three/Yaught';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const About = () => {
  const degToRad = (degrees: number) => (Math.PI / 180) * degrees;

  function CameraHelper() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    return <group position={[0,0,1.5]}>
      <cameraHelper args={[camera]} />
    </group>
  }

  function LightHelper() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    return <group position={[3,3,8]}>
      <cameraHelper args={[camera]} />
    </group>
  }

  return (
    <AboutWrapper>
      <CanvasWrapper>
        <Canvas camera={{position: [0, 0, 1.5]}}>
          <ambientLight intensity={0.3} />
          <spotLight position={[4, 4, 8]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Yaught url="newfood.gltf" />
          {/* <CameraHelper /> */}
          {/* <LightHelper /> */}
          <OrbitControls />
        </Canvas>

      </CanvasWrapper>

      <AboutTitle>About Us</AboutTitle>
      <p>Sticker Avenue is an online store that specializes in selling stickers of all kinds. Out inventory includes a wide variety of high-quality stickers that can be used to decorate laptops, water bottles, journals, and more. Sticker Avenue offers unique designs and themes with new designs frequently added to our collection. With fast and reliable shipping, Sticker Avenue is a great choice for anyone looking to add a little personality to their belongings with fun, colorful stickers. (Not a real store!!)</p>
    </AboutWrapper>
  );
}

const CanvasWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: black;
`

const AboutWrapper = styled.div`
  padding: 100px;
`;

const AboutTitle = styled.h1`
`;

export default About;