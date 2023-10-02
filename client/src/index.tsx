import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import React from "react";
import App from "./app";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
