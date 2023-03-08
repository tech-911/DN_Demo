import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Layout from "./components/layout/Layout";
import Genres from "./pages/genres/Genres";
import Recommend2 from "./pages/recommend2/Recommend2";

const App = () => {
  return (
    <div className="app_wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/recommend2" element={<Recommend2 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
