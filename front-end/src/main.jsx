import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./Store/movieContext.jsx";
import { TokenProvider } from "./Store/tokenContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);
