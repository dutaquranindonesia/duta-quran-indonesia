"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, MapPin, BookOpen } from "lucide-react";

const stats = [
  { key: "total_members", label: "Anggota Aktif", icon: Users, value: 1250 },
  { key: "active_districts", label: "Kabupaten/Kota", icon: MapPin, value: 34 },
  { key: "quran_distributed", label: "Al-Qur'an Tersebar", icon: BookOpen, value: 5000 },
];

function Counter({ target }: { target: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-bold text-gold-gradient">
      {count.toLocaleString()}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="py-24 bg-emerald-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center p-10 bg-emerald-950/80 rounded-2xl border border-emerald-800"
              >
                <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-emerald-950 w-8 h-8" />
                </div>
                <Counter target={stat.value} />
                <p className="text-gray-300 mt-4 text-lg">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}