import SearchBar from "@/components/SearchBar";
import LoadMoreGrid from "@/app/(home)/LoadMoreGrid";
import MovieCarousel from "@/app/(home)/MovieCarousel";
import { fetchMoviesTrending } from "@/lib/server/actions/movie-actions";

export default async function Home() {
  const trendingMovies = await fetchMoviesTrending();

  return (
    <>
      <SearchBar placeholder="Search for movies or TV series" />

      <MovieCarousel data={trendingMovies} />

      <LoadMoreGrid />
    </>
  );
}
