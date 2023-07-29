import { startTransition, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh } from 'three';
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

interface YaughtProps {
  url: string;
}


type YaughtRefType = {
  current: Object3D | undefined;
};

function Yaught({ url }: YaughtProps) {
  const gltf = useLoader(GLTFLoader, url);
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null)
  // Hold state for hovered and clicked events
  const [clicked, setClicked] = useState(false);

  const yaughtRef: YaughtRefType = useRef();

  useFrame(() => {
  if (clicked) return;
    if (ref.current) {
      ref.current.rotation.z += 0.005;
    }
  });

  const degToRad = (degrees: number) => (Math.PI / 180) * degrees;

  // function CameraHelper() {
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   return <group position={[0,0,1.5]}>
  //     <cameraHelper args={[camera]} />
  //   </group>
  // }

  // function LightHelper() {
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   return <group position={[3,3,8]}>
  //     <cameraHelper args={[camera]} />
  //   </group>
  // }

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        ref={ref}
        // scale={clicked ? 1.5 : 1}
        onClick={(event) => startTransition(() => setClicked(true))}
      >
        <primitive
          object={gltf.scene}
          rotation={[degToRad(180), degToRad(90), degToRad(90)]}
        />
      </mesh>
      {/* <CameraHelper /> */}
      {/* <LightHelper /> */}
      <OrbitControls 
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        enablePan={false}
        />
    </>
  )
}



export default Yaught;