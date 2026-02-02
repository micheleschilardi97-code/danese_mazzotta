# Video Background per Hero Section

## File Necessari

Per il miglior effetto visivo, aggiungi questi video nella cartella `/public/videos/`:

### 1. `studio-dentistico.mp4` (Desktop)
**Requisiti:**
- Risoluzione: 1920x1080 (Full HD) o superiore
- Durata: 10-20 secondi (loop)
- Formato: MP4 (H.264)
- Dimensione: Max 5MB (compresso)
- FPS: 30fps
- Contenuto: Riprese dello studio dentistico, attrezzature moderne, sorrisi pazienti

### 2. `studio-dentistico-mobile.mp4` (Mobile)
**Requisiti:**
- Risoluzione: 720x1280 (9:16 vertical) 
- Durata: 10-20 secondi (loop)
- Formato: MP4 (H.264)
- Dimensione: Max 3MB (compresso)
- FPS: 30fps
- Contenuto: Versione verticale/mobile-friendly

## Come Ottimizzare i Video

### Usando FFmpeg (consigliato):

```bash
# Desktop video - compressione ottimizzata
ffmpeg -i input.mp4 -vf scale=1920:1080 -c:v libx264 -preset slow -crf 28 -movflags +faststart -an studio-dentistico.mp4

# Mobile video - formato verticale
ffmpeg -i input.mp4 -vf scale=720:1280 -c:v libx264 -preset slow -crf 30 -movflags +faststart -an studio-dentistico-mobile.mp4
```

### Online Tools:
- **Cloudinary**: https://cloudinary.com/
- **HandBrake**: https://handbrake.fr/
- **Compressor.io**: https://compressor.io/

## Risorse Video Stock Gratuite

Se non hai video dello studio, usa questi siti:

1. **Pexels Videos**: https://www.pexels.com/videos/
   - Cerca: "dental clinic", "dentist office", "medical equipment"

2. **Pixabay Videos**: https://pixabay.com/videos/
   - Cerca: "dentistry", "dental care", "smile"

3. **Videvo**: https://www.videvo.net/
   - Cerca: "medical", "healthcare", "dental"

## Fallback

Se non vuoi usare i video:
1. L'immagine di fallback viene comunque mostrata
2. Puoi disabilitare il video rimuovendo i campi `backgroundVideo` e `backgroundVideoMobile` dal file `hero.data.ts`

## Performance Tips

- ✅ Usa formato MP4 con codec H.264
- ✅ Comprimi il video mantenendo qualità accettabile (CRF 25-30)
- ✅ Rimuovi audio (non necessario per background)
- ✅ Usa `faststart` flag per streaming immediato
- ✅ Testa su mobile per verificare dimensioni file
- ❌ Evita video troppo lunghi (max 20 secondi)
- ❌ Evita file troppo grandi (rallentano il caricamento)
