"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeSceneAbout from "@/components/ThreeSceneAbout";
import { Users, Award, TrendingUp, Heart } from "lucide-react";

const timeline = [
  { year: "2019", title: "Pendirian", description: "Duta Qur'an Indonesia resmi didirikan dengan visi membangun generasi Qur'ani" },
  { year: "2020", title: "Ekspansi", description: "Memperluas jaringan ke 10 kabupaten di Pulau Jawa" },
  { year: "2022", title: "Pencapaian", description: "Berhasil menyalurkan 2000 Al-Qur'an ke seluruh Indonesia" },
  { year: "2024", title: "Inovasi", description: "Pengembangan platform digital untuk mendukung kegiatan komunitas" },
];

const team = [
  { name: "Ust. Ahmad Fauzi", role: "Ketua Umum", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" },
  { name: "Ust. Fatimah Azzahra", role: "Wakil Ketua", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" },
  { name: "Ust. Rizki Pratama", role: "Sekretaris", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" },
  { name: "Ust. Siti Nurhaliza", role: "Bendahara", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with 3D */}
      <section className="relative pt-32 pb-20 min-h-[70vh] flex items-center overflow-hidden">
        <ThreeSceneAbout />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-950/80 to-emerald-950" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">
              <span className="text-gold-gradient drop-shadow-lg">Profil</span> Komunitas
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
              Mengenal lebih dekat tentang Duta Qur'an Indonesia, visi, misi, dan perjalanan kami
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1400&h=600&fit=crop" 
              alt="Duta Qur'an Indonesia"
              className="w-full h-[450px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-emerald-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6 text-gold-gradient">Visi Kami</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Menjadikan Duta Qur'an Indonesia sebagai komunitas penghafal Al-Qur'an terdepan yang mampu menciptakan generasi Qur'ani yang profesional, berakhlak mulia, dan berdaya saing tinggi.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6 text-gold-gradient">Misi Kami</h2>
              <ul className="space-y-4">
                {[
                  "Menyelenggarakan program pendidikan tahfiz Al-Qur'an berkualitas",
                  "Mengembangkan potensi anggota melalui pelatihan dan pendampingan",
                  "Membangun jaringan komunitas yang solid dan suportif",
                  "Menyalurkan Al-Qur'an dan bantuan ke seluruh Nusantara"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-gold-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gold-gradient">Perjalanan Kami</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-500/30" />
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-emerald-950 p-6 rounded-2xl border border-emerald-800">
                      <span className="text-gold-500 font-bold text-2xl">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 gold-gradient rounded-full border-4 border-emerald-900 z-10" />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gold-gradient">Struktur Pengurus</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold-500">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-gold-500">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
