import LoadMoreGrid from "@/app/(home)/LoadMoreGrid";
import MovieCarousel from "@/app/(home)/MovieCarousel";
import { fetchMoviesTrending } from "@/server/actions/movie-actions";

export default async function Home() {
  const trendingMovies = await fetchMoviesTrending();

  return (
    <>
      <MovieCarousel data={trendingMovies} />

      <LoadMoreGrid />
    </>
  );
}
