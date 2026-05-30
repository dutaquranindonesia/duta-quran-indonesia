"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Settings, Upload, LayoutDashboard, Users, Image } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("profil");

  const menuItems = [
    { id: "profil", label: "Profil Saya", icon: User },
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "anggota", label: "Data Anggota", icon: Users },
    { id: "galeri", label: "Kelola Galeri", icon: Image },
    { id: "upload", label: "Upload Konten", icon: Upload },
    { id: "pengaturan", label: "Pengaturan", icon: Settings },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-emerald-900/60 rounded-3xl border border-emerald-800/50 p-6 sticky top-32">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 gold-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User size={48} className="text-emerald-950" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Ahmad Fauzi</h3>
                  <span className="text-gold-400 text-sm">Admin</span>
                </div>

                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          activeTab === item.id
                            ? "gold-gradient text-emerald-950 font-bold"
                            : "text-gray-300 hover:bg-emerald-800"
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-emerald-900/60 rounded-3xl border border-emerald-800/50 p-8"
              >
                {activeTab === "profil" && (
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-gold-gradient mb-6">Profil Saya</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-300 mb-2">Nama Lengkap</label>
                        <input
                          type="text"
                          value="Ahmad Fauzi"
                          className="w-full px-4 py-3 bg-emerald-950 border border-emerald-800 rounded-xl text-white outline-none focus:border-gold-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          value="ahmad@example.com"
                          className="w-full px-4 py-3 bg-emerald-950 border border-emerald-800 rounded-xl text-white outline-none focus:border-gold-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Bio</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-emerald-950 border border-emerald-800 rounded-xl text-white outline-none focus:border-gold-500"
                          placeholder="Ceritakan tentang diri Anda..."
                        />
                      </div>
                      <button className="gold-gradient text-emerald-950 px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                        Simpan Perubahan
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "dashboard" && (
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-gold-gradient mb-6">Dashboard</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-emerald-950/80 p-6 rounded-2xl border border-emerald-800/50">
                        <h4 className="text-gray-400 mb-2">Total Anggota</h4>
                        <p className="text-3xl font-bold text-gold-gradient">1,250</p>
                      </div>
                      <div className="bg-emerald-950/80 p-6 rounded-2xl border border-emerald-800/50">
                        <h4 className="text-gray-400 mb-2">Kegiatan Bulan Ini</h4>
                        <p className="text-3xl font-bold text-gold-gradient">12</p>
                      </div>
                      <div className="bg-emerald-950/80 p-6 rounded-2xl border border-emerald-800/50">
                        <h4 className="text-gray-400 mb-2">Al-Qur'an Tersebar</h4>
                        <p className="text-3xl font-bold text-gold-gradient">5,000</p>
                      </div>
                    </div>
                    <div className="bg-emerald-950/80 p-6 rounded-2xl border border-emerald-800/50">
                      <h3 className="text-xl font-bold text-white mb-4">Aktivitas Terbaru</h3>
                      <div className="space-y-4 text-gray-300">
                        <p>• Anggota baru: 5 orang</p>
                        <p>• Kegiatan bakti sosial selesai</p>
                        <p>• Galeri diperbarui</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "galeri" && (
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-gold-gradient mb-6">Kelola Galeri</h2>
                    <p className="text-gray-400">Halaman kelola galeri akan muncul disini</p>
                  </div>
                )}

                {activeTab === "upload" && (
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-gold-gradient mb-6">Upload Konten</h2>
                    <p className="text-gray-400">Halaman upload konten akan muncul disini</p>
                  </div>
                )}

                {activeTab === "anggota" && (
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-gold-gradient mb-6">Data Anggota</h2>
                    <p className="text-gray-400">Halaman data anggota akan muncul disini</p>
                  </div>
                )}

                {activeTab === "pengaturan" && (
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-gold-gradient mb-6">Pengaturan</h2>
                    <p className="text-gray-400">Halaman pengaturan akan muncul disini</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}