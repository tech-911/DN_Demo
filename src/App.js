import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";

const App = () => {
  return (
    <div className="app_wrapper">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
