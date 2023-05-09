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
    for (let i = 1; i <= 7; i++){
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
    };
    // concateno el resultado de la api y la db 
    return [...formatDbVideogames, ...formatApiVideogames];

    // const API = await axios.get('https://api.rawg.io/api/games?key=b068f01f8b7343eead2b6d61c5dde729');
    // console.log(API.data)


    // try{  
    //     const response = (await axios(`https://api.rawg.io/api/games?api_key=${API_KEY}`)).data;
    //     const gamesMap = response.map((game) =>{
    //         return{
    //             id: game.id,
    //             name: game.name,
    //             description: game.description,
    //             platform: platforms,
    //             image: game.background_image,
    //             released: game.released,
    //             rating: game.rating,
    //             genre: gamesMap,
    //             created: false
    //         }  ;  
    //     });
    //     await Videogame.bulkCreate(gamesMap);
    // }catch(error){
    //     console.log(error + " <======= ES EN EL LLAMADO A LA API");
    // }
}

module.exports = {
    getAllGames
};