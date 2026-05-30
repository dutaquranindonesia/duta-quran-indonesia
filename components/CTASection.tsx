"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-3xl p-12 md:p-16 text-center border border-gold-500/30"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
            Jadilah bagian dari komunitas yang berdedikasi untuk menyebarkan kebaikan dan Al-Qur'an
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-4 bg-gold-500 text-emerald-950 rounded-full font-bold text-lg hover:bg-gold-400 transition-colors"
            >
              Pelajari Lebih Lanjut
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gold-500 text-gold-500 rounded-full font-bold text-lg hover:bg-gold-500 hover:text-emerald-950 transition-all"
            >
              Hubungi Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
