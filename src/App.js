import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div className="app_wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
