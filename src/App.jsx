import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { SphereGeometry } from 'three';
function SpinningCube() {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} position={[-2, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}


function SpinningSphere() {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}
function SpinningTorus() {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} position={[3, 0, 0]}>
      <torusGeometry args={[1, 0.2, 32, 200]} /> // thinner, smoother donut
      <meshStandardMaterial color="pink" metalness={0.4 } roughness={0} />
    </mesh>
  );
}
function SpinningCone() {
  const ref = useRef();
  useFrame(() => { ref.current.rotation.y += 0.01 });
  return (
    <mesh ref={ref} position={[6, 0, 0]}>
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
    <mesh ref={ref} position={[7.5, 0, 0]}>
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
      rotation={[-Math.PI/2,0,0]}  // lay flat
      position={[0,-1,0]}          // drop under shapes
      receiveShadow                // plane go show shadow
    >
      <planeGeometry args={[10,10]} />
      <meshStandardMaterial color="#777" />
    </mesh>
  )
}

export default function App() {
  return (
   <Canvas
  shadows                      // turn on shadow computing
  camera={{ position: [0,5,10], fov: 50 }}
  style={{ height: '100vh', background: '#ececec' }}
>

    
      <ambientLight intensity={0.5} />
      <directionalLight 
      position={[2, 5, 2]}
      castShadow                     
        shadow-mapSize-width={1024}    // sharpen shadow
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
      />
      <OrbitControls />
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
