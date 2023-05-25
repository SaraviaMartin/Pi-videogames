import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres } from '../../redux/actions/actions';

const FilterButtons = ({ handleFilter, handleSort, handleSource }) => {
  const dispatch = useDispatch();
  const generos = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getAllGenres());
}, [dispatch]);

  return (
    <div>
      <select onChange={handleSort}>
        <option value="">Ordenar por...</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="Rating Asc">Rating Asc</option>
        <option value="Rating Des">Rating Desc</option>
      </select>

      <select id="genre" onChange={handleFilter}>
        <option value="">Generos</option>
        {generos.genres && generos.genres.length > 0 ? (
          generos.genres.map((g) => (
            <option className='option' key={g.id} value={g.name}>
              {g.name}
            </option>
          ))
        ) : (
          <option>Error cargar géneros</option>
        )}
      </select>

      <select onChange={handleSource}>
        <option value="">Filtrar por Origen</option>
        <option value="API">API</option>
        <option value="CREADO">Creados</option>
      </select>
    </div>
  );
};

export default FilterButtons;
