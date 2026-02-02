# Studio Dentistico Dott. Mario Giugno - Lecce

Questo sito è stato creato con **Next.js 14** utilizzando l'**App Router** e segue un'architettura modulare basata su feature.

## 🚀 Avvio del Progetto

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia in produzione
npm start
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
/
├── app/
│   ├── (sections)/          # Sezioni della homepage
│   │   ├── hero/
│   │   ├── servizi/
│   │   ├── about/
│   │   ├── testimonianze/
│   │   ├── contatti/
│   │   └── faq/
│   ├── servizi/[slug]/      # Pagine dinamiche servizi
│   ├── layout.tsx           # Layout globale con metadata
│   ├── page.tsx             # Homepage
│   └── globals.css          # Stili globali
├── components/
│   ├── Navbar/              # Navbar con mobile menu
│   └── Footer/              # Footer
├── hooks/                   # Custom React hooks
├── utils/                   # Utility functions
├── styles/                  # CSS variables e tokens
└── public/                  # Asset statici
```

## ✨ Caratteristiche

- **Performance Ottimizzate**: Core Web Vitals ottimizzati
- **SEO Completo**: Metadata dinamica, JSON-LD, sitemap
- **Animazioni Native**: Intersection Observer, CSS Transitions
- **Mobile First**: Design responsivo con breakpoint fluidi
- **Accessibilità**: Support per `prefers-reduced-motion`
- **Zero Librerie Esterne**: Solo React e Next.js

## 🎨 Design System

Il sito utilizza CSS Custom Properties per un design system coerente:

- **Palette**: Dark theme con accent teal
- **Tipografia**: Inter font con scale fluida (clamp)
- **Spacing**: Grid 8px base
- **Animazioni**: Easing personalizzati per transizioni fluide

## 📝 Contenuti da Aggiornare

1. **Immagini**: Sostituire i placeholder in `/public/images/`
   - `doctor.jpg` - Foto del Dott. Giugno
   - `og-image.jpg` - Immagine per social media (1200x630px)
   - `studio.jpg` - Foto dello studio
   - Avatar testimonianze: `avatar-1.jpg` to `avatar-5.jpg`

2. **Informazioni Studio**: Verificare in `components/Navbar/navbar.data.ts` e `components/Footer/footer.data.ts`

3. **Mappa Google**: Aggiornare URL embed in `app/(sections)/contatti/contatti.data.ts`

4. **Social Media**: Aggiornare link in `components/Footer/footer.data.ts`

5. **Domain**: Cambiare `studgiugno.it` con il dominio reale

## 🔧 Configurazione

- **next.config.ts**: Headers di sicurezza, compressione, ottimizzazione immagini
- **app/layout.tsx**: Metadata SEO e JSON-LD structured data
- **app/sitemap.ts**: Sitemap dinamico
- **app/robots.ts**: Robots.txt

## 📱 Browser Support

- Chrome/Edge (ultimi 2 versioni)
- Firefox (ultimi 2 versioni)
- Safari (ultimi 2 versioni)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2026 Studio Dentistico Dott. Mario Giugno. Tutti i diritti riservati.
