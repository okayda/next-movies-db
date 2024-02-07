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

import HomeFilmsGrid from "@/app/(home)/HomeFilmsGrid";
import HomeFilmsCarousel from "./HomeFilmsCarousel";
import Error from "@/components/Error";

// Trending movie carousel are not included here
// Was used in the initial render

const moviesPopularGrid = async function () {
  const title = "Popular";
  const popularMovies = await fetchMoviesPopular();

  if (!popularMovies)
    return <Error key={title} title={title} className="my-6" />;

  return <HomeFilmsGrid key={title} title={title} data={popularMovies} />;
};

const moviesTopRatedGrid = async function () {
  const title = "Top Rated";
  const topRatedMovies = await fetchMoviesTopRated();

  if (!topRatedMovies)
    return <Error key={title} title={title} className="my-6" />;

  return <HomeFilmsGrid key={title} title={title} data={topRatedMovies} />;
};

const moviesUpcomingGrid = async function () {
  const title = "Upcoming";
  const upcomingMovies = await fetchMoviesUpcoming();

  if (!upcomingMovies)
    return <Error key={title} title={title} className="my-6" />;

  return <HomeFilmsGrid key={title} title={title} data={upcomingMovies} />;
};

const seriesTrendingCarousel = async function () {
  const title = "TV Carousel";
  const trendingTv = await fetchTvTrending();

  if (!trendingTv) return <Error key={title} title={title} className="my-6" />;

  return <HomeFilmsCarousel key={title} data={trendingTv} isMovie={false} />;
};

const seriesPopularGrid = async function () {
  const title = "TV Popular";
  const popularSeries = await fetchTvPopular();

  if (!popularSeries)
    return <Error key={title} title={title} className="my-6" />;

  return (
    <HomeFilmsGrid
      key={title}
      title={title}
      data={popularSeries}
      isMovie={false}
    />
  );
};

const seriesOnAirGrid = async function () {
  const title = "TV On Air";
  const onAirSeries = await fetchTvOnAir();

  if (!onAirSeries) return <Error key={title} title={title} className="my-6" />;

  return (
    <HomeFilmsGrid
      key={title}
      title={title}
      data={onAirSeries}
      isMovie={false}
    />
  );
};

const seriesTopRatedGrid = async function () {
  const title = "TV Top Rated";
  const topRatedSeries = await fetchTvTopRated();

  if (!topRatedSeries)
    return <Error key={title} title={title} className="my-6" />;

  return (
    <HomeFilmsGrid
      key={title}
      title={title}
      data={topRatedSeries}
      isMovie={false}
    />
  );
};

export default async function fetchHomeFilmsGrid(page: number) {
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
