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
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
}
function SpinningCone() {
  const ref = useRef();
  useFrame(() => { ref.current.rotation.y += 0.01 });
  return (
    <mesh ref={ref} position={[6, 0, 0]}>
      {/* coneGeometry args: [radius, height, radialSegments] */}
      <coneGeometry args={[0.7, 1.5, 32]} />
      {/* MeshBasicMaterial no shading from lights */}
      <meshStandardMaterial color="limegreen" />
    </mesh>
  );
}
function SpinningCylinder() {
  const ref = useRef();
  useFrame(() => { ref.current.rotation.y += 0.01 });
  return (
    <mesh ref={ref} position={[2, 1.5, 0]}>
      {/* cylinderGeometry args: [topRadius, bottomRadius, height, radialSegments] */}
      <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
      {/* MeshPhongMaterial gives shiny highlights */}
      <meshPhongMaterial color="hotpink" shininess={100} />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', background: '#ececec' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      <OrbitControls />
      <SpinningCube />
      <SpinningSphere />
      <SpinningTorus />
      <SpinningCone />
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
