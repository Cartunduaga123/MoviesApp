import { useState } from 'react';

function useRentalForm() {
  const [formData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false); 

  const handleChange = (e) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
    }, 4000);
  

  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
    showSuccessModal, // Estado para controlar la visibilidad del modal de éxito
    handleCloseSuccessModal // Función para cerrar el modal de éxito
  };
}

export default useRentalForm;
