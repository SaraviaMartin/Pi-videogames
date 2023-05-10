const {getVideogamesGenres} = require('../controllers/getGenresController');


//obtengo una lista de géneros disponibles en la base de datos 
const getGameGenre = async (req, res) => {
    let genres = await getVideogamesGenres();
    try{       
        res.status(200).json({
            ok: true,
            genres
          });
    }catch (error){
        res.status(400).json({error : error.message})
    }
}

module.exports = {getGameGenre}