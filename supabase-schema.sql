-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  role TEXT DEFAULT 'member',
  avatar_url TEXT,
  bio TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery table
CREATE TABLE gallery (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Statistics table
CREATE TABLE statistics (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  key_name TEXT UNIQUE NOT NULL,
  value INTEGER NOT NULL DEFAULT 0
);

-- Insert initial statistics
INSERT INTO statistics (key_name, value) VALUES
  ('total_members', 1250),
  ('active_districts', 34),
  ('quran_distributed', 5000);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE statistics ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone."
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile."
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Gallery policies
CREATE POLICY "Gallery is viewable by everyone."
  ON gallery FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert gallery items."
  ON gallery FOR INSERT
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Statistics policies
CREATE POLICY "Statistics are viewable by everyone."
  ON statistics FOR SELECT
  USING (true);

-- Create storage bucket for gallery
INSERT INTO storage.buckets (id, name, public) VALUES
  ('gallery', 'gallery', true);

-- Storage policies
CREATE POLICY "Gallery images are publicly accessible."
  ON storage.objects FOR SELECT
  USING (bucket_id = 'gallery');

CREATE POLICY "Admins can upload gallery images."
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'gallery' AND auth.jwt() ->> 'role' = 'admin');
