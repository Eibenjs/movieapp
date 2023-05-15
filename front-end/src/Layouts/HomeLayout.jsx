import { Outlet, NavLink, Link } from "react-router-dom";

import { useToken } from "../Store/tokenContext";

const HomeLayout = () => {
  const { token } = useToken();

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
          {token !== "" && (
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
          {token === "" ? <Link to="/login">Login</Link> : <Link to="/logout">Logout</Link>}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
