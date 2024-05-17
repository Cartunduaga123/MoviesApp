// RentMoviePage.js
import React from 'react';
import RentalForm from '../../components/RentaForm/RentaFormComponent';
import useRentalForm from '../../hooks/useRentalForm';
import SuccessModalComponent from '../../components/SuccessModal/SuccessComponentModal';


function RentMoviePage() {
  const { formData, handleChange, handleSubmit, isLoading, error, showSuccessModal, handleCloseSuccessModal } = useRentalForm();

  return (
    <div>
      <h1>Renta de Película</h1>
      <RentalForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        isLoading={isLoading} 
        error={error} 
      />
      {showSuccessModal && (
        <SuccessModalComponent onClose={handleCloseSuccessModal} />
      )}
    </div>
  );
}

export default RentMoviePage;