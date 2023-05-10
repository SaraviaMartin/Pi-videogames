const postNewGameOnDb = require('../controllers/postNewGameController');

const postNewVideogameHandler = async (req, res) => {
    const {name, description, platforms, image, released, rating, Genre} = req.body

    try {
        const nuevoJuego= await postNewGameOnDb(name, description, platforms, image, released, rating, Genre)
        res.status(200).json(nuevoJuego)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {postNewVideogameHandler};