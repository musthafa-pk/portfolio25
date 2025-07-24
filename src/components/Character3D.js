"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  // Replace '/character.glb' with your 3D model path
  const { scene } = useGLTF('/character.glb');
  return <primitive object={scene} scale={0.8} position={[0, -1.5, 0]} />;
}

export default function Character3D() {
  return (
    <div className="w-full h-64 md:h-96">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model />
        <OrbitControls 
          enableZoom={false} 
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}