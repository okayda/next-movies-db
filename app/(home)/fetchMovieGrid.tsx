import {
  fetchMoviesPopular,
  fetchMoviesUpcoming,
  fetchMoviesTopRated,
} from "../../lib/server/actions/movie-actions";

import {
  fetchTvTrending,
  fetchTvPopular,
  fetchTvOnAir,
  fetchTvTopRated,
} from "@/lib/server/actions/tv-actions";

import MovieGrid from "@/app/(home)/MovieGrid";
import MovieCarousel from "./MovieCarousel";

const moviesPopularGrid = async function () {
  const title = "Popular";
  const popularMovies = await fetchMoviesPopular();

  return <MovieGrid key={title} title={title} data={popularMovies} />;
};

const moviesTopRatedGrid = async function () {
  const title = "Top Rated";
  const topRatedMovies = await fetchMoviesTopRated();

  return <MovieGrid key={title} title={title} data={topRatedMovies} />;
};

const moviesUpcomingGrid = async function () {
  const title = "Upcoming";
  const upcomingMovies = await fetchMoviesUpcoming();

  return <MovieGrid key={title} title={title} data={upcomingMovies} />;
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
    <MovieGrid key={title} title={title} data={popularSeries} isMovie={false} />
  );
};

const seriesOnAirGrid = async function () {
  const title = "TV On Air";
  const onAirSeries = await fetchTvOnAir();

  return (
    <MovieGrid key={title} title={title} data={onAirSeries} isMovie={false} />
  );
};

const seriesTopRatedGrid = async function () {
  const title = "TV Top Rated";
  const topRatedSeries = await fetchTvTopRated();

  return (
    <MovieGrid
      key={title}
      title={title}
      data={topRatedSeries}
      isMovie={false}
    />
  );
};

export default async function fetchMovieGrid(page: number) {
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
