# 🚀 donaYa - Widget de Donaciones

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react" alt="React Version" />
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript" alt="TypeScript Version" />
  <img src="https://img.shields.io/badge/Vite-5.4.2-purple?style=for-the-badge&logo=vite" alt="Vite Version" />
  <img src="https://img.shields.io/badge/Tailwind-3.4.1-cyan?style=for-the-badge&logo=tailwindcss" alt="Tailwind Version" />
</div>

<div align="center">
  <h3>🎯 Widget de donaciones adaptable para cualquier sitio web</h3>
  <p>Integra donaYa en tu sitio web con una sola línea de código y permite a tus usuarios ayudar a familias vulnerables</p>
</div>

---

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🚀 Instalación Rápida](#-instalación-rápida)
- [🛠️ Desarrollo Local](#️-desarrollo-local)
- [📦 Despliegue](#-despliegue)
- [🔧 Configuración](#-configuración)
- [📱 Uso del Widget](#-uso-del-widget)
- [🎨 Personalización](#-personalización)
- [📊 Estructura del Proyecto](#-estructura-del-proyecto)
- [🧪 Testing](#-testing)
- [📚 Documentación](#-documentación)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)

---

## ✨ Características

### 🎯 **Funcionalidades Principales**

- ✅ **Widget flotante** - Botón flotante que no interfiere con el diseño
- ✅ **4 categorías de donación** - Comida, ropa, hogar y donación voluntaria
- ✅ **Integración simple** - Una sola línea de código
- ✅ **Responsive design** - Se adapta a cualquier dispositivo
- ✅ **Configuración flexible** - Colores, posición, tema personalizable
- ✅ **Notificaciones elegantes** - SweetAlert2 integrado
- ✅ **Enlaces reales** - Conexión con organizaciones de ayuda
- ✅ **API completa** - Control programático del widget

### 🛡️ **Tecnologías**

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Chart.js + React-ChartJS-2
- **Notifications**: SweetAlert2
- **Database**: Supabase (preparado para futuro)

---

## 🚀 Instalación Rápida

### **Opción 1: CDN (Recomendado para producción)**

```html
<!-- Agrega esto antes del cierre de </body> -->
<script src="https://tu-dominio.com/widget.js"></script>
<script>
  donaYa.init({
    position: "bottom-right",
    organizationId: "tu-organizacion",
    color: "#10B981",
  });
</script>
```

### **Opción 2: Descarga Local**

1. Descarga los archivos `widget.js` y `widget.html`
2. Súbelos a tu servidor web
3. Incluye el script en tu HTML

---

## 🛠️ Desarrollo Local

### **Prerrequisitos**

- Node.js 18+
- npm o yarn

### **Instalación**

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/donaya.git
cd donaya

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### **Scripts Disponibles**

```bash
npm run dev          # Servidor de desarrollo (puerto 3000)
npm run build        # Construir para producción
npm run preview      # Vista previa de la build
npm run lint         # Ejecutar ESLint
npm run typecheck    # Verificar tipos TypeScript
```

### **Acceder al Widget**

- **Aplicación principal**: http://localhost:3000
- **Página de prueba**: http://localhost:3000/test-integration.html
- **Widget directo**: http://localhost:3000/widget.html

---

## 📦 Despliegue

### **Opción 1: Vercel (Recomendado)**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Configurar variables de entorno (opcional)
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
```

### **Opción 2: Netlify**

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Construir y desplegar
npm run build
netlify deploy --prod --dir=dist
```

### **Opción 3: GitHub Pages**

```bash
# Instalar gh-pages
npm i -D gh-pages

# Agregar script al package.json
"deploy": "gh-pages -d dist"

# Desplegar
npm run build
npm run deploy
```

### **Opción 4: Servidor Web Tradicional**

```bash
# Construir para producción
npm run build

# Subir carpeta 'dist' a tu servidor web
# Asegúrate de que 'widget.js' y 'widget.html' estén en la raíz
```

---

## 🔧 Configuración

### **Variables de Entorno**

Crea un archivo `.env.local`:

```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

### **Configuración del Widget**

```javascript
donaYa.init({
  position: "bottom-right", // Posición del botón
  theme: "default", // Tema visual
  organizationId: "mi-org", // ID de tu organización
  color: "#10B981", // Color personalizado
  text: "Donar", // Texto del botón
});
```

### **Opciones Disponibles**

| Parámetro        | Tipo   | Valores                                                | Descripción                            |
| ---------------- | ------ | ------------------------------------------------------ | -------------------------------------- |
| `position`       | string | `bottom-right`, `bottom-left`, `top-right`, `top-left` | Posición del botón flotante            |
| `theme`          | string | `default`, `dark`, `light`                             | Tema visual del widget                 |
| `organizationId` | string | Cualquier string                                       | Identificador único de tu organización |
| `color`          | string | Código hexadecimal                                     | Color principal del widget             |
| `text`           | string | Cualquier texto                                        | Texto que aparece en el botón          |

---

## 📱 Uso del Widget

### **API del Widget**

```javascript
// Abrir el widget
donaya.open();

// Cerrar el widget
donaya.close();

// Destruir el widget (removerlo completamente)
donaya.destroy();

// Obtener configuración actual
donaya.config;
```

### **Ejemplo de Uso Avanzado**

```javascript
// Inicializar widget
donaya.init({
  position: "bottom-right",
  organizationId: "mi-org",
  color: "#10B981",
});

// Abrir widget programáticamente
document.getElementById("mi-boton").addEventListener("click", () => {
  donaya.open();
});

// Cerrar widget después de 10 segundos
setTimeout(() => {
  donaya.close();
}, 10000);
```

### **Categorías de Donación**

1. **🍞 Comida** - Donaciones para alimentos nutritivos
2. **👕 Ropa** - Donaciones de vestimenta adecuada
3. **🏠 Hogar** - Donaciones para construcción de viviendas
4. **❤️ Voluntaria** - Donaciones generales para todas las causas

---

## 🎨 Personalización

### **Colores Disponibles**

```javascript
// Verde (por defecto)
color: "#10B981";

// Azul
color: "#3B82F6";

// Rojo
color: "#EF4444";

// Púrpura
color: "#8B5CF6";

// Personalizado
color: "#TU_COLOR";
```

### **Posiciones del Widget**

```javascript
// Esquina inferior derecha (recomendado)
position: "bottom-right";

// Esquina inferior izquierda
position: "bottom-left";

// Esquina superior derecha
position: "top-right";

// Esquina superior izquierda
position: "top-left";
```

### **Temas Visuales**

```javascript
// Tema por defecto (claro)
theme: "default";

// Tema oscuro
theme: "dark";

// Tema claro
theme: "light";
```

---

## 📊 Estructura del Proyecto

```
donaya/
├── public/                     # Archivos públicos
│   ├── widget.js              # Script principal del widget
│   ├── widget.html            # Página del widget embebible
│   └── test-integration.html  # Página de prueba
├── src/                       # Código fuente
│   ├── components/            # Componentes React
│   │   ├── DonationModal.tsx
│   │   ├── DonationSection.tsx
│   │   ├── FloatingButton.tsx
│   │   ├── ImpactChart.tsx
│   │   └── LandingPage.tsx
│   ├── lib/                   # Utilidades y servicios
│   │   └── supabase.ts        # Configuración de Supabase
│   ├── App.tsx                # Componente principal
│   ├── main.tsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── docs/                      # Documentación
│   └── INTEGRACION.md         # Guía de integración
├── package.json               # Dependencias y scripts
├── vite.config.ts             # Configuración de Vite
├── tailwind.config.js         # Configuración de Tailwind
├── tsconfig.json              # Configuración de TypeScript
└── README.md                  # Este archivo
```

---

## 🧪 Testing

### **Página de Prueba**

Visita `http://localhost:3000/test-integration.html` para:

- Probar el widget en tiempo real
- Cambiar configuraciones dinámicamente
- Ver ejemplos de código
- Verificar compatibilidad

### **Pruebas Manuales**

1. **Integración básica**: Verificar que el widget se carga
2. **Responsive**: Probar en diferentes tamaños de pantalla
3. **Configuración**: Cambiar colores, posición y tema
4. **Funcionalidad**: Probar todas las categorías de donación
5. **Notificaciones**: Verificar que SweetAlert2 funciona
6. **API**: Probar métodos open(), close(), destroy()

---

## 📚 Documentación

### **Guías Disponibles**

- [Guía de Integración](./INTEGRACION.md) - Cómo integrar el widget
- [API Reference](./docs/API.md) - Documentación completa de la API
- [Personalización](./docs/CUSTOMIZATION.md) - Guía de personalización avanzada
- [Troubleshooting](./docs/TROUBLESHOOTING.md) - Solución de problemas

### **Ejemplos de Código**

```html
<!-- Integración básica -->
<script src="https://donaya.app/widget.js"></script>
<script>
  donaYa.init({ organizationId: "mi-org" });
</script>

<!-- Integración con configuración personalizada -->
<script src="https://donaya.app/widget.js"></script>
<script>
  donaYa.init({
    position: "bottom-left",
    color: "#3B82F6",
    theme: "dark",
    organizationId: "mi-organizacion",
  });
</script>

<!-- Integración con control programático -->
<script src="https://donaya.app/widget.js"></script>
<script>
  donaYa.init({ organizationId: "mi-org" });

  // Abrir widget al hacer clic en un botón
  document.getElementById("donar-btn").onclick = () => {
    donaya.open();
  };
</script>
```

---

## 🤝 Contribuir

### **Cómo Contribuir**

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### **Reportar Bugs**

Si encuentras un bug, por favor:

1. Verifica que no esté ya reportado
2. Crea un issue con:
   - Descripción detallada del problema
   - Pasos para reproducirlo
   - Captura de pantalla (si aplica)
   - Información del navegador y sistema operativo

### **Solicitar Features**

Para solicitar una nueva funcionalidad:

1. Verifica que no esté ya solicitada
2. Crea un issue con:
   - Descripción clara de la funcionalidad
   - Casos de uso
   - Beneficios esperados

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🆘 Soporte

### **Obtener Ayuda**

- 📧 Email: soporte@donaya.app
- 💬 Discord: [Servidor de donaYa](https://discord.gg/donaya)
- 📖 Documentación: [docs.donaya.app](https://docs.donaya.app)
- 🐛 Issues: [GitHub Issues](https://github.com/tu-usuario/donaya/issues)

### **FAQ**

**P: ¿El widget funciona en todos los navegadores?**
R: Sí, es compatible con Chrome, Firefox, Safari, Edge y navegadores móviles.

**P: ¿Puedo personalizar completamente el diseño?**
R: Sí, puedes cambiar colores, posición, tema y agregar CSS personalizado.

**P: ¿Es necesario un backend para usar el widget?**
R: No, el widget funciona sin backend. Solo necesitas el archivo `widget.js`.

**P: ¿Cómo puedo recibir las donaciones reales?**
R: Actualmente es un prototipo. Para donaciones reales, necesitarías integrar una pasarela de pagos.

---

<div align="center">
  <h3>🎉 ¡Gracias por usar donaYa!</h3>
  <p>Construido con ❤️ para ayudar a las familias vulnerables</p>
  
  [![GitHub stars](https://img.shields.io/github/stars/tu-usuario/donaya?style=social)](https://github.com/tu-usuario/donaya)
  [![GitHub forks](https://img.shields.io/github/forks/tu-usuario/donaya?style=social)](https://github.com/tu-usuario/donaya)
  [![GitHub watchers](https://img.shields.io/github/watchers/tu-usuario/donaya?style=social)](https://github.com/tu-usuario/donaya)
</div>
