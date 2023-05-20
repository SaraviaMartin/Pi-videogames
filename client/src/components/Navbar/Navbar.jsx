import React, { useState } from 'react';
import FilterButtons from '../FilterButtons/FilterButtons';
import { useDispatch } from 'react-redux';
import { getGameByName, getAllGames, filterByCreation, orderByRating } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import './Navbar.styles.css';

const Navbar = ({ setCurrentPage }) => {
  const [state, setState] = useState('');
  const dispatch = useDispatch();

  const handleSort = (e) => {
    const selectedSortOrder = e.target.value;
    // Lógica de ordenamiento aquí
    if (selectedSortOrder === 'A-Z') {
      dispatch(orderByRating('asc'));
    } else if (selectedSortOrder === 'Z-A') {
      dispatch(orderByRating('desc'));
    }
  };

  const handleFilter = (e) => {
    const selectedGenre = e.target.value;
    // Lógica de filtrado por género aquí
    if (selectedGenre === 'API') {
      dispatch(getAllGames());
    } else if (selectedGenre === 'CREADO') {
      dispatch(filterByCreation());
    }
  };

  const handleSource = (e) => {
    // Lógica de selección de origen aquí
    const selectedSource = e.target.value;
    // Puedes agregar la lógica específica para manejar la selección de origen según la opción seleccionada
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getGameByName(state));
    setState('');
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <form className="form">
        <input className="input" value={state} type="text" onChange={handleChange} placeholder="Buscar por nombre" />
        <button className="buttons" type="submit" onClick={handleSubmit}>
          Buscar
        </button>
        <FilterButtons handleFilter={handleFilter} handleSort={handleSort} handleSource={handleSource} />
        <span className="crear">
          <Link to={'/create'}> Crear Juego !</Link>
        </span>
      </form>
    </div>
  );
};

export default Navbar;
