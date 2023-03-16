import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Layout from "./components/layout/Layout";
import Genres from "./pages/genres/Genres";
import Recommend2 from "./pages/recommend2/Recommend2";
import Lecturers from "./pages/lecturers/Lecturers";
import Videos from "./pages/videos/Videos";
import Playlists from "./pages/playlists/Playlists";
import Charts from "./pages/charts/Charts";
import Trending from "./pages/trending/Trending";
import New from "./pages/new/New";
import Auth from "./pages/Authentication/auth/Auth";
import LoginForm from "./pages/Authentication/LoginForm";
import SignupForm from "./pages/Authentication/SignupForm";

const App = () => {
  return (
    <div className="app_wrapper">
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/auth/signup" element={<SignupForm />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/recommend2" element={<Recommend2 />} />
          <Route path="/lecturers" element={<Lecturers />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/new" element={<New />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
