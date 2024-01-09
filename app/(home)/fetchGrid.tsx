import {
  fetchMoviesPlaying,
  fetchMoviesTopRated,
  fetchMoviesUpcoming,
  fetchMoviesPopular,
} from "../../lib/server/actions/movie-actions";
import { fetchTvTrending } from "@/lib/server/actions/tv-actions";

import MovieGrid from "@/app/(home)/MovieGrid";

export const moviesPopularGrid = async function () {
  const popularMovies = await fetchMoviesPopular();

  return (
    <MovieGrid key="popular-movies" title="Popular" data={popularMovies} />
  );
};

export const moviesPlayingGrid = async function () {
  const nowPlayingMovies = await fetchMoviesPlaying();

  return (
    <MovieGrid
      key="now-playing-movies"
      title="Now Playing"
      data={nowPlayingMovies}
    />
  );
};

export const moviesTopRatedGrid = async function () {
  const topRatedMovies = await fetchMoviesTopRated();

  return (
    <MovieGrid key="top-rated-movies" title="Top Rated" data={topRatedMovies} />
  );
};

export const moviesUpcomingGrid = async function () {
  const upcomingMovies = await fetchMoviesUpcoming();

  return (
    <MovieGrid key="upcoming-movies" title="Upcoming" data={upcomingMovies} />
  );
};

export const seriesTrendingCarousel = async function () {
  const upcomingMovies = await fetchTvTrending();

  return (
    <MovieGrid key="upcoming-movies" title="Upcoming" data={upcomingMovies} />
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
