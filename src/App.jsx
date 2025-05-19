import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import React, { useRef } from 'react';
import { SphereGeometry } from 'three';
function SpinningCube() {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  const texture = useTexture('/textures/wood.jpg');
  return (
    <mesh ref={ref} position={[-2, 0, 0]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}


function SpinningSphere() {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
   const texture = useTexture('/textures/wood.jpg');

  return (
    <mesh ref={ref} position={[0, 0, 0]} castShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
function SpinningTorus() {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} position={[3, 0, 0]} castShadow>
      <torusGeometry args={[1, 0.2, 32, 200]} /> // thinner, smoother donut
      <meshStandardMaterial color="pink" metalness={0.4 } roughness={0} />
    </mesh>
  );
}
function SpinningCone() {
  const ref = useRef();
  useFrame(() => { ref.current.rotation.y += 0.01 });
  return (
    <mesh ref={ref} position={[6, 0, 0]} castShadow>
      {/* coneGeometry args: [radius, height, radialSegments] */}
      <coneGeometry args={[0.7, 2, 32]} />
      {/* MeshBasicMaterial no shading from lights */}
      <meshBasicMaterial color="limegreen" />
    </mesh>
  );
}

function SpinningCylinder() {
  const ref = useRef();
  useFrame(() => { ref.current.rotation.y += 0.01 });
  return (
    <mesh ref={ref} position={[7.5, 0, 0]} castShadow>
      {/* cylinderGeometry args: [topRadius, bottomRadius, height, radialSegments] */}
      <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
      {/* MeshPhongMaterial gives shiny highlights */}
      <meshPhongMaterial color="hotpink" shininess={21} />
    </mesh>
  );
}
function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}  // lay plane flat on ground
      position={[0, -1, 0]}            // drop plane 1 unit down
      receiveShadow                   // let plane catch shadows
    >
      <planeGeometry args={[10, 10]} />           {/* 10×10 floor */}
      <meshStandardMaterial color="#777777" />    {/* grey floor */}
    </mesh>
  );
}

export default function App() {
  return (
   <Canvas
  shadows                      // turn on shadow computing
  camera={{ position: [0,5,10], fov: 50 }}
  style={{ height: '100vh', background: '#ececec' }}
>

    
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-near={0.5} shadow-camera-far={20} />
      <OrbitControls />
        <Ground />
 castShadow
      <SpinningCube />
      <SpinningSphere />
      <SpinningTorus />
      <SpinningCone />
      <SpinningCylinder />
    </Canvas>
  );
}



// src/App.jsx
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// export default function App() {
//   return (
//     <Canvas style={{ height: '100vh', background: '#ececec' }}>
//       {/* Ambient light shines everywhere */}
//       <ambientLight intensity={0.5} />
//       {/* Directional light like sun */}
//       <directionalLight position={[2, 5, 2]} />
//       {/* Allow us to drag/rotate scene */}
//       <OrbitControls />
//       {/*  🟢 Next: add shapes here */}
//     </Canvas>
//   );
// }
