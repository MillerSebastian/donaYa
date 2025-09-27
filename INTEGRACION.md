# 🚀 Guía de Integración - donaYa Widget

## 📋 Descripción

donaYa es un widget de donaciones que se puede integrar fácilmente en cualquier sitio web con una sola línea de código.

## 🛠️ Instalación Rápida

### Método 1: Integración Básica

```html
<!-- Agrega este código antes del cierre de </body> -->
<script src="https://tu-dominio.com/widget.js"></script>
<script>
  donaYa.init({
    position: "bottom-right",
    organizationId: "tu-organizacion",
  });
</script>
```

### Método 2: Integración con Configuración Personalizada

```html
<script src="https://tu-dominio.com/widget.js"></script>
<script>
  donaYa.init({
    position: "bottom-right", // Posición del botón
    theme: "default", // Tema visual
    organizationId: "mi-org", // ID de tu organización
    color: "#10B981", // Color personalizado
    text: "Donar", // Texto del botón
  });
</script>
```

## ⚙️ Opciones de Configuración

| Parámetro        | Tipo   | Valores                                                | Descripción                            |
| ---------------- | ------ | ------------------------------------------------------ | -------------------------------------- |
| `position`       | string | `bottom-right`, `bottom-left`, `top-right`, `top-left` | Posición del botón flotante            |
| `theme`          | string | `default`, `dark`, `light`                             | Tema visual del widget                 |
| `organizationId` | string | Cualquier string                                       | Identificador único de tu organización |
| `color`          | string | Código hexadecimal                                     | Color principal del widget             |
| `text`           | string | Cualquier texto                                        | Texto que aparece en el botón          |

## 🎨 Personalización Visual

### Colores Disponibles

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

### Posiciones del Widget

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

## 🔧 API del Widget

### Métodos Disponibles

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

### Ejemplo de Uso Avanzado

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

## 📱 Responsive Design

El widget se adapta automáticamente a diferentes tamaños de pantalla:

- **Desktop**: Widget completo con todas las funcionalidades
- **Tablet**: Widget optimizado para pantallas medianas
- **Mobile**: Widget compacto y fácil de usar

## 🎯 Categorías de Donación

El widget incluye 4 categorías predefinidas:

1. **🍞 Comida** - Donaciones para alimentos
2. **👕 Ropa** - Donaciones de vestimenta
3. **🏠 Hogar** - Donaciones para vivienda
4. **❤️ Voluntaria** - Donaciones generales

## 🔒 Seguridad

- El widget se carga en un iframe aislado
- No accede a datos sensibles del sitio web
- Comunicación segura con el servidor
- Validación de datos en el frontend y backend

## 🚀 Ejemplo Completo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Sitio Web</title>
  </head>
  <body>
    <h1>Bienvenido a mi sitio web</h1>
    <p>Contenido de mi página...</p>

    <!-- Integración de donaYa -->
    <script src="https://donaya.app/widget.js"></script>
    <script>
      donaYa.init({
        position: "bottom-right",
        organizationId: "mi-organizacion-123",
        color: "#10B981",
        theme: "default",
      });
    </script>
  </body>
</html>
```

## 🧪 Página de Prueba

Para probar el widget, visita: `https://tu-dominio.com/test-integration.html`

Esta página incluye:

- Widget funcionando en tiempo real
- Botones para probar diferentes configuraciones
- Ejemplos de código
- Instrucciones detalladas

## 📞 Soporte

Si tienes problemas con la integración:

1. Verifica que el script se esté cargando correctamente
2. Revisa la consola del navegador para errores
3. Asegúrate de que la configuración sea válida
4. Contacta al equipo de soporte

## 🔄 Actualizaciones

El widget se actualiza automáticamente. No necesitas cambiar el código de integración cuando lanzamos nuevas funcionalidades.

---

**¡Listo!** Tu widget donaYa está integrado y listo para recibir donaciones. 🎉
