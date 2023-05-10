const {Router} = require('express');
//importamos handlers
const {getVideoGamesHandler} = require('../handlers/videoGamesHandler');
const {videoGamesByIdHandler} = require('../handlers/videoGamesByIdHandler');

const videogamesRouter = Router();
//rutas
videogamesRouter.get('/', getVideoGamesHandler);
videogamesRouter.get('/:id', videoGamesByIdHandler);
// videogamesRouter.post('/', postNewVideogameHandler);

module.exports = {videogamesRouter};