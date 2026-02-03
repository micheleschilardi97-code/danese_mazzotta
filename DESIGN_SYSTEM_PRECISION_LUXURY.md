# 🎨 Design System "Precision Luxury Medical"

## 📋 Overview
Trasformazione completa del sito Studio Dentistico verso un'estetica editoriale sofisticata che comunica professionalità medica di alto livello con un tocco mediterraneo distintivo.

---

## 🎯 Direzione Estetica

**"Precision Luxury Medical"** - Un equilibrio tra:
- Eleganza editoriale (British Dental Journal meets Kinfolk)
- Precisione chirurgica tradotta in design
- Calore mediterraneo di Lecce (tonalità terra, luce naturale)

---

## 🔤 Tipografia

### Display/Headings
- **Font**: Fraunces (serif moderno variabile)
- **Uso**: Titoli principali, H1, H2
- **Caratteristiche**: Personalità forte ma raffinata, alta leggibilità
- **Variabile CSS**: `--font-display`, `--font-heading`

### Body Text
- **Font**: Switzer (sans-serif moderna)
- **Uso**: Paragrafi, testo corpo, navigazione
- **Caratteristiche**: Più carattere di Inter, meno generica
- **Fallback**: Inter → -apple-system → system-ui
- **Variabile CSS**: `--font-body`

### Accents/Technical
- **Font**: JetBrains Mono (monospace)
- **Uso**: Numeri grandi ("15 anni", "2000+ pazienti"), dettagli tecnici
- **Caratteristiche**: Contrasto interessante, precisione
- **Variabile CSS**: `--font-mono`

---

## 🎨 Palette Colori

### Colori Primari
```css
--color-primary: #1A3A3A          /* Blu petrolio scuro - CTA e testo importante */
--color-primary-light: #2A4A4A
--color-primary-dark: #0D1F1F
```

### Accenti Mediterranei
```css
--color-accent: #D4876D           /* Terracotta caldo - richiama Lecce/Salento */
--color-accent-hover: #E09980
--color-accent-dark: #B8705A

--color-accent-secondary: #8B9E8D /* Verde salvia medico - fiducia/natura */
--color-accent-secondary-hover: #9FB0A1
```

### Neutri Caldi
```css
--color-surface: #F5F1E8          /* Beige caldo - sfondo principale */
--color-surface-card: #FFFFFF     /* Card elevate */
--color-surface-dark: #1A3A3A     /* Superfici scure (navbar, footer) */
```

### Testo - Grigi Caldi (MAI freddi)
```css
--color-text-primary: #2C2C2C     /* Quasi nero caldo */
--color-text-secondary: #5A5A5A   
--color-text-muted: #8A8A8A       
--color-text-on-dark: #F5F1E8     /* Su sfondi scuri */
```

---

## 📐 Layout & Composizione

### 1. Hero Section (PRIORITÀ MASSIMA)
- **Layout**: Tipografia monumentale offset
- **Titolo**: Spezzato su più righe con dimensioni variabili
- **Background**: Video con overlay grain texture + gradient mesh organico
- **CTA**: Verde (già implementato) con micro-animazione sofisticata
- **Badge**: Certificazioni che fluttuano delicatamente (floating animation)

### 2. Grid Servizi - Bento Box
```
┌─────────┬──────┐
│         │      │
│  Large  │ Med  │
│         ├──────┤
│         │ Med  │
├─────────┴──────┤
│   Wide Card    │
└────────────────┘
```
- Card di dimensioni diverse (non tutte uguali)
- Hover state rivela immagine + gradient colorato unico
- Icone custom illustrate (non icon pack standard)
- Numeri grandi e bold come elemento decorativo

### 3. Testimonianze
- **Carousel**: Effetto parallax tra foto e testo
- **Quote**: Grandi in serif come elemento grafico dominante
- **Foto**: Border radius organici variabili
- **Typography**: Quote in Fraunces, nome in JetBrains Mono

### 4. Form Contatti
- **Input fields**: Animazioni focus sofisticate
  - Underline che si espande
  - Label che fluttua verso l'alto
- **Mappa**: Custom styled (non Google Maps standard)
- **Microinterazioni**: Su ogni singolo elemento

---

## ✨ Animazioni & Microinterazioni

### Page Load
```javascript
// Staggered reveal con fade-up progressivo
elements.forEach((el, i) => {
  el.style.animationDelay = `${i * 100}ms`;
});
```

### Scroll Animations
- **Parallax**: Sulle immagini di background
- **Fade-in**: Elementi quando entrano nel viewport
- **Counter**: Numeri che contano (2000+ pazienti)

### Hover States

#### Pulsanti
- Gradient che si muove al passaggio del mouse
- Micro-lift con ombra che si espande
- Ripple effect al click

#### Card
- Sollevano ombra dinamica
- Cambiano leggermente inclinazione (2-3deg)
- Rivelano contenuto extra con slide

#### Link
- Underline animato che si disegna da sinistra
- Colore che transiziona con ease-spring

### Custom Cursor (Opzionale WOW Factor)
```css
.custom-cursor {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
  pointer-events: none;
}

.custom-cursor.hover {
  transform: scale(3);
  background: transparent;
  border: 2px solid var(--color-accent);
}
```

---

## 🎯 Dettagli Visivi

### Texture
- **Grain noise**: Sottile su tutto il sito (opacity: 0.05)
- **Implementazione**: SVG inline nel `<head>` come `::before` globale

### Shadows
```css
--shadow-soft: 0 8px 32px rgba(0,0,0,0.08);
--shadow-medium: 0 12px 40px rgba(0,0,0,0.12);
--shadow-lift: 0 20px 60px rgba(0,0,0,0.15);
```
- Sempre morbide, blur radius 25-35px
- Mai ombre dure o nette

### Borders
```css
/* Mix di netti e morbidi */
border: 1px solid rgba(26,58,58,0.12);  /* Netto */
border: 2px solid rgba(212,135,109,0.2); /* Morbido con trasparenza */
```

### Icons
- **NO icon pack standard** (Feather, Heroicons, etc.)
- **SÌ illustrazioni line-art custom** o minimali
- Stroke-width: 1.5px per coerenza

### Immagini
- **Filtro fotografico coerente**:
  ```css
  filter: contrast(1.1) saturate(1.05) brightness(1.02);
  ```
- Warm tone leggero (+5% warmth)

---

## 🚀 Elementi Unici da Implementare

### 1. Timeline Animata "15 Anni di Esperienza"
```
2010 ──●─────────●─────────●─────────● 2026
       │         │         │         │
   Apertura  500 paz  1000 paz  2000 paz
```
- Animata allo scroll
- Linea che si disegna progressivamente
- Milestone che appaiono in sequenza

### 2. Counter Animato
```javascript
// Conta da 0 a 2000 quando entra nel viewport
useEffect(() => {
  if (inView) {
    const interval = setInterval(() => {
      setCount(prev => Math.min(prev + 50, 2000));
    }, 30);
  }
}, [inView]);
```

### 3. Before/After Slider
- Slider interattivo per casi studio
- Drag handle personalizzato
- Smooth transition

### 4. Badge Fluttuante "Prima Visita Gratuita"
```css
.floating-badge {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  animation: float 3s ease-in-out infinite;
}
```

### 5. Newsletter Popup Elegante
- Design coerente con il sito
- NON invasivo (appare dopo 30s o allo scroll 50%)
- Micro-animazione di ingresso elegante

### 6. Stelle Recensioni Animate
```javascript
// Stelle che si riempiono in sequenza
stars.forEach((star, i) => {
  setTimeout(() => {
    star.classList.add('filled');
  }, i * 100);
});
```

---

## 🛠️ Tecnologie & Implementazione

### CSS Custom Properties
```css
:root {
  /* Theme può essere switchato dinamicamente */
  --theme-background: var(--color-surface);
  --theme-text: var(--color-text-primary);
}

[data-theme="dark"] {
  --theme-background: var(--color-surface-dark);
  --theme-text: var(--color-text-on-dark);
}
```

### Intersection Observer API
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
```

### CSS Grid con Subgrid
```css
.bento-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
}

.bento-item-large {
  grid-column: span 8;
  grid-row: span 2;
  display: grid;
  grid-template-rows: subgrid; /* Allineamenti perfetti */
}
```

### CSS Transforms 3D
```css
.card-3d {
  transform: perspective(1000px) rotateY(2deg);
  transition: transform 0.4s var(--ease-spring);
}

.card-3d:hover {
  transform: perspective(1000px) rotateY(0deg) translateY(-8px);
}
```

### Backdrop Filter (Glassmorphism)
```css
.glass-card {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}
```

---

## 🎨 Ispirazione Visiva

### Siti da Studiare
1. **awwwards.com** (cerca "medical" o "luxury")
2. **godly.website** (categoria healthcare)
3. **lapa.ninja** (sezione "minimal")
4. **Kinfolk Magazine** (editorial layout)
5. **British Dental Journal** (professionalità medica)

### Riferimenti Colore
- **Terracotta**: Case pugliesi al tramonto
- **Verde salvia**: Piante mediterranee, ulivi
- **Blu petrolio**: Professionalità senza essere freddo

---

## 📝 Checklist Implementazione

### Fase 1: Fondamenta (FATTO ✅)
- [x] Nuova tipografia (Fraunces, Switzer, JetBrains Mono)
- [x] Nuova palette colori
- [x] Grain texture globale
- [x] CSS variables aggiornate

### Fase 2: Hero Section (IN CORSO 🔄)
- [ ] Layout monumentale con tipografia offset
- [ ] Badge fluttuanti certificazioni
- [ ] CTA con micro-animazioni sofisticate
- [ ] Gradient mesh organico background

### Fase 3: Sezioni (PROSSIMO)
- [ ] Bento Box grid servizi
- [ ] Carousel testimonianze con parallax
- [ ] Timeline "15 anni" animata
- [ ] Counter "2000+ pazienti"

### Fase 4: Dettagli & Polish
- [ ] Form contatti con animazioni focus
- [ ] Before/After slider
- [ ] Newsletter popup elegante
- [ ] Custom icons illustrati
- [ ] Filtro fotografico coerente

### Fase 5: Ottimizzazione
- [ ] Performance audit
- [ ] Accessibility check
- [ ] Mobile refinement
- [ ] Cross-browser testing

---

## 🎯 Obiettivo Finale

**Un sito che:**
- Sembra progettato da uno studio di design boutique
- NON sembra un template
- Il Dr. Mario Giugno è orgoglioso di mostrare
- I pazienti RICORDANO

**Risultato atteso:**
> "Non sembra il sito di un dentista... sembra una rivista di design. Wow!"

---

## 📊 Metriche di Successo

- Tempo sulla pagina: +40%
- Bounce rate: -25%
- Conversioni form: +35%
- Google PageSpeed: 90+
- Commenti "Wow" da pazienti: Innumerevoli 😊

---

**Creato**: Febbraio 2026  
**Status**: IN IMPLEMENTAZIONE  
**Designer**: AI + Vision Dr. Mario Giugno
