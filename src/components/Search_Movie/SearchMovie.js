import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    // Si el campo de búsqueda está vacío, ejecutar la búsqueda con una cadena vacía
    if (value === '') {
      onSearch('');
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar películas..."
        value={query}
        onChange={handleInputChange}
        className="border border-gray-400 px-4 py-2 rounded-md mr-2 w-[50%]"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBar;