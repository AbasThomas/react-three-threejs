// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// function Box() {
//   const meshRef = useRef();

//   useFrame(() => {
//     // This one go run every frame (like animation)
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.01; // Turn am small-small
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   );
// }

// function App() {
//   return (
//     <Canvas style={{ height: '100vh', background: '#1a1a1a' }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 2, 2]} />
//       <OrbitControls />
//       <Box />
//     </Canvas>
//   );
// }

// export default App;
// src/App.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function App() {
  return (
    <Canvas style={{ height: '100vh', background: '#ececec' }}>
      {/* Ambient light shines everywhere */}
      <ambientLight intensity={0.5} />
      {/* Directional light like sun */}
      <directionalLight position={[2, 5, 2]} />
      {/* Allow us to drag/rotate scene */}
      <OrbitControls />
      {/*  🟢 Next: add shapes here */}
    </Canvas>
  );
}
