# 🎨 Multi-Cliente Setup - Quick Start

## ✅ Setup Completato!

Hai ora un sistema multi-cliente con:
- ✅ Config centralizzato per cliente
- ✅ 2 clienti già configurati (Danese-Mazzotta + Nuzzoli Zacchino)
- ✅ Sistema di switching tramite env variable
- ✅ Deploy guide per Vercel

---

## 🚀 Test Rapido

### 1. Testa Cliente 1 (Danese-Mazzotta)
```bash
echo "NEXT_PUBLIC_CLIENT_ID=danese-mazzotta" > .env.local
npm run dev
```
Apri http://localhost:3000

### 2. Testa Cliente 2 (Nuzzoli Zacchino)
```bash
echo "NEXT_PUBLIC_CLIENT_ID=nuzzoli-zacchino" > .env.local
npm run dev
```
Ricarica la pagina

---

## 📁 File Modificati

### Nuovi file creati:
- `config/clients/danese-mazzotta.ts` - Config Danese-Mazzotta
- `config/clients/nuzzoli-zacchino.ts` - Config Dr. Nuzzoli
- `config/index.ts` - Manager centrale
- `.env.example` - Template variabili
- `.env.local` - Env locale
- `DEPLOY_GUIDE.md` - Guida deploy completa

### File aggiornati per usare config:
- `components/Navbar/navbar.data.ts`
- `app/(sections)/hero/hero.data.ts`

---

## ➕ Aggiungere Nuovo Cliente

### 1. Crea config cliente
```bash
cp config/clients/danese-mazzotta.ts config/clients/nuovo-cliente.ts
```

### 2. Modifica i dati in `nuovo-cliente.ts`

### 3. Registra in `config/index.ts`:
```typescript
import { clientConfig as nuovoClienteConfig } from './clients/nuovo-cliente';

const clients = {
  'danese-mazzotta': daneseMazzottaConfig,
  'nuzzoli-zacchino': nuzzoliZacchinoConfig,
  'nuovo-cliente': nuovoClienteConfig, // ← Aggiungi
}
```

### 4. Test
```bash
echo "NEXT_PUBLIC_CLIENT_ID=nuovo-cliente" > .env.local
npm run dev
```

---

## 🌐 Deploy su Vercel

### Per ogni cliente:

1. **Deploy su Vercel**
   - Importa da GitHub
   - Aggiungi env variable: `NEXT_PUBLIC_CLIENT_ID=danese-mazzotta`
   - Deploy

2. **Dominio Custom**
   - Settings → Domains
   - Aggiungi: `danesemazzotta.it`
   - Configura DNS

3. **Duplicate per altri clienti**
   - Settings → Duplicate Project
   - Cambia env variable: `NEXT_PUBLIC_CLIENT_ID=nuzzoli-zacchino`
   - Aggiungi nuovo dominio: `nuzzolizacchino.it`

**Un solo codebase → N siti con dati diversi!**

---

## 📖 Documentazione

Leggi `DEPLOY_GUIDE.md` per:
- Guide dettagliate deploy
- Troubleshooting
- Best practices
- Gestione immagini
- DNS configuration

---

## 🔄 Prossimi Step

Per completare l'integrazione, aggiorna anche:
- [ ] `app/(sections)/about/about.data.ts`
- [ ] `app/(sections)/contatti/contatti.data.ts`
- [ ] `components/Footer/footer.data.ts`
- [ ] `app/metadata.ts` (SEO)

Vuoi che li aggiorno automaticamente?
