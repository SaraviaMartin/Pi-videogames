const {Router} = require('express');
//importamos handlers
const {
    getVideoGamesHandler,
} = require('../handlers/videoGamesHandler');

const videogamesRouter = Router();
//rutas
videogamesRouter.get('/', getVideoGamesHandler);


module.exports = {videogamesRouter};