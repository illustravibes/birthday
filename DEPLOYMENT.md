# Deployment Guide untuk Vercel

## 🚀 Langkah Deploy ke Vercel

### Metode 1: Via GitHub (Recommended)
1. Push project ini ke GitHub repository
2. Login ke [Vercel Dashboard](https://vercel.com)
3. Klik "New Project"
4. Import GitHub repository
5. Vercel akan otomatis detect build settings
6. Klik "Deploy"

### Metode 2: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Metode 3: Via Drag & Drop
1. Build project locally: `npm run build`
2. Zip folder `dist`
3. Upload ke Vercel via drag & drop

## ⚙️ Build Settings di Vercel
- **Framework Preset**: Other
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 🛠️ Troubleshooting

### Jika masih mendapat error 404:
1. Pastikan file `index.html` ada di folder `dist` setelah build
2. Check apakah semua assets (img, music, fonts, style) ter-copy dengan benar
3. Pastikan `vercel.json` configuration sudah benar

### Test build locally:
```bash
npm run build
cd dist
python3 -m http.server 8000
# Atau gunakan serve: npx serve .
```

## 📝 File yang sudah dikonfigurasi:
- ✅ `vercel.json` - Konfigurasi deployment
- ✅ `rspack.config.js` - Build configuration  
- ✅ `package.json` - Scripts untuk build

Semua sudah siap untuk deploy! 🎉
