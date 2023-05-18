import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { clearDetail, getGameDetail } from '../../redux/actions/actions';
import "./Detail.styles.css"
import { NavLink } from 'react-router-dom/cjs/react-router-dom';


const Detail = () => {
    const [carga, setCarga] = useState(true);
    const {id} = useParams() //rutas dinamicas, Podemos acceder a cualquier parámetro de ruta de una ruta declarada con su componente asociado usando el hook useParams.
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getGameDetail(id)).then(() => setCarga(false))
    }, [dispatch, id])

    const details = useSelector(state => state.gameDetail)
    console.log(details)

    if (carga) {
        return "cargando paaa";
      }

    var regex = /(<([^>]+)>)/gi;

    const { name, image, rating, genres, released, description, platforms } = details[0];

    return (
        <div className="card">
            <h4>ID del juego: {id}</h4><h1>{name}</h1> 
            <img className="image"src={image} alt={`${name}'s`}/>
            <br /><div className="plat">Plataformas: {platforms?.join(', ')}</div>
            <div className="texto">
                 <div >📌Descripcion:{description?.replace(regex, '').replace('&#39', '')}</div>
            </div>
            <p > 📅Lanzamiento: {released}</p>
            <p >🌟Rating: {rating}</p>
            <p >🎮Generos: {genres?.map(g => (g.name ? g.name : g)).join('| ')}</p>
                
            <div >
                <div>
                    <NavLink to={'/home'} className="myButton">
                       Regresar
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Detail;