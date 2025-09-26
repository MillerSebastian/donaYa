import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import FloatingButton from './components/FloatingButton';
import DonationModal from './components/DonationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <LandingPage />
      <FloatingButton onOpenModal={handleOpenModal} />
      <DonationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;