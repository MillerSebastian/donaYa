import React from 'react';
import { ArrowLeft, Heart, Users } from 'lucide-react';
import ImpactChart from './ImpactChart';
import type { DonationOption } from './DonationModal';

interface DonationSectionProps {
  option: DonationOption;
  onBack: () => void;
  onDonate: () => void;
}

const DonationSection: React.FC<DonationSectionProps> = ({
  option,
  onBack,
  onDonate,
}) => {
  const getImpactData = () => {
    switch (option.id) {
      case 'food':
        return {
          type: 'line',
          title: 'Comidas entregadas por mes',
          data: [450, 650, 800, 1200, 1500, 1800],
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
          color: 'rgb(59, 130, 246)'
        };
      case 'clothing':
        return {
          type: 'bar',
          title: 'Prendas donadas por categoría',
          data: [300, 450, 200, 350, 150],
          labels: ['Infantil', 'Adultos', 'Calzado', 'Abrigos', 'Accesorios'],
          color: 'rgb(16, 185, 129)'
        };
      case 'housing':
        return {
          type: 'doughnut',
          title: 'Progreso de construcción de hogares',
          data: [75, 25],
          labels: ['Construidos', 'En proceso'],
          color: ['rgb(59, 130, 246)', 'rgb(229, 231, 235)']
        };
      default:
        return {
          type: 'bar',
          title: 'Impacto general por área',
          data: [1200, 800, 150, 2500],
          labels: ['Comida', 'Ropa', 'Hogares', 'Beneficiarios'],
          color: 'rgb(16, 185, 129)'
        };
    }
  };

  const impactData = getImpactData();

  const handleViewMore = () => {
    switch (option.id) {
      case 'food':
        window.open('https://www.eatcloud.com/comida-pa-mi-gente', '_blank');
        break;
      case 'clothing':
        window.open('https://www.fundesoe.org/copy-of-primera-infancia', '_blank');
        break;
      case 'housing':
        window.open('https://colombia.techo.org', '_blank');
        break;
      default:
        window.open('https://unicef.org.co/donar', '_blank');
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver
        </button>
        
        <div className="flex items-center">
          <div className={`p-3 rounded-full ${option.bgColor} mr-4`}>
            <div className={option.color}>
              {option.icon}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{option.title}</h2>
            <p className="text-gray-600">{option.description}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Impacto logrado</h3>
            <div className="bg-gray-50 p-4 rounded-xl h-80">
              <ImpactChart {...impactData} />
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Users size={24} className="text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">2,847</p>
                <p className="text-sm text-gray-600">Familias beneficiadas</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Heart size={24} className="text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">$45,320</p>
                <p className="text-sm text-gray-600">Total recaudado</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Tu donación marca la diferencia
              </h4>
              <p className="text-gray-600 mb-6">
                Cada contribución ayuda directamente a familias en situación vulnerable.
                Juntos podemos construir un futuro mejor para quienes más lo necesitan.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={onDonate}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                >
                  Donar ahora
                </button>
                
                <button
                  onClick={handleViewMore}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Ver más información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
