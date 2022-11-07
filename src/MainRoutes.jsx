import React from "react";
import { Route, Routes } from "react-router-dom";
import View from "./pages/view";
import Home from "./pages/home";
import Energyuse from "./pages/energyuse";
import Analytics from "./pages/analytics";
//import History from "./pages/reading";
import Reading from "./pages/reading";
import Currentuse from "./pages/currentuse";



const MainRouter = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="/energyuse" element={<Energyuse />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/currentuse" element={<Currentuse />} />
      </Routes>
    </>
  );
};
export default MainRouter;
