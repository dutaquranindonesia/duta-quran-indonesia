"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Heart, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Pendidikan Tahfiz",
    description: "Program penghafalan Al-Qur'an dengan metode terbaik dan mentor profesional"
  },
  {
    icon: Heart,
    title: "Kegiatan Sosial",
    description: "Aksi sosial dan dakwah untuk membantu sesama dan menyebarkan kebaikan"
  },
  {
    icon: BookOpen,
    title: "Distribusi Al-Qur'an",
    description: "Program penyaluran Al-Qur'an ke seluruh pelosok Nusantara"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Jaringan komunitas yang solid dan saling mendukung dalam kebaikan"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Statistics />

      <section className="py-24 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              <span className="text-gold-gradient">Program</span> Kami
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Berbagai program unggulan untuk membangun generasi Qur'ani yang berdaya
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-8 bg-emerald-900/50 rounded-2xl border border-emerald-800 hover:border-gold-500/50 transition-all"
                >
                  <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-emerald-950 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />

      <Footer />
    </div>
  );
}