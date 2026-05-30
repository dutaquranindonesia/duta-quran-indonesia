import Link from "next/link";
import { Mail, Phone, Heart, BookOpen, Users, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 border-t border-emerald-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
                <span className="text-emerald-950 font-bold text-xl">Q</span>
              </div>
              <span className="text-2xl font-serif font-bold text-gold-gradient">
                Duta Qur'an
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Komunitas Penghafal Al-Qur'an Indonesia yang berkomitmen membangun generasi Qur'ani yang profesional dan berdaya.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-emerald-950 transition-all">
                <Heart size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-emerald-950 transition-all">
                <BookOpen size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-emerald-950 transition-all">
                <Users size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-emerald-950 transition-all">
                <GraduationCap size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Navigasi</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-gold-500 transition-colors">Beranda</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-gold-500 transition-colors">Profil</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-gold-500 transition-colors">Program</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-gold-500 transition-colors">Galeri</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-gold-500" />
                <span>dutaquranindonesiaofficial@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-gold-500" />
                <span>+62 812-9019-4366</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Duta Qur'an Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
