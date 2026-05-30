"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Rizky",
    role: "Anggota Tahfiz",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    text: "Bergabung dengan Duta Qur'an Indonesia adalah keputusan terbaik saya. Metode belajarnya sangat menyenangkan dan efektif!"
  },
  {
    name: "Siti Nurhaliza",
    role: "Volunteer Sosial",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    text: "Sungguh luar biasa bisa berpartisipasi dalam program sosial yang bermanfaat untuk banyak orang. Terima kasih Duta Qur'an!"
  },
  {
    name: "Fajar Pratama",
    role: "Mentor Tahfiz",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    text: "Lingkungan yang sangat mendukung untuk berkembang. Saya bangga menjadi bagian dari komunitas ini!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-emerald-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-gold-gradient">Ulasan</span> Anggota
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Apa kata mereka yang sudah bergabung dengan komunitas kita
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="p-8 bg-emerald-950 rounded-2xl border border-emerald-800 hover:border-gold-500/50 transition-all"
            >
              <Quote className="w-10 h-10 text-gold-500 mb-6" />
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold-500"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gold-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
