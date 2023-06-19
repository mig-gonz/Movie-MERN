import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { MovieContext } from "./context/movieContext";
// import logo from "./img/Shmovie.png";

import Gallery from "./components/gallery";
import SideBar from "./components/sideBar";
import MovieView from "./components/movieView";
import Footer from "./components/footer";
import Banner from "./components/banner";
import TopNav from "./components/topNav";

export default function App() {
  // state variables
  const [query, setQuery] = useState(""); // handles search input
  const [movies, setMovies] = useState([]); // handles list of movies returned from api
  const [selectedMovie, setSelectedMovie] = useState([]); // handles banner display

  const API_URL = process.env.REACT_APP_API_URL;
  const FEAT_API_URL = process.env.REACT_APP_DISCOVER_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  // const BACKDROP_IMG_PATH = "https://image.tmdb.org/t/p/w1280/";

  async function fetchFeaturedMovies() {
    const response = await fetch(
      `${FEAT_API_URL}${API_KEY}&sort_by=popularity.desc`
    );
    const data = await response.json();
    setMovies(data.results);
    const randomIndex = Math.floor(Math.random() * data.results.length);
    setSelectedMovie(data.results[randomIndex]);
  }

  const fetchAMovie = useCallback(async () => {
    const response = await fetch(`${API_URL}${API_KEY}&query=${query}`);
    const data = await response.json();
    setMovies(data.results);
    setSelectedMovie(data.results[0]);
  }, [query]);

  useEffect(() => {
    if (query !== "") {
      fetchAMovie();
    } else {
      fetchFeaturedMovies();
    }
  }, [query, fetchAMovie]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MovieContext.Provider value={{ movies }}>
                <SideBar
                  query={query}
                  setQuery={setQuery}
                  setMovies={setMovies}
                />

                <TopNav query={query} setQuery={setQuery} />

                <Banner selectedMovie={selectedMovie} />

                <Gallery />

                <Footer />
              </MovieContext.Provider>
            }
          />
          <Route path={"/movies/:id"} element={<MovieView />} />
        </Routes>
      </Router>
    </div>
  );
}
