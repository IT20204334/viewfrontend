import React from "react";
import { Route, Routes } from "react-router-dom";
import View from "./pages/view";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<View />} />
      </Routes>
    </>
  );
};
export default MainRouter;
