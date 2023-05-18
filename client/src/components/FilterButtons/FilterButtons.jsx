import { getAllGames, filterByCreation, orderByName, orderByRating, filterByGenre } from "../../redux/actions/actions";
import { useDispatch, useSelector } from 'react-redux';

const FilterButtons = () => {

    const dispatch = useDispatch();

    const genres = useSelector(state => state.genres);

    // action para filtrar por generos
    const filterByGenres = (event) => {
        dispatch(filterByGenre(event.target.value));
    };
    // action para ordenar por rating
    const gameOrderRating = (event) => {
        dispatch(orderByRating(event.target.value));
    };
    // action para ordenar alfabeticamente
    const gamesOrderAlphabetic = (event) => {
        dispatch(orderByName(event.target.value));
    };
    // functiones de api o db
    const filterByOrigin = (event) => {
        dispatch(filterByCreation(event.target.value));
    };

    return (
        <div >
            <div>
                <select  onChange={filterByGenres}>
                    <option select disabled selected={true}>Genres</option>
                    {
                        genres.map(genre => {
                            return <option key={genre} value={genre}>{genre}</option>
                        })
                    }
                    
                </select>
            </div>
            <div>
                <select onChange={filterByOrigin}>
                    <option select disabled selected={true}>Origin</option>
                    <option value="ALL">All games</option>
                    <option value="API">API</option>
                    <option value="DB">DataBase</option>
                </select>
            </div>
            <div>
                <button  onClick={() => dispatch(getAllGames())}>Restart</button>
            </div>
            <div>
                <select  onChange={gameOrderRating}>
                    <option select disabled selected={true}>Rating</option>
                    <option value="Ascendente">Ascendant</option>
                    <option value="Descendente">Descendant</option>
                </select>
            </div>
            <div>
                <select onChange={gamesOrderAlphabetic}>
                    <option select disabled selected={true}>A/Z</option>
                    <option value="Ascendente">Descendant</option>
                    <option value="Descendente">Ascendant</option>
                </select>
            </div>
        </div>
    )
}

export default FilterButtons;
