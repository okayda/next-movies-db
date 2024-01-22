import {
  fetchMoviesPopular,
  fetchMoviesUpcoming,
  fetchMoviesTopRated,
} from "../../server/actions/movie-actions";

import {
  fetchTvTrending,
  fetchTvPopular,
  fetchTvOnAir,
  fetchTvTopRated,
} from "@/server/actions/tv-actions";

import FilmGrid from "@/app/(home)/FilmGrid";
import MovieCarousel from "./FilmCarousel";

const moviesPopularGrid = async function () {
  const title = "Popular";
  const popularMovies = await fetchMoviesPopular();

  return <FilmGrid key={title} title={title} data={popularMovies} />;
};

const moviesTopRatedGrid = async function () {
  const title = "Top Rated";
  const topRatedMovies = await fetchMoviesTopRated();

  return <FilmGrid key={title} title={title} data={topRatedMovies} />;
};

const moviesUpcomingGrid = async function () {
  const title = "Upcoming";
  const upcomingMovies = await fetchMoviesUpcoming();

  return <FilmGrid key={title} title={title} data={upcomingMovies} />;
};

const seriesTrendingCarousel = async function () {
  const title = "TV Carousel";
  const trendingTv = await fetchTvTrending();

  return <MovieCarousel key={title} data={trendingTv} isMovie={false} />;
};

const seriesPopularGrid = async function () {
  const title = "TV Popular";
  const popularSeries = await fetchTvPopular();

  return (
    <FilmGrid key={title} title={title} data={popularSeries} isMovie={false} />
  );
};

const seriesOnAirGrid = async function () {
  const title = "TV On Air";
  const onAirSeries = await fetchTvOnAir();

  return (
    <FilmGrid key={title} title={title} data={onAirSeries} isMovie={false} />
  );
};

const seriesTopRatedGrid = async function () {
  const title = "TV Top Rated";
  const topRatedSeries = await fetchTvTopRated();

  return (
    <FilmGrid key={title} title={title} data={topRatedSeries} isMovie={false} />
  );
};

export default async function fetchFilmGrid(page: number) {
  const grids = [
    moviesPopularGrid,
    moviesTopRatedGrid,
    moviesUpcomingGrid,
    seriesTrendingCarousel,
    seriesPopularGrid,
    seriesOnAirGrid,
    seriesTopRatedGrid,
  ];

  return await grids[page]();
}
