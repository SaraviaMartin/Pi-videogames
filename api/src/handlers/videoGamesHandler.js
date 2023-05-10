const axios = require('axios');
const {getVideogames} = require('../controllers/videoGamesController.js')

const getVideoGamesHandler = async(req, res) => {
    const {name} = req.query
    try{
        const response = await getVideogames(name);
        res.status(200).json(response);
    }catch (error) {
        res.status(404).json({error: error.message})
    }
    
}

module.exports = {
    getVideoGamesHandler,
}