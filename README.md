# Duta Qur'an Indonesia Website

Website resmi untuk Duta Qur'an Indonesia - Komunitas Penghafal Al-Qur'an dan Support System Lembaga Pendidikan Qur'an.

## Tech Stack

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Supabase** - Backend & Database
- **Vercel** - Deployment

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Buat file `.env.local` dan isikan:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Deployment

### GitHub
- Inisialisasi git: `git init`
- Commit: `git add . && git commit -m "Initial commit"`
- Push ke repo GitHub

### Vercel
- Hubungkan repo ke Vercel
- Tambahkan environment variables di dashboard Vercel
- Deploy!

### Supabase
- Buat proyek di supabase.com
- Dapatkan URL dan Anon Key
