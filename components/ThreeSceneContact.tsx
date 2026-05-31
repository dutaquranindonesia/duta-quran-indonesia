"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Icosahedron, Ring, Octahedron, Dodecahedron } from "@react-three/drei";
import * as THREE from "three";

function AnimatedObjects() {
  const message1Ref = useRef<THREE.Mesh>(null);
  const message2Ref = useRef<THREE.Mesh>(null);
  const message3Ref = useRef<THREE.Mesh>(null);
  const globeRef = useRef<THREE.Mesh>(null);
  const connectRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (message1Ref.current) {
      message1Ref.current.rotation.x += delta * 0.1;
      message1Ref.current.rotation.y += delta * 0.15;
      message1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.35;
    }
    if (message2Ref.current) {
      message2Ref.current.rotation.x -= delta * 0.12;
      message2Ref.current.rotation.y += delta * 0.1;
      message2Ref.current.position.y = Math.cos(state.clock.elapsedTime * 1.4) * 0.3;
    }
    if (message3Ref.current) {
      message3Ref.current.rotation.x += delta * 0.08;
      message3Ref.current.rotation.y -= delta * 0.12;
      message3Ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.6) * 0.25;
    }
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.06;
    }
    if (connectRef.current) {
      connectRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Pesan/Kontak 1 */}
      <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.6}>
        <Icosahedron ref={message1Ref} args={[1.2, 1]} position={[-4, 2, 0]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.85} roughness={0.1} wireframe={false} />
        </Icosahedron>
      </Float>

      {/* Pesan/Kontak 2 */}
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.55}>
        <Octahedron ref={message2Ref} args={[1, 0]} position={[4, -1.5, 0]}>
          <meshStandardMaterial color="#166534" metalness={0.75} roughness={0.15} />
        </Octahedron>
      </Float>

      {/* Pesan/Kontak 3 */}
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.65}>
        <Dodecahedron ref={message3Ref} args={[0.9, 0]} position={[-2.5, -2.5, 0]}>
          <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.2} />
        </Dodecahedron>
      </Float>

      {/* Globe/Dunia */}
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <Icosahedron ref={globeRef} args={[1.8, 1]} position={[0, 1, 0]}>
          <meshStandardMaterial color="#166534" metalness={0.6} roughness={0.25} wireframe />
        </Icosahedron>
        <Icosahedron args={[1.5, 0]} position={[0, 1, 0]}>
          <meshStandardMaterial color="#22c55e" metalness={0.4} roughness={0.35} transparent opacity={0.7} />
        </Icosahedron>
      </Float>

      {/* Cincin Koneksi */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.7}>
        <Ring ref={connectRef} args={[1.8, 2.2, 64]} position={[3, 2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.08} />
        </Ring>
      </Float>

      {/* Partikel-partikel kecil */}
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={1.5 + Math.random() * 2.5} rotationIntensity={0.4 + Math.random() * 0.6} floatIntensity={0.6 + Math.random() * 0.8}>
          <Ring 
            args={[0.08 + Math.random() * 0.12, 0.15 + Math.random() * 0.2, 16 + Math.floor(Math.random() * 16)]}
            position={[
              (Math.random() - 0.5) * 11,
              (Math.random() - 0.5) * 9,
              (Math.random() - 0.5) * 5
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
          >
            <meshStandardMaterial 
              color={i % 4 === 0 ? "#fbbf24" : i % 4 === 1 ? "#166534" : i % 4 === 2 ? "#3b82f6" : "#ffffff"} 
              metalness={0.5 + Math.random() * 0.4} 
              roughness={0.1 + Math.random() * 0.3} 
            />
          </Ring>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeSceneContact() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 11], fov: 45 }}>
        <ambientLight intensity={1.4} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#fbbf24" />
        <pointLight position={[-10, -10, -10]} intensity={2.5} color="#166534" />
        <pointLight position={[0, 8, 5]} intensity={2} color="#3b82f6" />
        <pointLight position={[8, -5, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[0, 12, 8]} intensity={2} color="#ffffff" />
        <Stars radius={200} depth={100} count={14000} factor={5.5} saturation={0} fade speed={1.8} />
        <AnimatedObjects />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
    </div>
  );
}
