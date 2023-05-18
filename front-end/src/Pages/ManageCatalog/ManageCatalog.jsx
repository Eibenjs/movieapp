import { useEffect } from "react";
import { useMovie } from "../../Store/movieContext";
import { useToken } from "../../Store/tokenContext";
import { Link, useNavigate } from "react-router-dom";

const ManageCatalog = () => {
  const navigate = useNavigate();
  const { token } = useToken();
  const { state, dispatch } = useMovie();

  useEffect(() => {
    if (token === null) {
      dispatch({ type: "SET_DEFAULT" });
      navigate("/login");
      return
    }
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${token}`)

    const requestOptions = {
      method: "GET",
      headers,
    };

    fetch(`http://localhost:8080/admin/movies`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_ADMIN_MOVIES", payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, navigate, token]);

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
          {state.adminMovies.length > 0 &&
            state.adminMovies.map((movie, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/admin/movies/${movie.id}`}>{movie.title}</Link>
                </td>
                <td>{movie.release_date}</td>
                <td>{movie.mpaa_rating}</td>
              </tr>
            ))}
          {state.adminMovies.length === 0 && (
            <tr>
              <td colSpan="3">No Movies or Unauthorized</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ManageCatalog;
