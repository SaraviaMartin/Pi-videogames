import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './views/Home/Home';
// import Landing from './Views/LandingPage/Landing';
// import Form from './Views/Form/Form';
// import Detail from './Views/Detail/Detail';
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
      <div className="App">
        <Routes>
          <Switch>
          <Route  path='/home' element={ <Home /> }></Route>
          </Switch>
          
          
        </Routes>
    
      </div>
    );
}

export default App;
