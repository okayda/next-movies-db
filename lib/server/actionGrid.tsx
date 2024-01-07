import MovieGrid from "@/components/MovieGrid";
import {
  fetchMoviePlaying,
  fetchMovieTopRated,
  fetchMovieUpcoming,
  fetchMoviesPopular,
} from "./action";

export const moviesPopularGrid = async function () {
  const popularMovies = await fetchMoviesPopular();

  return (
    <MovieGrid
      key="popular-movies"
      title="Popular"
      queryFn={popularMovies}
      queryKey="popular-movies"
      movieData={popularMovies}
    />
  );
};

export const moviesPlayingGrid = async function () {
  const nowPlayingMovies = await fetchMoviePlaying();

  return (
    <MovieGrid
      key="now-playing-movies"
      title="Now Playing"
      queryFn={fetchMoviePlaying}
      queryKey="now-playing-movies"
      movieData={nowPlayingMovies}
    />
  );
};

export const moviesTopRatedGrid = async function () {
  const topRatedMovies = await fetchMovieTopRated();

  return (
    <MovieGrid
      key="top-rated-movies"
      title="Top Rated"
      queryFn={fetchMovieTopRated}
      queryKey="top-rated-movies"
      movieData={topRatedMovies}
    />
  );
};

export const moviesUpcomingGrid = async function () {
  const upcomingMovies = await fetchMovieUpcoming();

  return (
    <MovieGrid
      key="upcoming-movies"
      title="Upcoming"
      queryFn={fetchMovieUpcoming}
      queryKey="upcoming-movies"
      movieData={upcomingMovies}
    />
  );
};

export const fetchLoadGrid = async function (page: number) {
  const grids = [
    moviesPopularGrid(),
    moviesPlayingGrid(),
    moviesTopRatedGrid(),
    moviesUpcomingGrid(),
  ];

  return await grids[page];
};
