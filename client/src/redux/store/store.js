import {legacy_createStore as createStore,applyMiddleware,compose} from 'redux';
import rootReducer from '../reducer/reducer1';
import thunkMiddleware from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;

const store = createStore(
    rootReducer,
    composeEnchancer(applyMiddleware(thunkMiddleware))
)
export default store;