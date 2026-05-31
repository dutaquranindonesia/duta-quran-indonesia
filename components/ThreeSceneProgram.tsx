"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Box, Cylinder, Torus, Cone } from "@react-three/drei";
import * as THREE from "three";

function AnimatedObjects() {
  const book1Ref = useRef<THREE.Group>(null);
  const book2Ref = useRef<THREE.Group>(null);
  const diplomaRef = useRef<THREE.Mesh>(null);
  const capRef = useRef<THREE.Group>(null);
  const heartRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (book1Ref.current) {
      book1Ref.current.rotation.y += delta * 0.15;
      book1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.3;
    }
    if (book2Ref.current) {
      book2Ref.current.rotation.y -= delta * 0.12;
      book2Ref.current.position.y = Math.cos(state.clock.elapsedTime * 1.3) * 0.25;
    }
    if (diplomaRef.current) {
      diplomaRef.current.rotation.z += delta * 0.08;
    }
    if (capRef.current) {
      capRef.current.rotation.y += delta * 0.1;
      capRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.8) * 0.2;
    }
    if (heartRef.current) {
      heartRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.15);
    }
  });

  return (
    <group>
      {/* Buku Al-Qur'an 1 */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={book1Ref} position={[-3.5, 1.5, 0]}>
          <Box args={[2, 2.6, 0.4]}>
            <meshStandardMaterial color="#fbbf24" metalness={0.85} roughness={0.1} />
          </Box>
          <Box args={[1.9, 2.5, 0.25]} position={[0, 0, 0.2]}>
            <meshStandardMaterial color="#fef3c7" metalness={0.2} roughness={0.3} />
          </Box>
        </group>
      </Float>

      {/* Buku Al-Qur'an 2 */}
      <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.4}>
        <group ref={book2Ref} position={[3.5, -1.5, 0]}>
          <Box args={[1.8, 2.3, 0.35]}>
            <meshStandardMaterial color="#166534" metalness={0.6} roughness={0.15} />
          </Box>
          <Box args={[1.7, 2.2, 0.2]} position={[0, 0, 0.18]}>
            <meshStandardMaterial color="#f0fdf4" metalness={0.15} roughness={0.35} />
          </Box>
        </group>
      </Float>

      {/* Diploma/Sertifikat */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
        <Torus ref={diplomaRef} args={[1.5, 0.15, 32, 100]} position={[0, 2.5, 0]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.05} />
        </Torus>
      </Float>

      {/* Topi Wisuda */}
      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={capRef} position={[-3, -2, 0]}>
          <Cylinder args={[1.2, 1.2, 0.1, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#166534" metalness={0.7} roughness={0.2} />
          </Cylinder>
          <Box args={[2.2, 2.2, 0.08]} position={[0, 0.3, 0]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="#166534" metalness={0.7} roughness={0.2} />
          </Box>
          <Torus args={[0.3, 0.03, 16, 100]} position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#fbbf24" metalness={0.95} roughness={0.05} />
          </Torus>
        </group>
      </Float>

      {/* Hati (Simbol Kepedulian) */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.7}>
        <TorusKnot ref={heartRef} args={[0.8, 0.3, 128, 32]} position={[3, 2, 0]}>
          <meshStandardMaterial color="#ef4444" metalness={0.6} roughness={0.2} />
        </TorusKnot>
      </Float>

      {/* Bintang-bintang kecil */}
      {[...Array(15)].map((_, i) => (
        <Float key={i} speed={2 + Math.random() * 2} rotationIntensity={0.5 + Math.random() * 0.5} floatIntensity={0.8 + Math.random() * 0.6}>
          <Box 
            args={[0.15 + Math.random() * 0.2, 0.15 + Math.random() * 0.2, 0.15 + Math.random() * 0.2]} 
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 4
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#166534" : "#ffffff"} 
              metalness={0.5 + Math.random() * 0.4} 
              roughness={0.1 + Math.random() * 0.3} 
            />
          </Box>
        </Float>
      ))}
    </group>
  );
}

function TorusKnot({ args, ...props }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  return (
    <mesh ref={meshRef} {...props}>
      <torusKnotGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function ThreeSceneProgram() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 11], fov: 45 }}>
        <ambientLight intensity={1.3} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#fbbf24" />
        <pointLight position={[-10, -10, -10]} intensity={2.5} color="#166534" />
        <pointLight position={[0, 8, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[0, 12, 8]} intensity={2} color="#ffffff" />
        <Stars radius={200} depth={100} count={12000} factor={5} saturation={0} fade speed={1.5} />
        <AnimatedObjects />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
