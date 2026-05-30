"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Sphere, TorusKnot, Box } from "@react-three/drei";
import * as THREE from "three";

function AnimatedObjects() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const quranRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.2;
      torusRef.current.rotation.y += delta * 0.3;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x -= delta * 0.15;
      sphereRef.current.rotation.z += delta * 0.25;
    }
    if (quranRef.current) {
      quranRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Torus Knot Emas BESAR */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
        <TorusKnot ref={torusRef} args={[3, 0.7, 250, 50]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.95} roughness={0.05} />
        </TorusKnot>
      </Float>

      {/* Bola Hijau BESAR */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.9}>
        <Sphere ref={sphereRef} args={[1.8, 80, 80]} position={[4.5, 2.5, 0]}>
          <meshStandardMaterial color="#166534" metalness={0.5} roughness={0.2} />
        </Sphere>
      </Float>

      {/* Simbol Al-Qur'an BESAR */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.7}>
        <group ref={quranRef} position={[-4.5, -1.5, 0]}>
          <Box args={[2.2, 3, 0.3]}>
            <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.1} />
          </Box>
          <Box args={[2.1, 2.9, 0.2]} position={[0, 0, 0.15]}>
            <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.2} />
          </Box>
          <Box args={[1.2, 0.08, 0.03]} position={[0, 1.1, 0.2]}>
            <meshStandardMaterial color="#d97706" metalness={0.9} roughness={0.05} />
          </Box>
        </group>
      </Float>

      {/* Bola-bola kecil yang banyak */}
      <Float speed={3.5} rotationIntensity={0.9} floatIntensity={1.4}>
        <Sphere args={[0.6, 40, 40]} position={[0, 4, 2]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.7} roughness={0.15} />
        </Sphere>
      </Float>
      <Float speed={2.8} rotationIntensity={0.7} floatIntensity={1.1}>
        <Sphere args={[0.5, 32, 32]} position={[-3, 3, 1]}>
          <meshStandardMaterial color="#15803d" metalness={0.5} roughness={0.25} />
        </Sphere>
      </Float>
      <Float speed={3.2} rotationIntensity={0.8} floatIntensity={1.3}>
        <Sphere args={[0.45, 32, 32]} position={[3, -2.5, 0.5]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.1} />
        </Sphere>
      </Float>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#fbbf24" />
        <pointLight position={[-10, -10, -10]} intensity={2.5} color="#166534" />
        <pointLight position={[0, 8, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[0, 12, 8]} intensity={2} color="#ffffff" />
        <Stars radius={200} depth={100} count={15000} factor={6} saturation={0} fade speed={2} />
        <AnimatedObjects />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}