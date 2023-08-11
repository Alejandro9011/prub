import React, { useContext } from 'react';
import { HouseContext } from '../../Context/Context';
import './filtro.css'; // Agrega esta importación para enlazar el archivo CSS

const Filtro = ({ selectedType, handleTypeChange, searchTerm }) => {
  const { data } = useContext(HouseContext);

  const uniqueCountries = Array.from(new Set(data.map((house) => house.country)));

  return (
    <div className='container-filters'>
      <div className='filter-by-type'>
        <span>Pais</span>
        <select value={selectedType} onChange={handleTypeChange}>
          <option value=''>Todos</option>
          {uniqueCountries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filtro;
