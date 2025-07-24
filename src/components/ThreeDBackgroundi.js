"use client";
import { Canvas, extend } from '@react-three/fiber';
import { Float, Environment, OrbitControls } from '@react-three/drei';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import * as THREE from 'three';
import { useEffect, useMemo, useState } from 'react';

// Extend Three.js with TextGeometry
extend({ TextGeometry });

function CodeBrackets() {
  const [font, setFont] = useState(null);

  useEffect(() => {
    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (loadedFont) => {
      setFont(loadedFont);
    });
  }, []);

  return font ? (
    <Float speed={2} rotationIntensity={1}>
      <mesh position={[2, 1, 0]}>
        <textGeometry args={['{}', { font, size: 0.5, height: 0.1 }]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </Float>
  ) : null;
}

function DeveloperScene() {
  return (
    <>
      {/* Floating laptop */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
        <mesh>
          <boxGeometry args={[2, 0.1, 1.5]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        <mesh position={[0, -0.3, -0.7]}>
          <boxGeometry args={[1.8, 0.1, 0.1]} />
          <meshStandardMaterial color="#1e40af" />
        </mesh>
      </Float>

      <CodeBrackets />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
}

export default function ThreeDBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ alpha: false }}
      >
        <DeveloperScene />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-gray-900/30" />
    </div>
  );
}