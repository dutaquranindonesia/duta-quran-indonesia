"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Box, Cylinder, Torus } from "@react-three/drei";
import * as THREE from "three";

function AnimatedObjects() {
  const cylinderRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (cylinderRef.current) {
      cylinderRef.current.rotation.x += delta * 0.15;
      cylinderRef.current.rotation.y += delta * 0.2;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x -= delta * 0.2;
      boxRef.current.rotation.z += delta * 0.15;
    }
    if (torusRef.current) {
      torusRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group>
      {/* Cylinder Emas */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
        <Cylinder ref={cylinderRef} args={[0.8, 0.8, 2, 32]} position={[3, 1.5, 0]}>
          <meshStandardMaterial color="#166534" metalness={0.5} roughness={0.3} />
        </Cylinder>
      </Float>

      {/* Cube Berputar */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[-2.5, -1, 0]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
        </Box>
      </Float>

      {/* Torus */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <Torus ref={torusRef} args={[1.2, 0.3, 16, 100]} position={[0, 2.5, 0]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.7} roughness={0.2} />
        </Torus>
      </Float>

      {/* Small Decorations */}
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={3 + i * 0.2} rotationIntensity={0.5} floatIntensity={1.5}>
          <Box args={[0.3, 0.3, 0.3]} position={[
            (i - 3) * 2, i % 2 === 0 ? 3 : -2, -1 + i]}>
            <meshStandardMaterial color={i % 2 === 0 ? "#15803d" : "#fbbf24"} metalness={0.6} roughness={0.3} />
          </Box>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeSceneAbout() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={1} />
        <pointLight position={[8, 8, 8]} intensity={2.5} color="#fbbf24" />
        <pointLight position={[-8, -8, -8]} intensity={2} color="#166534" />
        <directionalLight position={[0, 10, 5]} intensity={1.5} color="#ffffff" />
        <Stars radius={180} depth={90} count={12000} factor={5.5} saturation={0} fade speed={1.8} />
        <AnimatedObjects />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
}
