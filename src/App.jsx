import { Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <>
      <div className="w-screen bg-[#1F1E24] flex h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/details/:id" element={<MovieDetail />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
          </Route>
          <Route path="/tv" element={<TvShow />} />
          <Route path="/tv/details/:id" element={<TvDetail />} >
          <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
          </Route>
          <Route path="/person" element={<Person/>} />
          <Route path="/person/details/:id" element={<PersonDetail />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<ErrorPage/>} />

        </Routes>
      </div>
    </>
  );
};
export default App;
