const {Router} = require('express');
const {getGameGenre} = require('../handlers/getGenresHandler')

const genresRouter = Router()

genresRouter.get('/', getGameGenre)

module.exports = {genresRouter}