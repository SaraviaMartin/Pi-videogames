const {Router} = require('express');
const videogamesRouter = Router();
//importamos handlers
const {
    getVideoGamesHandler,
    // getVideoGamesByIdHandler,
    // postVideoGamesHandler,
} = require('../handlers/videoGamesHandler');

//rutas
videogamesRouter.get('/', getVideoGamesHandler);
// videogamesRouter.get('/:id', getVideoGamesByIdHandler);
// videogamesRouter.post('/', postVideoGamesHandler);

module.exports = videogamesRouter;