import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotfoundPage from "./components/NotfoundPage/NotfoundPage";

export default function App() {
  const Layout = lazy(() => import("./components/Layout/Layout"));
  const Home = lazy(() => import("./routes/Home/Home"));
  const MoviesPage = lazy(() => import("./routes/MoviesPage/MoviesPage"));
  const MovieDetailsPage = lazy(() =>
    import("./routes/MovieDetailsPage/MovieDetailsPage")
  );
  const Cast = lazy(() => import("./components/Cast/Cast"));
  const Rewiews = lazy(() => import("./components/Reviews/Reviews"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Rewiews />} />
          </Route>
          {/* <Route path="*" element={<NotfoundPage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
}
