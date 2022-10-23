import React from "react";
import "./App.css";

import MainRouter from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import { RequestContextProvider } from "./services/RequestContext";
//import { UserContextProvider } from "./services/UserContext";

function App() {
  return (
    <RequestContextProvider baseURL={`http://localhost:4000/api/`}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </RequestContextProvider>
  );
}

export default App;
