const {Videogame, Genre} = require('../db');
const axios = require('axios');
const {API_KEY} = process.env;

//busco por id en la API

const getGameById = async (id) => {
    if(Number(id)){
        const apiGames = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        const games = [apiGames.data]

        const gameApi = games.map((game) =>{
            return{
                id: game.id,
                name: game.name,
                image: game.background_image,
                description: game.description,
                genres: game.genres?.map((gen)=> gen.name),
                platforms: game.platforms?.map((plat)=> plat.platform.name),
                released: game.released,
                rating: game.rating,
            }
        })
        return gameApi;
    }
    else if(!Number(id)){
        const dbGames = Videogame.findByPk(id);
        return dbGames
        }

    else {
        return 'ERROR EN GETbyID'
    }
}

module.exports = getGameById;