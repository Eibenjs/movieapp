import { useNavigate, Outlet, NavLink, Link } from "react-router-dom";

import { useToken } from "../Store/tokenContext";
const HomeLayout = ({toggleRefresh}) => {
  const { token, setToken } = useToken();
  const navigate = useNavigate();
  const onLogout = () => {
    const requestOptions = {
      method: "GET",
      credentials: "include",
    };

    fetch(`http://localhost:8080/logout`, requestOptions)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setToken(null);
        toggleRefresh(false);
      });
    navigate("/login");
  };

  return (
    <div className="px-32 py-4">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "text-green-300" : isActive ? "text-red-400" : ""
            }
            to="/"
          >
            [Home]
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "text-green-300" : isActive ? "text-red-400" : ""
            }
            to="/movies"
          >
            [Movies]
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "text-green-300" : isActive ? "text-red-400" : ""
            }
            to="/genres"
          >
            [Genres]
          </NavLink>
          {token !== null && (
            <>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "text-green-300" : isActive ? "text-red-400" : ""
                }
                to="/admin/movie/0"
              >
                [Add Movie]
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "text-green-300" : isActive ? "text-red-400" : ""
                }
                to="/manage-catalogue"
              >
                [Manage Catalogue]
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "text-green-300" : isActive ? "text-red-400" : ""
                }
                to="/graphql"
              >
                [GraphQL]
              </NavLink>
            </>
          )}
        </div>
        <div>
          {token === null ? (
            <Link to="/login">Login</Link>
          ) : (
            <button onClick={onLogout}>Logout</button>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
