import { useState, useEffect } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { LinkTo } from "../../App.styled";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { getMovieById } from "../../utils/ApiService";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then((data) => {
      setMovieData(data);
    });
  }, [movieId]);

  return (
    <>
      <LinkTo to={location?.state?.from ?? "/"}>&lArr; Go back</LinkTo>
      <MovieInfo movieData={movieData} />
      <p>Additional information</p>
      <ul>
        <li>
          <LinkTo to="cast" state={{ from: location?.state?.from ?? "/" }}>
            Cast
          </LinkTo>
        </li>
        <li>
          <LinkTo to="reviews" state={{ from: location?.state?.from ?? "/" }}>
            Review
          </LinkTo>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
