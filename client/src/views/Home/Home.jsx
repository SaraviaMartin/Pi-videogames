import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import { getAllGames, getAllGenres, filterByCreation, orderByRating } from "../../redux/actions/actions";
import Cards from "../../components/Cards/Cards";
import Navbar from "../../components/Navbar/Navbar"
import Pagination from "../../components/Pagination/Pagination";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import "./Home.styles.css"



const Home = () =>{
    const dispatch = useDispatch(getAllGames);
    const allGames = useSelector(state=>state.games)

    const[currentPage, setCurrentPage]= useState(1)
   const juegosPorPag=4;
   const indexUltiJuego= currentPage * juegosPorPag;
   const indexPrimJuego= indexUltiJuego - juegosPorPag;
   const currentGames= allGames.slice(indexPrimJuego, indexUltiJuego)

   const paginado= (pageNumber)=>{
      setCurrentPage(pageNumber)
   }

   React.useEffect(()=>{
      window.scrollTo(0, 0);
   }, [currentPage])




    return (
        
        <div className="container">
            <Navbar/>
            <div className="containerCard">
            <Cards currentGames={currentGames}/>
            </div>
            <Pagination juegosPorPag={juegosPorPag} allGames={allGames.length} paginado={paginado}/>

        </div>
        
    )
}


export default Home;