"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-gold-gradient">Hubungi</span> Kami
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ada pertanyaan? Ingin bergabung? Kami siap membantu!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Informasi Kontak</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-emerald-950 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Telepon</h3>
                    <p className="text-gray-400">+62 812 3456 7890</p>
                    <p className="text-gray-400">+62 821 0987 6543</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-950 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-400">info@dutaquran.id</p>
                    <p className="text-gray-400">komunitas@dutaquran.id</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-950 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Alamat</h3>
                    <p className="text-gray-400">Jl. Masjid Raya No. 123</p>
                    <p className="text-gray-400">Jakarta Selatan, Indonesia 12345</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-emerald-950 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Jam Operasional</h3>
                    <p className="text-gray-400">Senin - Jumat: 08.00 - 17.00 WIB</p>
                    <p className="text-gray-400">Sabtu - Minggu: 09.00 - 15.00 WIB</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-900/50 p-8 rounded-2xl border border-emerald-800"
            >
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Kirim Pesan</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 bg-emerald-950 border border-emerald-800 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Masukkan email Anda"
                    className="w-full px-4 py-3 bg-emerald-950 border border-emerald-800 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Subjek</label>
                  <input
                    type="text"
                    placeholder="Masukkan subjek pesan"
                    className="w-full px-4 py-3 bg-emerald-950 border border-emerald-800 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Pesan</label>
                  <textarea
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-3 bg-emerald-950 border border-emerald-800 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gold-500 text-emerald-950 rounded-xl font-bold text-lg hover:bg-gold-400 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
