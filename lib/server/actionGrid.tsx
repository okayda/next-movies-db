import MovieGrid from "@/components/MovieGrid";
import {
  fetchMoviesPlaying,
  fetchMoviesTopRated,
  fetchMoviesUpcoming,
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
  const nowPlayingMovies = await fetchMoviesPlaying();

  return (
    <MovieGrid
      key="now-playing-movies"
      title="Now Playing"
      queryFn={fetchMoviesPlaying}
      queryKey="now-playing-movies"
      movieData={nowPlayingMovies}
    />
  );
};

export const moviesTopRatedGrid = async function () {
  const topRatedMovies = await fetchMoviesTopRated();

  return (
    <MovieGrid
      key="top-rated-movies"
      title="Top Rated"
      queryFn={fetchMoviesTopRated}
      queryKey="top-rated-movies"
      movieData={topRatedMovies}
    />
  );
};

export const moviesUpcomingGrid = async function () {
  const upcomingMovies = await fetchMoviesUpcoming();

  return (
    <MovieGrid
      key="upcoming-movies"
      title="Upcoming"
      queryFn={fetchMoviesUpcoming}
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
