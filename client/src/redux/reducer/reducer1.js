import {
        ERROR,
        GET_ALL_GAMES,
        GET_GAME_DETAIL,
        GET_GAME_BY_NAME,
        FILTER_BY_CREATION,
        FILTER_BY_GENRE,
        ORDER_BY_NAME, 
        ORDER_BY_RATING ,
        CLEAR_DETAIL, 
        GET_ALL_GENRES, 
        POST_NEW_GAME, 
        REMOVE_GAME, 
    } from '../actions/actions'



const initialState = {
    games:[],
    allGames: [],
    gameDetail: [],
    genres: [],
    error: '',
}


const rootReducer = (state = initialState, action) => {
    switch (action.type){
       case GET_ALL_GAMES: 
        return {
            ...state, 
            games: action.payload,
            allGames: action.payload,
        }
        case GET_ALL_GENRES:
            return{
                ...state,
                genres: action.payload
            }    
        case GET_GAME_BY_NAME:
            return{
                ...state,
                games: action.payload
            }
        case GET_GAME_DETAIL: //este es para la ruta detail
        return{
            ...state,
            gameDetail: action.payload,
        } 
        case POST_NEW_GAME:
            return{
                ...state,
                games: [...state.games, action.payload]
            }    
        case CLEAR_DETAIL:
            return{
                ...state,
                gameDetail: []
            }    
        case FILTER_BY_CREATION:
            const allGames1 = state.allGames;
            const filterCreation = action.payload === 'created' ? allGames1.filter((game) => game.createdInDb) : allGames1;
            return{
                ...state,
                games: filterCreation
            }
        case FILTER_BY_GENRE:
            const allGames2 = state.allGames;
            const filterGenres = allGames2.filter((game) => game.genres.includes(action.payload));
            return{
                ...state,
                games: filterGenres
            }
        case ORDER_BY_NAME:
            const orderName = action.payload === "ASC" ? state.games.sort((a,b) => (a.name > b.name ? 1 : -1)) : state.games.sort((a,b) => (a.name > b.name ? 1 : -1)).reverse();
            console.log(orderName)
            return{
                ...state,
                games: orderName
            }
        case ORDER_BY_RATING:
            let orderRating = action.payload === 'ASC' ? 
            state.games.sort((a,b) => {
                if (a.rating > b.rating) return 1;
                if (b.rating > a.rating) return -1;

                return 0
            }) :
            state.games.sort((a,b) => {
                if (a.rating > b.rating) return -1;
                if (b.rating > a.rating) return 1;

                return 0
            })
            return{
                ...state,
                games: orderRating
            }
        case ERROR:
            return{
                ...state,
                error: action.payload
            }    
       default:
            return{ ...state,  }
    }


}

export default rootReducer