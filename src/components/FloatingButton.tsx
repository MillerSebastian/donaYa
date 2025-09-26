import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';

interface FloatingButtonProps {
  onOpenModal: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onOpenModal }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showMessage && (
        <div className="absolute bottom-16 right-0 bg-white px-4 py-2 rounded-lg shadow-lg border-2 border-green-500 animate-pulse mb-2">
          <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
            ¡Reacciona para ayudar a los vulnerables!
          </p>
          <div className="absolute bottom-[-8px] right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-500"></div>
        </div>
      )}
      
      <button
        onClick={onOpenModal}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
      >
        <Home size={24} className="group-hover:animate-pulse" />
      </button>
    </div>
  );
};

export default FloatingButton;