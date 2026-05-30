"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Wisuda Tahfiz", category: "Tahfiz", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" },
  { id: 2, title: "Dakwah di Masjid", category: "Dakwah", image: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=600&h=400&fit=crop" },
  { id: 3, title: "Distribusi Al-Qur'an", category: "Sosial", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop" },
  { id: 4, title: "Nusantara Mengaji", category: "Event", image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&h=400&fit=crop" },
  { id: 5, title: "Kajian Rutin", category: "Dakwah", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" },
  { id: 6, title: "Santunan Anak Yatim", category: "Sosial", image: "https://images.unsplash.com/photo-1497486751825-1233686cd05c?w=600&h=400&fit=crop" },
];

const categories = ["Semua", "Tahfiz", "Dakwah", "Sosial", "Event"];

export default function HomeGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "Semua" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-24 bg-emerald-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-gold-gradient">Galeri</span> Kegiatan
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
            Dokumentasi kegiatan dan perjalanan komunitas dalam menyebarkan kebaikan
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gold-500 text-emerald-950"
                    : "border border-emerald-700 text-gray-300 hover:border-gold-500 hover:text-gold-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-gold-400 text-sm font-medium mb-2">{item.category}</span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <div className="mt-3 flex items-center gap-2 text-gold-400">
                    <ExternalLink size={16} />
                    <span className="text-sm">Lihat Detail</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white hover:text-gold-400 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">{selectedImage.category}</span>
              <h3 className="text-white text-2xl font-bold mt-2">{selectedImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
