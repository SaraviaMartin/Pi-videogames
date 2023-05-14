import  { legacy_createStore as createStore,combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import gamesReducer from '../reducer/reducer';
import { fetchGames, FETCH_GAMES } from '../actions/actions';


const rootReducer = combineReducers({
    games: gamesReducer,
  });
  
  const fetchGamesData = () => dispatch => {
    fetchGames()
      .then(games => dispatch({ type: FETCH_GAMES, payload: games }));
  };
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  
  store.dispatch(fetchGamesData());
  
  export default store;

