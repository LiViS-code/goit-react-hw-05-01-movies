import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { getMovieByName } from "../../utils/ApiService.js";

export default function MoviesPage() {
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const navigation = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get("query") ?? "";

  let setSearch = (request) => {
    navigation({ ...location, search: `query=${request}` });
  };

  // useEffect(() => {
  //   if (!searchQuery) return;
  //   getMovieByName(searchQuery).then((data) => {
  //     setMovieData(data.results);
  //   });
  // }, [searchQuery]);

  return (
    <>
      <SearchBar setSearch={setSearch} />
      {/* {movieData && <MovieList movieData={movieData} location={location} />} */}
    </>
  );
}
