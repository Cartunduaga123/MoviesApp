import React from 'react';
import './RentalFormComponent.css'; // Importa el archivo de estilos

function RentalForm({ formData, handleChange, handleSubmit, isLoading, error }) {
  return (
    <form className="rental-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Nombre:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="form-input" 
          disabled={isLoading} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="form-input" 
          disabled={isLoading} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate" className="form-label">Fecha de Inicio de Renta:</label>
        <input 
          type="date" 
          id="startDate" 
          name="startDate" 
          value={formData.startDate} 
          onChange={handleChange} 
          className="form-input" 
          disabled={isLoading} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate" className="form-label">Fecha de Fin de Renta:</label>
        <input 
          type="date" 
          id="endDate" 
          name="endDate" 
          value={formData.endDate} 
          onChange={handleChange} 
          className="form-input" 
          disabled={isLoading} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="paymentMethod" className="form-label">Método de Pago:</label>
        <select 
          id="paymentMethod" 
          name="paymentMethod" 
          value={formData.paymentMethod} 
          onChange={handleChange} 
          className="form-select" 
          disabled={isLoading} 
          required
        >
          <option value="">Selecciona un método de pago</option>
          <option value="tarjeta">Tarjeta de Crédito</option>
          <option value="efectivo">Efectivo</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="deliveryAddress" className="form-label">Dirección de Entrega:</label>
        <textarea 
          id="deliveryAddress" 
          name="deliveryAddress" 
          value={formData.deliveryAddress} 
          onChange={handleChange} 
          className="form-textarea" 
          disabled={isLoading} 
          required 
        />
      </div>
      {error && <p className="error-message">Error: {error.message}</p>}
      <button type="submit" className="submit-button" disabled={isLoading}>
        {isLoading ? 'Cargando...' : 'Rentar Película'}
      </button>
    </form>
  );
}

export default RentalForm;