'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';

function Mountains() {
  return (
    <mesh position={[0, -2, -5]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshStandardMaterial
        color="#1a472a"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

function Trees() {
  return (
    <>
      {[...Array(50)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 80,
            0,
            (Math.random() - 0.5) * 80,
          ]}
        >
          <coneGeometry args={[0.5, 2, 8]} />
          <meshStandardMaterial
            color="#2d5a27"
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-emerald-900 via-green-900 to-emerald-950">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Mountains />
          <Trees />
          <Stars 
            radius={100} 
            depth={50} 
            count={2000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1}
          />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
} 