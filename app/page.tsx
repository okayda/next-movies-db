import MovieCarousel from "@/components/MovieCarousel";
import MovieGrid from "@/components/MovieGrid";
import SearchBar from "@/components/SearchBar";

import {
  fetchMoviesPopular,
  fetchMoviePlaying,
  fetchMovieUpcoming,
  fetchMovieTopRated,
} from "@/lib/server/action";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import Image from "next/image";

// const queryClient = new QueryClient();
// await queryClient.prefetchQuery({
//   queryKey: ["popular"],
//   queryFn: fetchMoviePopulars,
// });

{
  /* 
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MovieGrid title="Popular" movie="darker" />
      </HydrationBoundary> 
      */
}

export default async function Home() {
  const popularMovies = await fetchMoviesPopular();

  const nowPlayingMovies = await fetchMoviePlaying();

  const topratedMovies = await fetchMovieTopRated();

  const upcomingMovies = await fetchMovieUpcoming();

  return (
    <section>
      <SearchBar placeholder="Search for movies or TV series" />

      <MovieCarousel />

      <MovieGrid
        title="Popular"
        queryFn={fetchMoviePlaying}
        queryKey="popular-movies"
        movieData={popularMovies}
      />

      <MovieGrid
        title="Now Playing"
        queryFn={fetchMoviePlaying}
        queryKey="now-playing-movies"
        movieData={nowPlayingMovies}
      />

      <MovieGrid
        title="Top Rated"
        queryFn={fetchMovieTopRated}
        queryKey="top-rated-movies"
        movieData={topratedMovies}
      />

      <MovieGrid
        title="Upcoming"
        queryFn={fetchMovieUpcoming}
        queryKey="upcoming-movies"
        movieData={upcomingMovies}
      />
    </section>
  );
}
