import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Layout from "./components/layout/Layout";
import Genres from "./pages/genres/Genres";
import Recommend2 from "./pages/recommend2/Recommend2";
import Recommend1 from "./pages/recommend1/Recommend1";
import Lecturers from "./pages/lecturers/Lecturers";
import Videos from "./pages/videos/Videos";
import Playlists from "./pages/playlists/Playlists";
import Charts from "./pages/charts/Charts";
import Trending from "./pages/trending/Trending";
import New from "./pages/new/New";
import Auth from "./pages/Authentication/auth/Auth";
import LoginForm from "./pages/Authentication/LoginForm";
import SignupForm from "./pages/Authentication/SignupForm";
import AudioDetail from "./pages/audioDetail/AudioDetail";
import LecturerDetail from "./components/lecturer_detail/Lecturer_detail";
import Add_playlist from "./pages/add_playlist/Add_playlist";
import Favourite from "./pages/favourite/Favourite";
import My_playlist from "./pages/my_playlist/My_playlist";

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
          <Route path="/recommend1" element={<Recommend1 />} />
          <Route path="/lecturers" element={<Lecturers />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/new" element={<New />} />
          <Route path="/audiodetail" element={<AudioDetail />} />
          <Route path="/lecturerdetail" element={<LecturerDetail />} />
          <Route path="/addplaylist" element={<Add_playlist />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/myplaylist" element={<My_playlist />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
