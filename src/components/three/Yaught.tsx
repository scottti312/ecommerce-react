import { startTransition, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Mesh } from 'three';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import styled from 'styled-components/macro';
import { OrbitControls } from '@react-three/drei';

interface YaughtProps {
  url: string;
}

function Yaught({ url }: YaughtProps) {
  const gltf = useLoader(GLTFLoader, url);
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

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
    <Canvas camera={{ position: [0, 0, 1] }}>
      <ambientLight intensity={0.3} />
      <spotLight position={[4, 4, 8]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        ref={ref}
        // scale={clicked ? 1.5 : 1}
        onClick={(event) => startTransition(() => click(!clicked))}
        onPointerOver={(event) => startTransition(() => hover(true))}
        onPointerOut={(event) => startTransition(() => hover(false))}>
        <primitive
          object={gltf.scene}
          rotation={[degToRad(180), degToRad(90), degToRad(90)]}
        />
        {/* <icosahedronGeometry args={[1, 0]} /> */}
        {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
      </mesh>
      {/* <CameraHelper /> */}
      {/* <LightHelper /> */}
      <OrbitControls />
    </Canvas>
  )
}



export default Yaught;