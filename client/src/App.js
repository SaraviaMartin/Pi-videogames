import React from 'react';
import './App.css';
import Home from './views/Home/Home'
import Detail from './components/Detail/Detail';
import LandingPage from './views/LandingPage/LandingPage';
import { Route,  BrowserRouter, Switch} from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector } from 'react-redux';



function App() {
  const games = useSelector(state => state.games.games);
// const dispatch = useDispatch()

// useEffect(() => {
//   dispatch(getAllGames())
  // dispatch(getAllGenres())
// }, [])


    return (
      <div>
        <BrowserRouter>        <div>
          <Switch>
            <Route exact path='/' render={()=><LandingPage/>}/>
            <Route  path="/home" render={()=><Home/>}/>
            <Route path='/detail/:id' render={() => <Detail />} />
          </Switch>
        </div>
        </BrowserRouter>               
      </div>
          
    );
}

export default App;
