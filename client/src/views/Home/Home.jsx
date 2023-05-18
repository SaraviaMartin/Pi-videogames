import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import { getAllGames } from "../../redux/actions/actions";
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

//    function handleSort(e){
//       e.preventDefault()
//       if(e.target.value===""){
//          dispatch(getAllGames())
//       }else {
//          dispatch(orderBy(e.target.value))
//          setCurrentPage(1)
//       }
//    }

//    function handleFilter(e){
//       e.preventDefault()
//       if(e.target.value===""){
//          dispatch(getAllGames())
//       }else {
//          dispatch(filterByGenres(e.target.value))
//          setCurrentPage(1)
//    }
// }

//    function handleSource(e){
//       e.preventDefault()
//       if(e.target.value===""){
//          dispatch(getAllGames())
//       }else{
//          dispatch(filterBySource(e.target.value))
//          setCurrentPage(1)
//       }
//    }



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