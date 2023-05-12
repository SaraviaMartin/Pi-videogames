import React from 'react';
import './App.css';
import Home from './views/Home/Home';
import LandingPage from './views/LandingPage/LandingPage';
import { Route, useLocation} from 'react-router-dom';
import { getAllGames } from './redux/actions/actions';
import { getAllGenres } from './redux/actions/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



function App() {
const location = useLocation()
const dispatch = useDispatch()


useEffect(() => {
  dispatch(getAllGames())
  dispatch(getAllGenres())
}, [])
    return (
      <div>
        {location.pathname !== '/' && <LandingPage/>}        
          <Route exact path='/' render={()=><LandingPage/>}/>
          <Route  path="/home" render={()=><Home/>}/>
        
      </div>
          
    );
}

export default App;
