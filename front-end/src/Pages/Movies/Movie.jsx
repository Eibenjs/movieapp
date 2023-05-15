import { useState, useEffect } from "react";
import { useMovie } from "../../Store/movieContext";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { state } = useMovie();
  const { id } = useParams();

  useEffect(() => {
    const movieFinded = state.movies.find((movieL) => {
        return movieL.id === parseInt(id);
    });
    setMovie(movieFinded);
  }, [id, state.movies]);

  return (
    <>
        {movie && (
            <div className="flex flex-col border-t-[1px]">
                <h1 className="text-2xl font-bold">{movie.title}</h1>
                <p className="text-lg">{movie.description}</p>
            </div>
        )}
    </>  )
};

export default Movie;
