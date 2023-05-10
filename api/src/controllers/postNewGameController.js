const { Videogame, Genre } = require('../db');

//======================Crear nuevo videojuego en la Db================
const postNewGameOnDb = async (name, description, platforms, image, released, rating, Genre ) =>{
    try {
           if(!name || ! description || !platforms || !image || !released || !rating || !Genre){
             throw Error('Faltan datos')}
             else{
                const nuevoJuego = await Videogame.create({
                name, description, platforms, image, released, rating, Genre
               });
             }
             const newGenre = await Genre.findAll({
                 where: {
                     name: Genre
                 },
             });
             nuevoJuego.addGenre(newGenre);
             return (newGenre, nuevoJuego)
    } catch (error) {
     return error;
    } 
}


module.exports = postNewGameOnDb;


