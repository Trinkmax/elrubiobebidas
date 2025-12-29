# 🚀 Instrucciones de Instalación y Ejecución

## El Rubio 24hs - Landing Page

### 📋 Requisitos Previos

Asegúrate de tener instalado en tu sistema:
- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)

Para verificar si los tienes instalados, ejecuta en tu terminal:
```bash
node --version
npm --version
```

---

## 🛠️ Instalación

### Paso 1: Instalar Dependencias

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Router DOM
- Y todas las dependencias de desarrollo

⏱️ **Tiempo estimado:** 2-3 minutos (dependiendo de tu conexión a internet)

---

## ▶️ Ejecutar en Modo Desarrollo

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo. Verás algo como:

```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

🌐 **Abre tu navegador** y ve a: `http://localhost:5173`

La página se recargará automáticamente cada vez que hagas cambios en el código (Hot Module Replacement).

---

## 🏗️ Build para Producción

Cuando estés listo para desplegar la aplicación:

```bash
npm run build
```

Este comando:
1. Compila el código TypeScript
2. Optimiza todos los assets
3. Genera los archivos listos para producción en la carpeta `dist/`

### Vista Previa del Build

Para previsualizar el build de producción localmente:

```bash
npm run preview
```

---

## 📱 Configuración Importante: Número de WhatsApp

**ANTES DE DESPLEGAR**, debes actualizar el número de WhatsApp en los siguientes archivos:

Busca y reemplaza `5493858123456` con tu número real (formato internacional):

- `src/components/Navbar.tsx` (línea ~54)
- `src/components/Hero.tsx` (línea ~61)
- `src/components/ProductCard.tsx` (línea ~12)
- `src/components/LocationSection.tsx` (línea ~98 y ~108)
- `src/components/WhatsAppButton.tsx` (línea ~7)

**Formato del número:**
- Argentina: `549` + código de área SIN 0 + número
- Ejemplo: `5493858123456` (Frías, Santiago del Estero)

---

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#dc2626', // Tu color principal
    dark: '#b91c1c',
    light: '#ef4444',
  },
}
```

### Agregar/Editar Productos

Edita `src/data/products.ts` y agrega o modifica productos en el array.

### Cambiar Ubicación del Mapa

En `src/components/LocationSection.tsx`, actualiza el `src` del iframe con tu ubicación real de Google Maps.

---

## 🚀 Despliegue

### Opciones Recomendadas (Gratuitas):

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Arrastra la carpeta `dist/` a [Netlify Drop](https://app.netlify.com/drop)

3. **GitHub Pages**
   - Configura el repositorio
   - Usa GitHub Actions para desplegar automáticamente

---

## 🐛 Troubleshooting

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### El puerto 5173 está ocupado
```bash
npm run dev -- --port 3000
```

### Errores de TypeScript
```bash
npm run lint
```

---

## 📞 Soporte

Si tienes problemas con la instalación o configuración, revisa:
- El archivo `README.md` para más detalles técnicos
- La documentación oficial de [Vite](https://vitejs.dev/)
- La documentación de [React](https://react.dev/)

---

## ✅ Checklist Pre-Lanzamiento

- [ ] Instaladas todas las dependencias
- [ ] El proyecto corre correctamente en local
- [ ] Actualizado el número de WhatsApp en todos los componentes
- [ ] Actualizada la ubicación del mapa
- [ ] Agregados/editados los productos según tu inventario
- [ ] Probado en móvil y desktop
- [ ] Build de producción generado sin errores
- [ ] Desplegado en tu plataforma de hosting

---

¡Éxito con tu proyecto! 🎉

