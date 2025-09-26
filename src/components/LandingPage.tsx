import React from 'react';
import { Code, Zap, Heart, BarChart3, Shield, Globe } from 'lucide-react';

const LandingPage: React.FC = () => {
  const snippetCode = `<!-- Integra donaYa en tu sitio web -->
<script src="https://donaya.app/widget.js"></script>
<script>
  donaYa.init({
    position: 'bottom-right',
    theme: 'default'
  });
</script>`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-green-500 p-2 rounded-lg mr-3">
                <Heart size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">donaYa</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-500 transition-colors">Características</a>
              <a href="#demo" className="text-gray-600 hover:text-green-500 transition-colors">Demo</a>
              <a href="#integration" className="text-gray-600 hover:text-green-500 transition-colors">Integración</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Donaciones <span className="text-green-500">simplificadas</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            donaYa es un widget adaptable que permite integrar un sistema completo de donaciones 
            en cualquier sitio web con una sola línea de código.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver demo en vivo
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Integrar ahora
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">¿Por qué elegir donaYa?</h2>
            <p className="text-xl text-gray-600">Características que hacen la diferencia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Code size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fácil integración</h3>
              <p className="text-gray-600">Una sola línea de código para integrar el sistema completo en tu sitio web.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <Zap size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rápido y eficiente</h3>
              <p className="text-gray-600">Widget optimizado que no afecta la velocidad de carga de tu sitio.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Heart size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Múltiples causas</h3>
              <p className="text-gray-600">Cuatro categorías de donación: comida, ropa, hogar y donación libre.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <BarChart3 size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Métricas de impacto</h3>
              <p className="text-gray-600">Gráficos interactivos que muestran el impacto real de las donaciones.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Shield size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Seguro y confiable</h3>
              <p className="text-gray-600">Pagos seguros con encriptación y protección de datos avanzada.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <Globe size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Totalmente adaptable</h3>
              <p className="text-gray-600">Se adapta al diseño de cualquier sitio web automáticamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ve donaYa en acción</h2>
            <p className="text-xl text-gray-600">Prueba el widget flotante en la esquina inferior derecha</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Ejemplo de integración</h3>
                <p className="text-gray-300 mb-6">
                  Este sitio web tiene donaYa integrado. Haz clic en el botón verde flotante 
                  para experimentar el flujo completo de donación.
                </p>
                <div className="bg-green-500 p-4 rounded-lg">
                  <p className="font-semibold">💡 Tip: Busca el botón flotante verde con el icono de casa</p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-300 font-mono">
                  <div className="mb-2">Sitio web de ejemplo</div>
                  <div className="bg-gray-700 p-4 rounded">
                    <div className="mb-2">🏠 Mi Página Web</div>
                    <div className="text-xs text-gray-400">Contenido del sitio...</div>
                    <div className="mt-4 text-right">
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full inline-block text-xs">
                        🏠 donaYa
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Integración súper simple</h2>
            <p className="text-xl text-gray-600">Agrega donaYa a tu sitio en menos de 2 minutos</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 px-6 py-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-6"></div>
                <span className="text-gray-300 text-sm">index.html</span>
              </div>
            </div>
            <div className="p-6">
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-800">{snippetCode}</code>
              </pre>
              <div className="mt-6 text-center">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mr-4">
                  Copiar código
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Ver documentación
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500 p-2 rounded-lg mr-3">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">donaYa</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Democratizando las donaciones, un widget a la vez.
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 donaYa. Construido con ❤️ para ayudar a las familias vulnerables.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;