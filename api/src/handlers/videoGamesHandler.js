const axios = require('axios');
const {Videogame} = require('../db.js');
const {getAllGames} = require('../controllers/videoGamesController.js')

const getVideoGamesHandler = async(req, res) => {
    try{
        if(Object.keys(req.kery).length === 0){
            const allGames = await getAllGames()
            res.status(200).json(allGames)
        }else{
            const resQuery = await getByQuery(req.query)
            res.status(200).json(resQuery)
        }
    }catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    getVideoGamesHandler,
}