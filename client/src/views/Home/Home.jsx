import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { getAllGames } from "../../redux/actions/actions";
import Cards from "../../components/Cards/Cards";
import "./Home.styles.css"


const Home = () =>{
    const dispatch = useDispatch(getAllGames);
    const allGames = useSelector(state=>state.games)
    const currentGames = allGames
    return (
        
        <div className="container">
           
            <Cards currentGames={currentGames}/>
        </div>
        
    )
}


export default Home;