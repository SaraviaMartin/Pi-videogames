import {GET_ALL_GAMES, GET_GAME_DETAIL} from '../actions/actions'



const initialState = {
    games:[],
    gameDetail: [],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type){
       case GET_ALL_GAMES: 
        return {
            ...state, 
            games: action.payload
        }

        case GET_GAME_DETAIL: //este es para la ruta detail
        return{
            ...state,
            videogame: action.payload,
        } 
            
       default:
            return{ ...state,  }
    }


}

export default rootReducer