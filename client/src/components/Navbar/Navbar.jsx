import FilterButtons from "../FilterButtons/FilterButtons";
import React, {useState} from "react";
import {useDispatch} from "react-redux"
import {getGameByName} from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import "./Navbar.styles.css"


const Navbar =({setCurrentPage}) =>{

  const [state, setState]=useState('');
  const dispatch= useDispatch();

  
  const handleChange=(e)=>{
    e.preventDefault()
    setState(e.target.value)
  }

  const handleSubmit=(e, setCurrentPage)=>{
    e.preventDefault();
      dispatch(getGameByName(state))
      setState('');
      setCurrentPage(1);
    
  }

   return(
    
    <div className="container">  
      <form className="form">
        <input className="input"  value={state} type="text" onChange={(e)=>handleChange(e)} placeholder="Buscar por nombre"/>
        <button className="buttons " type="submit" onClick={(e)=>handleSubmit(e, setCurrentPage)}>Buscar</button>
        <FilterButtons/>
        <span className="crear"><Link to={'/create'} > Crear Juego !</Link></span>
      </form>
    </div>
    
   )
}

export default Navbar;