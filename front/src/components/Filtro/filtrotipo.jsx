
import React, { useContext } from 'react';
import { HouseContext } from '../../Context/Context';
import './filtro.css'; // Agrega esta importación para enlazar el archivo CSS

// export default Filtertype;
const Filtertype = ({ selectedType, handleTypeChange }) => {
    const { data } = useContext(HouseContext);

    const uniqueTypes = Array.from(new Set(data.map((house) => house.type)));

    return (
      <div className='container-filters'>
        <div className='filter-by-type'>
          <span>Tipo de Vivienda</span>
          <select value={selectedType} onChange={handleTypeChange}>
            <option value=''>Todos</option>
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };

  export default Filtertype;
