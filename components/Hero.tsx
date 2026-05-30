"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ThreeScene from "./ThreeScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background 3D Canvas */}
      <ThreeScene />

      {/* Gradient overlay LEBIH TRANSPARAN agar 3D terlihat */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 via-emerald-950/60 to-emerald-950" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">Komunitas Penghafal Al-Qur'an</p>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 leading-tight">
            <span className="text-gold-gradient">Duta Qur'an</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Indonesia</h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Semangat Profesional Lillahita'ala<br />
            Membangun Generasi Qur'ani yang Berdaya
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-4 bg-gold-500 text-emerald-950 rounded-full font-bold text-lg hover:bg-gold-400 transition-colors"
            >
              Gabung Komunitas
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-gold-500 text-gold-500 rounded-full font-bold text-lg hover:bg-gold-500 hover:text-emerald-950 transition-all"
            >
              Tentang Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}