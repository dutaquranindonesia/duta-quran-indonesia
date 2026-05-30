"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Icosahedron, Octahedron, Dodecahedron } from "@react-three/drei";
import * as THREE from "three";

function AnimatedObjects() {
  const icoRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const dodecaRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (icoRef.current) {
      icoRef.current.rotation.x += delta * 0.12;
      icoRef.current.rotation.y += delta * 0.18;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x -= delta * 0.15;
      octaRef.current.rotation.z += delta * 0.2;
    }
    if (dodecaRef.current) {
      dodecaRef.current.rotation.y += delta * 0.16;
    }
  });

  return (
    <group>
      {/* Icosahedron */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.1}>
        <Icosahedron ref={icoRef} args={[1.2, 1]} position={[2.5, 1, 0]}>
          <meshStandardMaterial color="#166534" metalness={0.6} roughness={0.2} wireframe={false} />
        </Icosahedron>
      </Float>

      {/* Octahedron */}
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.9}>
        <Octahedron ref={octaRef} args={[1, 0]} position={[-3, 0, 0]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.85} roughness={0.15} />
        </Octahedron>
      </Float>

      {/* Dodecahedron */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={1.3}>
        <Dodecahedron ref={dodecaRef} args={[0.9, 0]} position={[0, -2, 0]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.75} roughness={0.2} />
        </Dodecahedron>
      </Float>

      {/* More Polyhedrons */}
      {[...Array(5)].map((_, i) => (
        <Float key={i} speed={2.5 + i * 0.3} rotationIntensity={0.6} floatIntensity={1.4}>
          <Octahedron args={[0.4, 0]} position={[
            (i - 2) * 1.8, i % 2 === 0 ? 3.2 : -2.5, -0.5 + i]}>
            <meshStandardMaterial color={i % 2 === 0 ? "#15803d" : "#fbbf24"} metalness={0.65} roughness={0.25} />
          </Octahedron>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeSceneGallery() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={1.1} />
        <pointLight position={[9, 9, 9]} intensity={2.8} color="#fbbf24" />
        <pointLight position={[-9, -9, -9]} intensity={2.2} color="#166534" />
        <directionalLight position={[0, 11, 6]} intensity={1.8} color="#ffffff" />
        <Stars radius={190} depth={95} count={13000} factor={5.8} saturation={0} fade speed={1.9} />
        <AnimatedObjects />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.75} />
      </Canvas>
    </div>
  );
}
