const axios = require('axios');
const { Videogame } = require('../db.js');
const {API_KEY} = process.env;

//controlador para Todos los juegos
// const getAllGames = async()=>{
//     const apiGames =(await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data
//     const dbGames = await Videogame.findAll({
//         include: {
//             atributes: ["name"],
//             through: {
//                 atributes: []
//             }
//         }
//     })
//     const allGames = [...apiGames.results, dbGames]
//     return allGames;
// }

const cleanArray = (arr) =>{
    return arr.map(elem => {
        const plataforms = [elem.plataforms, elem.parents_platafroms]
        .flatMap(platform => platform.map(p => p.platform.name))
        .filter((name, index, arr) => arr.indexOf(name) === index);
        return {
            id: elem.id,
            name: elem.name,
            description: elem.description,
            platform: platforms,
            image: elem.background_image,
            released: elem.released,
            rating: elem.rating,
            genre: genres,
            created: false
        };
    });
}

const getAllGames = async () => {
    const dbVideogames = await Videogame.findAll();
    const apiVideogamesRaw = (await axios.get(`${URL}/games?key=${API_KEY}`)).data.results;
    const apiVideogames = cleanArray(apiVideogamesRaw);
    return [...dbVideogames,...apiVideogames]
};

module.exports = getAllGames;