# Hero Section Moderna - Studio Dentistico

Hero section ad alta conversione ottimizzata per Next.js 15 con design moderno e mobile-first.

## 🚀 Installazione Dipendenze

```bash
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers clsx tailwind-merge react-intersection-observer
```

## 📁 Struttura File Creati

```
components/
├── HeroModern.tsx          # Hero section principale
├── TestimonialSection.tsx  # Sezione testimonianze
├── ServiceGrid.tsx         # Griglia servizi
└── BookingModal.tsx        # Modal prenotazione

app/
└── example-modern/
    └── page.tsx            # Pagina esempio completa
```

## 🎨 Palette Colori

- **Primary**: `#10b981` (Verde smeraldo)
- **Navy Background**: `#0f172a`
- **Navy Light**: `#1e293b`
- **Accent**: `#10b981`

## 🔧 Configurazione CSS Variabili

Aggiungi al tuo `globals.css`:

```css
:root {
  --color-primary: #10b981;
  --color-primary-dark: #059669;
  --color-primary-light: #34d399;
  --color-navy: #0f172a;
  --color-navy-light: #1e293b;
}
```

## 📱 Componenti Principali

### 1. HeroModern

Hero section con:
- Video background responsive (desktop) e immagine (mobile)
- Headline emozionale con gradient animato
- Trust badges (esperienza, pazienti, rating Google)
- 2 CTA: Primario (Prenota) + Secondario (Risultati)
- Click-to-call con orari
- Animazioni Framer Motion con supporto reduced motion

**Props:**
```typescript
interface HeroProps {
  onBookingClick?: () => void;
}
```

**Utilizzo:**
```tsx
<HeroModern onBookingClick={() => setIsBookingModalOpen(true)} />
```

### 2. TestimonialSection

Sezione testimonianze con:
- Grid responsive 1/2/3 colonne
- Card hover effects con glow
- Rating a stelle
- Badge verificato
- Link Google Reviews

**Features:**
- Scroll reveal animations
- Card hover: translateY + shadow glow
- Stagger children animation

### 3. ServiceGrid

Griglia servizi con:
- 6 servizi principali con icone Lucide
- Badge "Più Richiesto" per servizio popolare
- Lista features con checkmark
- Pricing "Da €X"
- Link a pagine dettaglio servizi

**Servizi Inclusi:**
- Impianti Dentali
- Ortodonzia Invisibile
- Sbiancamento Dentale
- Protesi Dentarie
- Parodontologia
- Diagnostica 3D

### 4. BookingModal

Modal prenotazione con:
- Form validato con React Hook Form + Zod
- Campi: Nome, Email, Telefono, Servizio, Data, Orario, Note
- Validazione in tempo reale
- Success state animato
- Privacy checkbox obbligatorio

**Schema Validazione:**
```typescript
- Nome: min 2 caratteri
- Email: formato valido
- Telefono: 9-10 cifre
- Servizio: obbligatorio
- Data: da domani in poi
- Orario: fasce orarie predefinite
```

## 🎬 Animazioni

**Framer Motion Variants:**
- `fadeInUp`: Headline (opacity + translateY)
- `staggerContainer`: Container con delay tra children
- `staggerItem`: Elementi secondari staggerati
- `cardVariants`: Cards con scale + translateY

**Hover Effects:**
- CTA Primary: scale 1.05 + shine gradient
- Cards: translateY(-8px) + shadow glow
- Buttons: spring transition con bounce 0.2

**Accessibility:**
- `useReducedMotion` hook per disabilitare animazioni
- ARIA labels su tutti i componenti interattivi
- Focus states visibili con ring-2
- Semantic HTML

## 📦 Risorse Necessarie

### Immagini da Aggiungere

```
public/
├── images/
│   ├── studio-dentistico-bg.jpg    # Hero background (1920x1080)
│   └── testimonials/
│       ├── maria-r.jpg
│       ├── giuseppe-t.jpg
│       └── anna-m.jpg
└── videos/
    └── studio-dentistico.mp4       # Video background (10-20s loop, max 5MB)
```

### Ottimizzazione Video

```bash
# Comprimi video per web con FFmpeg
ffmpeg -i input.mp4 -vf scale=1920:1080 -c:v libx264 -preset slow -crf 28 -movflags +faststart -an studio-dentistico.mp4
```

## 🚦 Come Testare

1. Copia i file nella struttura del progetto
2. Installa dipendenze: `npm install`
3. Aggiungi immagini in `/public/images/`
4. Avvia dev server: `npm run dev`
5. Visita: `http://localhost:3000/example-modern`

## ⚡ Performance

**Ottimizzazioni Implementate:**
- ✅ Next.js Image per lazy loading automatico
- ✅ `willChange: transform` su elementi animati
- ✅ `useReducedMotion` per accessibilità
- ✅ Backdrop blur con `backdrop-blur-sm`
- ✅ Video poster per first paint veloce
- ✅ Intersection Observer per scroll reveals
- ✅ Stagger animations per percezione di velocità

**Lighthouse Score Target:**
- Performance: 90+
- Accessibility: 95+
- SEO: 100
- Best Practices: 95+

## 🎯 Conversione

**Elementi di Conversione:**
- ❗ Badge "Valore 150€ GRATIS" su CTA primary
- ❗ Trust badges above the fold (15 anni, 5000+ pazienti, 5.0★)
- ❗ Urgency implicita: "Prima Visita Gratuita"
- ❗ Social proof: testimonianze verificate
- ❗ Click-to-call prominente con orari
- ❗ Form semplice (7 campi) con validazione chiara

## 📞 Integrazione Backend

Sostituisci la funzione `onSubmit` in `BookingModal.tsx`:

```typescript
const onSubmit = async (data: BookingFormData) => {
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) throw new Error('Errore invio');
    
    setSubmitSuccess(true);
    reset();
    
    // Email notification, CRM integration, etc.
    
  } catch (error) {
    console.error('Errore:', error);
    // Mostra messaggio errore
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🔐 Privacy & GDPR

- Checkbox privacy obbligatorio
- Link a Privacy Policy
- Validazione Zod per sicurezza input
- No cookie di terze parti senza consenso

## 📱 Responsive Breakpoints

```css
mobile: < 768px (mobile-first)
tablet: >= 768px
desktop: >= 1024px
```

## 🛠️ Personalizzazione

### Cambia Colori

```typescript
// HeroModern.tsx - Gradient headline
className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"

// CTA Primary
className="bg-gradient-to-r from-blue-500 to-blue-600"
```

### Aggiungi Servizi

```typescript
// ServiceGrid.tsx
const services: Service[] = [
  {
    id: 7,
    title: 'Nuovo Servizio',
    description: '...',
    icon: TuaIcona,
    features: ['Feature 1', 'Feature 2'],
    price: 'Da €X',
    href: '/servizi/nuovo'
  }
];
```

## 📊 Analytics

Aggiungi tracking eventi:

```typescript
// HeroModern.tsx - CTA click
onClick={() => {
  gtag('event', 'cta_click', { cta_location: 'hero_primary' });
  onBookingClick?.();
}}

// BookingModal.tsx - Form submit
gtag('event', 'booking_submit', { service: data.service });
```

## ✨ Prossimi Miglioramenti

- [ ] A/B test varianti CTA
- [ ] Carousel testimonianze con Embla
- [ ] Chat widget integrato
- [ ] Live availability calendar
- [ ] Before/After image slider
- [ ] Video testimonials

## 📝 Licenza

Componenti creati per uso commerciale. Personalizza liberamente.

---

**Creato con ❤️ per Studio Dentistico Dr. Mario Giugno**
