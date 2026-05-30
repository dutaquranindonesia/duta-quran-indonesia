"use client";

import { motion } from "framer-motion";

export default function FloatingParticles() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const animationDuration = 10 + Math.random() * 20;
        const delay = Math.random() * 10;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              background: "radial-gradient(circle, #d4af37 0%, transparent 70%)",
              boxShadow: "0 0 10px #d4af37, 0 0 20px #d4af37",
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 30, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: animationDuration,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}