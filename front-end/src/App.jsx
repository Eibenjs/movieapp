import { Routes, Route } from "react-router-dom";

import HomeLayout from "./Layouts/HomeLayout";

// Pages
import Movies from "./Pages/Movies/Movies";
import Movie from "./Pages/Movies/Movie";

// Login
import LoginForm from './Pages/Login/Form'

// Logout
import Logout from './Pages/Logout/Logout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<h1>Home</h1>} />
          <Route path="/movies" element={<Movies></Movies>} />
          <Route path="/movies/:id" element={<Movie></Movie>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </>
  );
}

export default App;
