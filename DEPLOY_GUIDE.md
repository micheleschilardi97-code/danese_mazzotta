# 🚀 Guida Deploy Multi-Cliente su Vercel

Questa guida spiega come deployare lo stesso codebase per clienti diversi con configurazioni separate.

---

## 📋 Struttura Configgg

```
config/
  ├── index.ts                    # Config manager principale
  └── clients/
      ├── mario-giugno.ts         # Config cliente 1
      └── nuzzoli-zacchino.ts     # Config cliente 2
```

Ogni file cliente contiene:
- Informazioni studio
- Contatti
- Orari
- Hero section
- SEO
- Immagini
- Branding

---

## 🎯 Come Aggiungere un Nuovo Cliente

### 1. Crea nuovo file config

Duplica un file esistente in `config/clients/`:

```bash
cp config/clients/mario-giugno.ts config/clients/nuovo-cliente.ts
```

### 2. Modifica i dati

Apri `nuovo-cliente.ts` e personalizza tutte le informazioni.

### 3. Registra il cliente

In `config/index.ts`, aggiungi:

```typescript
import { clientConfig as nuovoClienteConfig } from './clients/nuovo-cliente';

const clients = {
  'mario-giugno': marioGiugnoConfig,
  'nuzzoli-zacchino': nuzzoliZacchinoConfig,
  'nuovo-cliente': nuovoClienteConfig,  // ← Aggiungi qui
} as const;
```

---

## 🚀 Deploy su Vercel

### Opzione A: Deploy Multipli (Consigliato)

Ogni cliente avrà il proprio deploy con dominio custom.

#### 1. Push su GitHub

```bash
git add .
git commit -m "Add multi-client support"
git push origin main
```

#### 2. Primo Deploy (Mario Giugno)

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "Add New Project"
3. Importa il repository GitHub
4. **Environment Variables**:
   - Key: `NEXT_PUBLIC_CLIENT_ID`
   - Value: `mario-giugno`
5. Deploy
6. Aggiungi dominio custom: `studiomariogiugno.it`

#### 3. Secondo Deploy (Nuzzoli Zacchino)

1. Vercel Dashboard → Clicca sul progetto
2. Settings → General → Duplicate Project
3. Rinomina: "dentista-nuzzoli-zacchino"
4. Settings → Environment Variables
5. **Modifica la variabile**:
   - Key: `NEXT_PUBLIC_CLIENT_ID`
   - Value: `nuzzoli-zacchino`
6. Redeploy
7. Aggiungi dominio custom: `nuzzolizacchino.it`

#### 4. Deploy Successivi

Per ogni nuovo cliente:
- Duplicate Project
- Cambia `NEXT_PUBLIC_CLIENT_ID`
- Aggiungi dominio custom

---

### Opzione B: Deploy Singolo con Subdomini

Un solo deploy, routing basato su dominio (più complesso).

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  if (hostname.includes('nuzzolizacchino')) {
    process.env.NEXT_PUBLIC_CLIENT_ID = 'nuzzoli-zacchino';
  } else {
    process.env.NEXT_PUBLIC_CLIENT_ID = 'mario-giugno';
  }
}
```

---

## 🔧 Test in Locale

### Cliente 1 (Mario Giugno)
```bash
echo "NEXT_PUBLIC_CLIENT_ID=mario-giugno" > .env.local
npm run dev
```

### Cliente 2 (Nuzzoli Zacchino)
```bash
echo "NEXT_PUBLIC_CLIENT_ID=nuzzoli-zacchino" > .env.local
npm run dev
```

---

## 📝 Uso nel Codice

### Prima (Hard-coded):
```typescript
<h1>Studio Dr. Mario Giugno</h1>
<a href="tel:+390832199315">0832 199 315</a>
```

### Dopo (Dynamic):
```typescript
import { config } from '@/config';

<h1>{config.studio.nome}</h1>
<a href={`tel:${config.contatti.telefonoLink}`}>
  {config.contatti.telefono}
</a>
```

### Helper Functions:
```typescript
import { getStudioInfo, getContatti, getHeroData } from '@/config';

const studio = getStudioInfo();
const contatti = getContatti();
const hero = getHeroData();
```

---

## 🎨 Personalizzazione Immagini

### Struttura cartelle:
```
public/
  └── images/
      ├── mario-giugno/
      │   ├── logo.png
      │   ├── hero-bg.jpg
      │   └── doctor.jpg
      └── nuzzoli-zacchino/
          ├── logo.png
          ├── hero-bg.jpg
          └── doctor.jpg
```

### Nel config:
```typescript
images: {
  logo: "/images/mario-giugno/logo.png",
  heroBg: "/images/mario-giugno/hero-bg.jpg",
  doctor: "/images/mario-giugno/doctor.jpg"
}
```

---

## ✅ Checklist Pre-Deploy

- [ ] Config cliente creato in `config/clients/`
- [ ] Cliente registrato in `config/index.ts`
- [ ] Immagini caricate in `public/images/[cliente]/`
- [ ] Test in locale con `.env.local`
- [ ] Repository pushato su GitHub
- [ ] Environment variable impostata su Vercel
- [ ] Dominio custom configurato
- [ ] DNS puntato a Vercel
- [ ] SSL attivato

---

## 💰 Costi Vercel

- **Hobby Plan** (Gratis):
  - 100 GB bandwidth/mese
  - Deploy illimitati
  - Perfetto per 2-3 siti

- **Pro Plan** ($20/mese):
  - 1 TB bandwidth/mese
  - Team collaboration
  - Per 5+ clienti

---

## 🔄 Aggiornamenti

Per aggiornare tutti i siti contemporaneamente:

1. Modifica il codice comune
2. Push su GitHub
3. Vercel redeploya automaticamente tutti i progetti

Per aggiornamenti specifici per cliente:
- Modifica solo il file config del cliente
- Push su GitHub
- Solo quel deploy viene aggiornato

---

## 🐛 Troubleshooting

### "Cliente non trovato"
- Verifica che `NEXT_PUBLIC_CLIENT_ID` sia impostato
- Controlla il nome esatto in `config/index.ts`

### "Config non si aggiorna"
- Rebuilda il progetto: `npm run build`
- Cancella `.next` folder
- Redeploy su Vercel

### "Immagini non si vedono"
- Controlla i path in `config.images`
- Verifica che le immagini esistano in `public/`
- Usa path assoluti: `/images/...`

---

## 📞 Supporto

Per domande o problemi, contatta lo sviluppatore.
