import React from 'react';
import './App.css';
import Home from './views/Home/Home';
import LandingPage from './views/LandingPage/LandingPage';
import { Route,  BrowserRouter, Switch} from 'react-router-dom';
import { getAllGames } from './redux/actions/actions';
// import { getAllGenres } from './redux/actions/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



function App() {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllGames())
  // dispatch(getAllGenres())
}, [])


    return (
      <div>
        <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' render={()=><LandingPage/>}/>
            <Route  path="/home" render={()=><Home/>}/>
          </Switch>
        </div>
        </BrowserRouter>               
      </div>
          
    );
}

export default App;
