// donaYa Widget Script
(function () {
  "use strict";

  // Configuración por defecto
  const defaultConfig = {
    position: "bottom-right",
    theme: "default",
    apiUrl: "https://donaya.app/api",
    organizationId: null,
    color: "#10B981",
    text: "Donar",
  };

  // Función para cargar el widget
  function loadWidget(config) {
    const widgetConfig = { ...defaultConfig, ...config };

    // Crear contenedor del widget
    const widgetContainer = document.createElement("div");
    widgetContainer.id = "donaya-widget-container";
    widgetContainer.style.cssText = `
      position: fixed;
      ${widgetConfig.position.includes("bottom") ? "bottom" : "top"}: 20px;
      ${widgetConfig.position.includes("right") ? "right" : "left"}: 20px;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;

    // Crear iframe para el widget
    const iframe = document.createElement("iframe");
    iframe.src = `./widget.html?org=${widgetConfig.organizationId}&theme=${
      widgetConfig.theme
    }&color=${encodeURIComponent(widgetConfig.color)}`;
    iframe.style.cssText = `
      width: 350px;
      height: 500px;
      border: none;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      background: white;
    `;

    // Crear botón flotante
    const floatingButton = document.createElement("button");
    floatingButton.innerHTML = `
      <div style="
        background: ${widgetConfig.color};
        color: white;
        padding: 12px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        width: 56px;
        height: 56px;
      ">
        🏠
      </div>
    `;

    floatingButton.style.cssText = `
      background: none;
      border: none;
      cursor: pointer;
      transition: transform 0.3s ease;
    `;

    // Estado del widget
    let isOpen = false;

    // Event listeners
    floatingButton.addEventListener("click", () => {
      if (isOpen) {
        iframe.style.display = "none";
        isOpen = false;
      } else {
        iframe.style.display = "block";
        isOpen = true;
      }
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (isOpen && !widgetContainer.contains(e.target)) {
        iframe.style.display = "none";
        isOpen = false;
      }
    });

    // Inicialmente oculto
    iframe.style.display = "none";

    // Agregar elementos al DOM
    widgetContainer.appendChild(iframe);
    widgetContainer.appendChild(floatingButton);
    document.body.appendChild(widgetContainer);

    // Exponer API global
    window.donaya = {
      open: () => {
        iframe.style.display = "block";
        isOpen = true;
      },
      close: () => {
        iframe.style.display = "none";
        isOpen = false;
      },
      destroy: () => {
        widgetContainer.remove();
      },
      config: widgetConfig,
    };
  }

  // Función de inicialización
  window.donaya = window.donaya || {};
  window.donaya.init = loadWidget;

  // Auto-inicializar si hay configuración en el DOM
  const configScript = document.querySelector("script[data-donaya-config]");
  if (configScript) {
    try {
      const config = JSON.parse(
        configScript.getAttribute("data-donaya-config")
      );
      loadWidget(config);
    } catch (e) {
      console.error("Error parsing donaYa config:", e);
    }
  }
})();
