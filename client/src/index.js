import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// Global CSS
import "./index.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
