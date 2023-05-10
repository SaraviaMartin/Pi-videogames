const axios = require('axios');
const { Videogame, Genre } = require('../db.js');
const {API_KEY} = process.env;

//controlador para Todos los juegos
const getAllGames = async()=>{
    //traigo los videojuegos de la db
    const dbVideogames = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    });
    // mapeo y formateo lo que llega de la database
    const formatDbVideogames = dbVideogames.map(games => {
        return {
            id: games.id,
            name: games.name,
            description: games.description,
            platform: games.platform,
            background_image: games.background_image,
            released: games.released,
            rating: games.rating,
            genres: games.genres.map(genre => genre.name)
        }
    })
    // traigo los videojuegos de la api
    const formatApiVideogames = [];
        let apiResponse = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
        //formato y pusheo al array vacio formatApiVideogames
        apiResponse.data.results.map(games => {
            formatApiVideogames.push({
                id: games.id,
                name: games.name,
                platform: games.platforms.map(e => e.platform.name),
                background_image: games.background_image,
                released: games.released,
                rating: games.rating,
                genres: games.genres.map(g => g.name)
            });
        });
    // concateno el resultado de la api y la db 
    return [...formatDbVideogames, ...formatApiVideogames];
}

//traigo los juegos por nombre 
const getGameByName = async (name) => {
        const juegos = await getAllGames(name);
        if(name){
            const filtrado = juegos.filter((game)=> game.name.toLowerCase().includes(name.toLowerCase()));
        
        if(filtrado.length>0){
            return filtrado;
        } else {
            throw new Error('No se encontro el juego con ese nombre')
        }
    } else {return Videogame}
    }

const getVideogames = (name) => {
    if (!name) return getAllGames();
    else return getGameByName(name);
};

module.exports = {
    getVideogames
};