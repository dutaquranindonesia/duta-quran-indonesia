"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart, BookOpen, Users, Calendar, Clock, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeSceneProgram from "@/components/ThreeSceneProgram";

const programs = [
  {
    icon: GraduationCap,
    title: "Program Tahfiz",
    description: "Program penghafalan Al-Qur'an dengan metode modern dan mentor profesional untuk semua usia.",
    features: [
      "Kelas tahfiz rutin 3x/minggu",
      "Metode pembelajaran yang menyenangkan",
      "Penilaian perkembangan secara berkala",
      "Sertifikat setelah menyelesaikan program"
    ]
  },
  {
    icon: Heart,
    title: "Kegiatan Sosial & Dakwah",
    description: "Aksi sosial dan dakwah untuk membantu sesama dan menyebarkan kebaikan di masyarakat.",
    features: [
      "Santunan anak yatim & dhuafa",
      "Dakwah di masjid-masjid",
      "Bakti sosial di wilayah terpencil",
      "Program berbagi Al-Qur'an"
    ]
  },
  {
    icon: BookOpen,
    title: "Distribusi Al-Qur'an",
    description: "Program penyaluran Al-Qur'an ke seluruh pelosok Nusantara untuk yang membutuhkan.",
    features: [
      "Al-Qur'an gratis untuk pesantren",
      "Al-Qur'an braille untuk tunanetra",
      "Al-Qur'an digital (quran digital)",
      "Program adopt Al-Qur'an"
    ]
  },
  {
    icon: Award,
    title: "Pelatihan & Workshop",
    description: "Pelatihan dan workshop untuk meningkatkan kualitas dan kompetensi anggota.",
    features: [
      "Workshop metode tahfiz",
      "Pelatihan public speaking",
      "Kelas bahasa Arab dasar",
      "Pelatihan manajemen komunitas"
    ]
  }
];

export default function Programs() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section dengan 3D */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <ThreeSceneProgram />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">
              <span className="text-gold-gradient">Program</span> Kami
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Berbagai program unggulan untuk membangun generasi Qur'ani yang berdaya
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-8 bg-emerald-950 rounded-2xl border border-emerald-800 hover:border-gold-500/50 transition-all"
                >
                  <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-emerald-950 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                  <p className="text-gray-400 mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-900/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Jadwal Kegiatan</h2>
            <p className="text-gray-400 text-xl mb-10">Ikuti kegiatan rutin kami setiap minggu!</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-emerald-950 rounded-2xl border border-emerald-800">
                <Calendar className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">Senin & Rabu</h3>
                <p className="text-gray-400 mb-2">Kelas Tahfiz</p>
                <p className="text-gold-500 font-medium">18.00 - 20.00 WIB</p>
              </div>

              <div className="p-6 bg-emerald-950 rounded-2xl border border-emerald-800">
                <Calendar className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">Jumat</h3>
                <p className="text-gray-400 mb-2">Kajian Rutin</p>
                <p className="text-gold-500 font-medium">16.00 - 18.00 WIB</p>
              </div>

              <div className="p-6 bg-emerald-950 rounded-2xl border border-emerald-800">
                <Calendar className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">Minggu</h3>
                <p className="text-gray-400 mb-2">Kegiatan Sosial</p>
                <p className="text-gold-500 font-medium">08.00 - 12.00 WIB</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
