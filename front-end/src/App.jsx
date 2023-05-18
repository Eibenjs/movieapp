import { useCallback, useEffect, useState } from "react";

import { useToken } from "./Store/tokenContext";

import { Routes, Route } from "react-router-dom";

import HomeLayout from "./Layouts/HomeLayout";

// Pages
import Movies from "./Pages/Movies/Movies";
import Movie from "./Pages/Movies/Movie";

// Admin
import ManageCatalog from "./Pages/ManageCatalog/ManageCatalog";

// Login
import LoginForm from "./Pages/Login/Form";

function App() {
  const { toggleRefresh } = useToken();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout toggleRefresh={toggleRefresh} />}>
          <Route index={true} element={<h1>Home</h1>} />
          <Route path="/movies" element={<Movies></Movies>} />
          <Route path="/movies/:id" element={<Movie></Movie>} />
          <Route path="/genres" element={<h1>Genres</h1>} />
          <Route path="/admin/movie/:id" element={<h1>Admin Movie</h1>} />
          <Route path="/manage-catalogue" element={<ManageCatalog />} />"
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
