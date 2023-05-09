const axios = require('axios');
const {Videogame} = require('../db.js');
const {getAllGames} = require('../controllers/videoGamesController.js')

const getVideoGamesHandler = async(req, res) => {
    try{
        const {name} = req.query
        const response = await getAllGames(name);
        res.status(200).json(response);
    }catch (error) {
        res.status(404).json({error: error.message})
    }
    
}

module.exports = {
    getVideoGamesHandler,
}