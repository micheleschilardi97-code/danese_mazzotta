# Script per installare le librerie necessarie per animazioni avanzate
Write-Host "Installazione librerie per animazioni avanzate..." -ForegroundColor Green

# Naviga nella directory del progetto
Set-Location "c:\Users\michele\Desktop\dentista"

# Installa GSAP per animazioni timeline avanzate
npm install gsap

# Installa Lottie per animazioni vettoriali
npm install lottie-react

# Installa React Spring per animazioni fisiche
npm install @react-spring/web

Write-Host "`nLibrerie installate con successo!" -ForegroundColor Green
Write-Host "- GSAP: Timeline e animazioni avanzate" -ForegroundColor Cyan
Write-Host "- Lottie: Animazioni vettoriali JSON" -ForegroundColor Cyan
Write-Host "- React Spring: Animazioni basate su fisica" -ForegroundColor Cyan
