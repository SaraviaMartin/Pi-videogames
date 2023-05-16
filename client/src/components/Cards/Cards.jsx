import React from 'react';
import {getAllGames} from '../../redux/actions/actions'
import { useState } from "react";
import {useDispatch} from 'react-redux'
import Card from '../Card/Card'
import "./Cards.styles.css"

const Cards = ({currentGames}) => {
    const dispatch = useDispatch()
   const [carga, setCarga] = useState(true);

   React.useEffect(() => {
       dispatch(getAllGames()).then(() => setCarga(false)) //me traigo la action creators q me trae todos mis gameideojuegos de la API
   }, [dispatch])

   //const allgameideogames = useSelector(state => state.allgameideogames) //me traigo del reducer el estado en donde guarde todos mis gameideojuegos
   const errorCarga = <h4 >⚠No se econtró ningun juego</h4>
   if(carga){
      return(
         <img className='loader' src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-7.jpg" alt="CARGANDO" />
      )
   }

   return (
       <digame className="containerCard">
           {currentGames.length > 0 ?
           currentGames?.map(game => {
               return (<Card
                   key={game.id}
                   id={game.id}
                   image={game.image ? game.image : "IMAGEN AQUI"}
                   name={game.name}
                   genres={game.genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}
                   rating={game.rating}
                   />)}) : errorCarga}

       </digame>
   )
 }
 
 export default Cards;