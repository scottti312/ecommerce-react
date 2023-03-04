import { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface YaughtProps {
  url: string;
}

function Yaught({url}: YaughtProps) {
  const gltf = useLoader(GLTFLoader, url);
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) {
      // ref.current.rotation.x += delta;
    };
  })

  const degToRad = (degrees: number) => (Math.PI / 180) * degrees;

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      rotation={[Math.PI / 2, 0, 0]}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
        <primitive
          object={gltf.scene}
          rotation={[degToRad(180), degToRad(90), degToRad(90)]}
        />
      {/* <icosahedronGeometry args={[1, 0]} /> */}
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
    </mesh>
  )
}

export default Yaught;