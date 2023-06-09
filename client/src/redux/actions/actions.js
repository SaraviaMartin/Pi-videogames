import axios from 'axios'

export const ERROR = 'ERROR'; 
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const GET_GAME_DETAIL = 'GET_GAME_DETAIL';
export const GET_GAME_BY_NAME = 'GET_GAME_BY_NAME';
export const FILTER_BY_CREATION = 'FILTER_BY_CREATION';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_RATING = 'ORDER_BY_RATING';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const POST_NEW_GAME = 'POST_NEW_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';


export const getAllGames = () => {
      try {
          return async (dispatch) => {
              const response  = await axios.get('http://localhost:3001/videogames')
              const data = response.data;
              
              return dispatch({
                  type: GET_ALL_GAMES,
                  payload: data,
              })              
          }
      } catch (error) {
          console.log(error);
      }
      
  }


  export const getGameDetail = (id) => {
      try {
            return async (dispatch) => {
            const response = await axios.get(`http://localhost:3001/videogames/${id}`);
            const data = response.data;

            return dispatch({ 
                type: GET_GAME_DETAIL,
                 payload: data,
                });
        } 
    }catch (error) {
           console.log(error)
        }
    
};

//   export const getGameDetail = (id) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get(`http://localhost:3001/videogames/${id}`);
//             const game = response.data;
//             return dispatch({ type: GET_GAME_DETAIL, payload: game });
//         } catch (error) {
//             return dispatch({
//                 type: ERROR,
//                 payload: error.message
//             });
//         }
//     };
// };


export const getGameByName = (name) => {
    return async (dispatch) => {
        try {
            const game = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            const response = game.data;
            return dispatch({ type: GET_GAME_BY_NAME, payload: response });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    };
};




export const clearDetail = () => {
    return { type: CLEAR_DETAIL};
};


export const postNewGame = (game) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:3001/videogames`,game);
            return dispatch({ type: POST_NEW_GAME, payload: response });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    };
};



// GENEROS

export const getAllGenres = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/genres`);
            const genres = response.data;
            return dispatch({ type: GET_ALL_GENRES, payload: genres });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    };
};




// FILTROS Y ORDENAMIENTO

export const filterByCreation = (creation) => {
    return { type: FILTER_BY_CREATION, payload: creation };
};


export const filterByGenre = (array) => {
    return async function (dispatch) {
    dispatch({
      type: FILTER_BY_GENRE,
      payload: array,
    });
  };
};


export const orderByName = (order) => {
    return async function (dispatch) {
        dispatch({
          type: ORDER_BY_NAME,
          payload: order,
        });
      };
};



export const orderByRating = (array) => {
    return async function (dispatch) {
        dispatch({
          type: ORDER_BY_RATING,
          payload: array,
        });
      };
};
