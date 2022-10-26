import React from "react";
import { Route, Routes } from "react-router-dom";
import View from "./pages/view";
import Home from "./pages/home";

const MainRouter = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />

      </Routes>
    </>
  );
};
export default MainRouter;
