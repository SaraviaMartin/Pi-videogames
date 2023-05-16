import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../../redux/actions/actions";
import "./Detail.styles.css";

const Detail = () => {
  const params = useParams();
  const game = useSelector((state) => state.gameDetail);
  const dispatch = useDispatch();
  console.log(game);

  useEffect(() => {
    dispatch(getGameDetail(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <div>
        <img src={game.background_image} alt="" />
        <h1>{game.name}</h1>
        <p dangerouslySetInnerHTML={{ __html: game.description }} />
      </div>
      <div>
        <h2>Available at:</h2>
        <ul>
          {game.platforms &&
            game.platforms.map((platform, index) => (
              <li key={index}>{platform.name}</li>
            ))}
        </ul>
      </div>
      <div>
        <h2>Game Genres:</h2>
        <ul>
          {game.genres &&
            game.genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
        </ul>
      </div>
      <div>
        <h2>Average rating: {game.rating}</h2>
        <h3>Released at: {game.released}</h3>
        <p>Game number: {game.id}</p>
      </div>
    </div>
  );
};

export default Detail;
