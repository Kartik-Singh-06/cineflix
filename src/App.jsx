import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import TvShow from "./Components/TvShow";
import MovieDetail from "./Components/MovieDetail";
import TvDetail from "./Components/TvDetail";
import PersonDetail from "./Components/PersonDetail";
import Person from "./Components/Person";
import Trailer from "./Components/templetes/Trailer";
import ErrorPage from "./Components/templetes/ErrorPage";
import About from "./About";
import Login from "./Components/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./store/reducers/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-[#1F1E24] flex ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/details/:id" element={<MovieDetail />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/tv" element={<TvShow />} />
          <Route path="/tv/details/:id" element={<TvDetail />}>
            <Route path="/tv/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/person" element={<Person />} />
          <Route path="/person/details/:id" element={<PersonDetail />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
