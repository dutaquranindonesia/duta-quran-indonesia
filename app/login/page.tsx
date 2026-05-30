"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Mail, Lock, User } from "lucide-react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="max-w-md w-full mx-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-900/60 backdrop-blur-sm p-8 rounded-3xl border border-emerald-800/50"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-serif font-bold text-gold-gradient mb-2">
                {isLogin ? "Masuk Akun" : "Daftar Akun"}
              </h1>
              <p className="text-gray-400">
                {isLogin ? "Selamat datang kembali" : "Bergabung bersama kami"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-gray-300 mb-2">Nama Lengkap</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold-400" size={20} />
                    <input
                      type="text"
                      className="w-full pl-12 pr-4 py-3 bg-emerald-950 border border-emerald-800 rounded-xl text-white focus:border-gold-500 outline-none transition-colors"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold-400" size={20} />
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-3 bg-emerald-950 border border-emerald-800 rounded-xl text-white focus:border-gold-500 outline-none transition-colors"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold-400" size={20} />
                  <input
                    type="password"
                    className="w-full pl-12 pr-4 py-3 bg-emerald-950 border border-emerald-800 rounded-xl text-white focus:border-gold-500 outline-none transition-colors"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-emerald-950 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
              >
                {isLogin ? "Masuk" : "Daftar"}
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-gray-400">
                {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-gold-400 hover:underline font-medium"
                >
                  {isLogin ? "Daftar sekarang" : "Masuk disini"}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}