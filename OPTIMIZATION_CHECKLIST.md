# 🚀 Checklist Ottimizzazione Sito - Studio Dentistico

## ✅ Completato

### SEO
- ✅ Metadata completa (title, description, keywords)
- ✅ Open Graph e Twitter Cards
- ✅ Schema.org structured data (DentalClinic)
- ✅ Sitemap.xml dinamico con priorità differenziate
- ✅ Robots.txt configurato
- ✅ Canonical URL
- ✅ Preconnect e DNS prefetch
- ✅ Alternates per lingue

### Performance
- ✅ Next.js 16 con App Router
- ✅ Compressione abilitata
- ✅ Cache Control per asset statici
- ✅ Image optimization (WebP, AVIF)
- ✅ Font preload
- ✅ Resource hints

### Responsive
- ✅ Breakpoint 320px (mobile extra small)
- ✅ Breakpoint 480px (mobile small)
- ✅ Breakpoint 768px (tablet)
- ✅ Breakpoint 1024px (desktop)
- ✅ Breakpoint 1440px (desktop large)
- ✅ Breakpoint 1920px (ultra wide)
- ✅ Font scaling con clamp()
- ✅ prefers-reduced-motion support

---

## ⚠️ Da Completare (Priorità Alta)

### 1. **Video Hero Optimization** 🎥
**Problema:** Video hero rallenta LCP e spreca banda su mobile

**Soluzione:**
```tsx
// app/(sections)/hero/Hero.tsx
<video
  className={styles.heroVideo}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"  // ← Aggiungi questo
  poster="/images/hero-poster.jpg"  // ← Aggiungi immagine placeholder
>
  <source 
    src="/videos/hero-bg-mobile.mp4" 
    type="video/mp4" 
    media="(max-width: 768px)"  // ← Video leggero per mobile
  />
  <source 
    src="/videos/hero-bg.mp4" 
    type="video/mp4"
  />
</video>
```

**Comandi da eseguire:**
```bash
# Comprimi video per web (richiede ffmpeg)
ffmpeg -i hero-bg.mp4 -vcodec libx264 -crf 28 -preset slow -vf "scale=1920:-2" hero-bg-compressed.mp4
ffmpeg -i hero-bg.mp4 -vcodec libx264 -crf 30 -preset slow -vf "scale=640:-2" hero-bg-mobile.mp4

# Crea poster image dal primo frame
ffmpeg -i hero-bg.mp4 -ss 00:00:01 -vframes 1 -q:v 2 hero-poster.jpg
```

---

### 2. **Lazy Loading Componenti** 🔄
**Problema:** Tutte le sezioni caricano all'inizio

**Soluzione:**
```tsx
// app/page.tsx
import dynamic from 'next/dynamic';

// Lazy load sezioni non critiche
const Servizi = dynamic(() => import('./(sections)/servizi/Servizi'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
});

const Testimonianze = dynamic(() => import('./(sections)/testimonianze/Testimonianze'));
const FAQ = dynamic(() => import('./(sections)/faq/FAQ'));
const Contatti = dynamic(() => import('./(sections)/contatti/Contatti'));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Servizi />
      <Testimonianze />
      <FAQ />
      <Contatti />
    </>
  );
}
```

---

### 3. **Next.js Image Component** 🖼️
**Problema:** Immagini usano `<img>` invece di `<Image>`

**Trova e sostituisci:**
```bash
# Cerca tutte le immagini non ottimizzate
grep -r "<img" app/ components/
```

**Esempio conversione:**
```tsx
// ❌ PRIMA
<img src="/images/team.jpg" alt="Team" loading="lazy" />

// ✅ DOPO
import Image from 'next/image';

<Image
  src="/images/team.jpg"
  alt="Team"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
/>
```

---

### 4. **Web Vitals Monitoring** 📊
**Aggiungi tracking performance:**

```tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
```

**Installa dipendenze:**
```bash
npm install @vercel/speed-insights @vercel/analytics
```

---

### 5. **Critical CSS Inline** ⚡
**Problema:** FOUC (Flash of Unstyled Content)

**Crea file:**
```css
/* app/critical.css */
/* Solo stili critici per above-the-fold */
.hero { min-height: 100vh; background: #0a0a0f; }
.heroContent { padding-top: 80px; }
.navbar { position: fixed; top: 0; z-index: 1000; }
```

**Inline nel layout:**
```tsx
// app/layout.tsx
import criticalCss from './critical.css?inline';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

### 6. **Google Analytics / Tag Manager** 📈
**Aggiungi GA4 per tracking:**

```tsx
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
```

---

### 7. **Ottimizza Next.config** ⚙️

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  
  // Aggiungi queste ottimizzazioni:
  swcMinify: true,
  poweredByHeader: false,
  
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 anno
  },
  
  // Abilita compressione Brotli
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};
```

---

### 8. **Sitemap Dinamico Completo** 🗺️

```typescript
// app/sitemap.ts
export default async function sitemap() {
  // Fetch dynamic content
  const posts = await fetch('https://danesemazzotta.it/api/blog').then(r => r.json());
  
  const blogUrls = posts.map(post => ({
    url: `https://danesemazzotta.it/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
  
  return [...staticPages, ...servizi, ...blogUrls];
}
```

---

### 9. **Manifest.json per PWA** 📱

```json
// public/manifest.json
{
  "name": "Studio Dentistico Danese-Mazzotta",
  "short_name": "Studio Danese-Mazzotta",
  "description": "Impianti dentali senza dolore a Lecce",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0f",
  "theme_color": "#00d4aa",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**Aggiungi al layout:**
```tsx
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#00d4aa" />
```

---

### 10. **Robots.txt Avanzato** 🤖

```typescript
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/images/',
      },
    ],
    sitemap: 'https://danesemazzotta.it/sitemap.xml',
    host: 'https://danesemazzotta.it',
  };
}
```

---

## 📊 Testing e Validazione

### Lighthouse Audit
```bash
npm install -g lighthouse
lighthouse https://danesemazzotta.it --view
```

**Target Scores:**
- Performance: 90+ ⚡
- Accessibility: 95+ ♿
- Best Practices: 95+ ✅
- SEO: 100 🎯

### PageSpeed Insights
https://pagespeed.web.dev/analysis?url=https://danesemazzotta.it

### Web Vitals Target
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Mobile Testing
- Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Responsinator: https://www.responsinator.com/?url=danesemazzotta.it

### SEO Validation
```bash
# Controlla struttura URL
curl -I https://danesemazzotta.it
curl -I https://danesemazzotta.it/servizi

# Controlla sitemap
curl https://danesemazzotta.it/sitemap.xml

# Controlla robots.txt
curl https://danesemazzotta.it/robots.txt
```

### Schema.org Validation
https://validator.schema.org/
https://search.google.com/test/rich-results

---

## 🔧 Quick Fixes Commands

### Ottimizza tutte le immagini
```bash
# Converti in WebP
for i in public/images/*.{jpg,png}; do
  cwebp -q 85 "$i" -o "${i%.*}.webp"
done

# Comprimi JPEG
for i in public/images/*.jpg; do
  jpegoptim --max=85 --strip-all "$i"
done

# Comprimi PNG
for i in public/images/*.png; do
  optipng -o7 "$i"
done
```

### Pulisci cache Vercel
```bash
vercel deploy --force
```

### Build production locale
```bash
npm run build
npm start

# Test su rete locale
npx serve@latest out -l 3000
```

---

## 📈 Monitoraggio Continuo

### Setup Google Search Console
1. Vai su https://search.google.com/search-console
2. Aggiungi proprietà: https://danesemazzotta.it
3. Verifica con tag HTML o DNS
4. Submit sitemap: https://danesemazzotta.it/sitemap.xml

### Setup Vercel Analytics
```bash
npm install @vercel/analytics
```

### Setup Error Tracking (Sentry)
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

---

## ✅ Checklist Finale Pre-Deploy

- [ ] Comprimi video hero (mobile + desktop)
- [ ] Converti immagini in WebP/AVIF
- [ ] Aggiungi lazy loading a tutte le sezioni
- [ ] Converti `<img>` in `<Image>`
- [ ] Installa Vercel Analytics
- [ ] Configura Google Analytics
- [ ] Crea manifest.json per PWA
- [ ] Test Lighthouse (target: 90+)
- [ ] Test mobile-friendly
- [ ] Valida Schema.org
- [ ] Submit sitemap a Google
- [ ] Test su 5 device diversi
- [ ] Test velocità connessione lenta (3G)

---

## 🎯 Risultati Attesi

### Performance
- **Velocità attuale:** ~4-6s LCP
- **Velocità target:** <2.5s LCP
- **Miglioramento:** ~50-60% più veloce

### SEO
- **Ranking:** +20-30% visibilità organica
- **CTR:** +15% da SERP (Rich Snippets)
- **Crawl Budget:** Ottimizzato

### Conversioni
- **Mobile:** +25% grazie a velocità
- **Desktop:** +15% grazie a UX
- **Overall:** +20% lead da sito

---

## 🆘 Supporto

Se hai problemi con l'implementazione:
1. Controlla documentazione Next.js 16: https://nextjs.org/docs
2. Web Vitals Guide: https://web.dev/vitals/
3. Vercel Docs: https://vercel.com/docs

**Priorità implementazione:**
1. Video optimization (1-2h) - Massimo impatto su LCP
2. Lazy loading (30min) - Riduce bundle iniziale
3. Next Image (1-2h) - Automatico con codemod
4. Analytics (15min) - Monitoraggio essenziale
5. Resto features (2-3h) - Nice to have

**Tempo totale stimato:** 6-8 ore lavoro
**ROI atteso:** +30% performance, +20% conversioni
