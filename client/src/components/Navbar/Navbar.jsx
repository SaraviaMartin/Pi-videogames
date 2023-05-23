import React, { useState } from 'react';
import FilterButtons from '../FilterButtons/FilterButtons';
import { useDispatch } from 'react-redux';
import { getGameByName} from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import './Navbar.styles.css';

const Navbar = ({ setCurrentPage }) => {
  const [state, setState] = useState('');
  const dispatch = useDispatch();





  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getGameByName(state));
    setState('');
  };

  return (
    <div className="container">
      <form className="form">
        <input className="input" value={state} type="text" onChange={handleChange} placeholder="Buscar por nombre" />
        <button className="buttons" type="submit" onClick={handleSubmit}>
          Buscar
        </button>
        <FilterButtons  />
        <span className="crear">
          <Link to={'/create'}> Crear Juego !</Link>
        </span>
      </form>
    </div>
  );
};

export default Navbar;
