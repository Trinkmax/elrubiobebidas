# El Rubio 24hs - Landing Page

Landing Page SPA moderna y premium para "El Rubio 24hs", local de bebidas en Frías, Santiago del Estero, Argentina.

## 🚀 Características

- ✨ Diseño moderno y limpio con fondo blanco y acentos rojos
- 🎨 Animaciones fluidas con Framer Motion
- 📱 Diseño 100% responsive (Mobile-first)
- 🛍️ Catálogo de bebidas con integración directa a WhatsApp
- 🗺️ Navegación por páginas con React Router
- 📍 Sección de ubicación con mapa integrado
- ⚡ Desarrollado con React + Vite + TypeScript
- 🎯 Optimizado para conversiones

## 🛠️ Tech Stack

- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de estilos utility-first
- **Framer Motion** - Animaciones avanzadas
- **React Icons** - Iconografía moderna
- **React Router DOM** - Navegación entre páginas

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador:
```
http://localhost:5173
```

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📱 Funcionalidades de WhatsApp

- Botón flotante persistente para consultas generales
- Botón "PEDIR AHORA" en cada producto con mensaje personalizado
- Integración directa con WhatsApp Business API

**Nota:** Recuerda actualizar el número de WhatsApp en todos los componentes:
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/ProductCard.tsx`
- `src/components/LocationSection.tsx`
- `src/components/WhatsAppButton.tsx`

Reemplazar `5493858123456` con el número real del negocio.

## 📂 Estructura del Proyecto

```
elrubiobebidas/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── LocationSection.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Bebidas.tsx
│   ├── data/
│   │   └── products.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── images/
│   └── logo.png
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#dc2626', // red-600
    dark: '#b91c1c',    // red-700
    light: '#ef4444',   // red-500
  },
}
```

### Productos

Edita el archivo `src/data/products.ts` para agregar, modificar o eliminar productos y promos.

### Ubicación

Actualiza el iframe del mapa en `src/components/LocationSection.tsx` con las coordenadas correctas del negocio.

## 📄 Licencia

© 2024 El Rubio 24hs. Todos los derechos reservados.

---

Desarrollado con ❤️ para El Rubio 24hs

