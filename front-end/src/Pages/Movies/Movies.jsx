import { useEffect } from "react";
import { useMovie } from "../../Store/movieContext";
import { Link } from "react-router-dom";

const Movies = () => {
  const { state, dispatch } = useMovie();

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers,
    };

    fetch(`http://localhost:8080/movies`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_MOVIES", payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <>
      <table>
        <thead>
          <tr className="text-left">
            <th>Movie Name</th>
            <th>Release Date</th>
            <th>Movie Rating</th>
          </tr>
        </thead>
        <tbody>
          {state.movies.length > 0 &&
            state.movies.map((movie, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </td>
                <td>{movie.release_date}</td>
                <td>{movie.mpaa_rating}</td>
              </tr>
            ))}
          {state.movies.length === 0 && (
            <tr>
              <td colSpan="3">No Movies</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Movies;
