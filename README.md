# 🌐 Website IoT Universitas Brawijaya

Website resmi untuk Laboratory Internet of Things (IoT) Universitas Brawijaya. Platform ini dirancang untuk mengelola praktikum, modul pembelajaran, pendaftaran peserta, dan informasi terkait kegiatan laboratorium IoT.

## ✨ Fitur Utama

### 🏠 Website Utama
- **Home** - Halaman utama dengan informasi Workshop IoT Universitas Brawijaya
- **About Us** - Profil dan informasi tentang Lab IoT UB
- **Visi & Misi** - Visi dan misi laboratorium
- **Struktur Organisasi** - Struktur kepengurusan lab
- **Divisi** - Informasi tentang divisi-divisi di lab
- **Roadmap** - Rencana pengembangan lab
- **Prestasi** - Capaian dan penghargaan
- **Alumni** - Data dan informasi alumni

### 🔬 Portal Laboratorium
- **Pendaftaran Praktikum** - Sistem pendaftaran praktikum online
- **Jadwal Praktikum** - Informasi jadwal praktikum
- **Modul Praktikum** - Akses ke materi dan modul pembelajaran
- **Pembelian Modul** - Sistem pembelian modul praktikum
- **Evaluasi** - Sistem evaluasi dan penilaian praktikum
- **Daftar Peserta** - Manajemen data peserta praktikum

## 🛠️ Teknologi yang Digunakan

- **Vue.js 3** - Progressive JavaScript Framework
- **Vue Router 4** - Official routing library
- **Firebase** - Backend services (Authentication, Firestore, Storage)
- **Tailwind CSS** - Utility-first CSS framework
- **Vue 3 Carousel** - Carousel component
- **Vue Advanced Cropper** - Image cropping tool

## 📋 Prasyarat

Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (versi 14.x atau lebih baru)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

## 🚀 Instalasi dan Setup

### 1. Clone Repository
```bash
git clone https://github.com/ioteaub/WEBSITE_IOT_UB.git
cd WEBSITE_IOT_UB
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Konfigurasi Firebase
Buat file konfigurasi Firebase di `src/utilities/firebase.js` dengan credentials Anda:
```javascript
// Sesuaikan dengan konfigurasi Firebase project Anda
```

### 4. Run Development Server
```bash
npm run serve
```
Website akan berjalan di `http://localhost:8080`

## 📦 Build untuk Production

```bash
npm run build
```
File hasil build akan tersimpan di folder `dist/`

## 🧹 Linting

```bash
npm run lint
```

## 📁 Struktur Project

```
WEBSITE_IOT_UB/
├── public/              # File statis
├── src/
│   ├── assets/          # Asset gambar, CSS, dll
│   ├── components/      # Komponen Vue reusable
│   │   ├── laboratory/  # Komponen khusus laboratorium
│   ├── router/          # Konfigurasi routing
│   ├── utilities/       # Utility functions (Firebase, dll)
│   ├── views/           # Halaman/view utama
│   │   ├── laboratory/  # Halaman laboratorium
│   ├── App.vue          # Root component
│   └── main.js          # Entry point
├── babel.config.js      # Babel configuration
├── tailwind.config.js   # Tailwind configuration
├── vue.config.js        # Vue CLI configuration
└── package.json         # Dependencies
```

## 🎨 Customisasi

### Tailwind CSS
Edit `tailwind.config.js` untuk mengubah tema, warna, atau menambahkan custom utilities.

### Vue Configuration
Edit `vue.config.js` untuk konfigurasi build dan development server.

## 🤝 Kontribusi

Kontribusi selalu diterima! Untuk kontribusi besar, silakan buka issue terlebih dahulu untuk mendiskusikan perubahan yang ingin Anda buat.

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Project ini bersifat private untuk penggunaan internal Laboratorium IoT Universitas Brawijaya.

## 📧 Kontak

**Laboratory Internet of Things**  
Universitas Brawijaya  
Malang, Jawa Timur, Indonesia

---

<p align="center">Made with ❤️ by IoT Lab Team Universitas Brawijaya</p>
