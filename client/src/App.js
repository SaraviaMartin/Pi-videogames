import React from 'react';
import './App.css';
import Detail from './components/Detail/Detail';
import Form from './views/Form/Form';
import Home from './views/Home/Home'
import CreateGame from './components/CreateGame/CreateGame';
import LandingPage from './views/LandingPage/LandingPage';
import { Route,  BrowserRouter, Switch} from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector } from 'react-redux';



function App() {
  const games = useSelector(state => state.games.games);



    return (
      <div>
        <BrowserRouter>        
        <div>
          <Switch>
            <Route exact path='/' render={()=><LandingPage/>}/>
            <Route  path="/home" render={()=><Home/>}/>
            <Route path='/form' render={() => <Form />} />
            <Route path='/detail/:id' render={() => <Detail />} />
            <Route path="/create" render={()=> <CreateGame/>}/>
          </Switch>
        </div>
        </BrowserRouter>               
      </div>
          
    );
}

export default App;
