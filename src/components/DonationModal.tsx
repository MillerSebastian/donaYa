import React, { useState } from 'react';
import { X, Heading as Bread, Shirt, Home as HomeIcon, Heart, ArrowRight, Eye } from 'lucide-react';
import DonationSection from './DonationSection';
import Swal from 'sweetalert2';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface DonationOption {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
}

const donationOptions: DonationOption[] = [
  {
    id: 'food',
    title: 'Donar para comida',
    icon: <Bread size={32} />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Ayuda a proporcionar alimentos nutritivos a familias que lo necesitan'
  },
  {
    id: 'clothing',
    title: 'Donar para ropa',
    icon: <Shirt size={32} />,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'Contribuye con vestimenta adecuada para personas en situación vulnerable'
  },
  {
    id: 'housing',
    title: 'Donar para hogar',
    icon: <HomeIcon size={32} />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Apoya la construcción y mejora de viviendas dignas'
  },
  {
    id: 'voluntary',
    title: 'Donación voluntaria',
    icon: <Heart size={32} />,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'Contribución libre para apoyar todas nuestras causas'
  }
];

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<DonationOption | null>(null);

  if (!isOpen) return null;

  const handleDonate = () => {
    Swal.fire({
      title: '¡Gracias por tu generosidad!',
      text: 'Serás redirigido a la plataforma de pagos segura.',
      icon: 'success',
      confirmButtonText: 'Continuar',
      confirmButtonColor: '#10B981'
    });
  };

  const handleViewMore = () => {
    Swal.fire({
      title: 'Conoce más sobre donaYa',
      text: 'Visita nuestra página principal para más información.',
      icon: 'info',
      confirmButtonText: 'Ir a la página',
      confirmButtonColor: '#3B82F6'
    });
  };

  const handleBack = () => {
    setSelectedOption(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] overflow-hidden relative animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {!selectedOption ? (
          <div className="p-8 h-full flex flex-col">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">donaYa</h1>
              <p className="text-gray-600">Elige cómo quieres ayudar a las familias vulnerables</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {donationOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option)}
                  className="p-6 rounded-xl border-2 border-gray-200 hover:border-green-500 cursor-pointer transition-all duration-300 hover:shadow-lg group flex flex-col items-center text-center"
                >
                  <div className={`p-4 rounded-full ${option.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                    <div className={option.color}>
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                  <ArrowRight size={16} className="mt-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <DonationSection
            option={selectedOption}
            onBack={handleBack}
            onDonate={handleDonate}
            onViewMore={handleViewMore}
          />
        )}
      </div>
    </div>
  );
};

export default DonationModal;