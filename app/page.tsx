import SearchBar from "@/components/SearchBar";
import LoadMoreGrid from "@/components/LoadMoreGrid";
import MovieCarousel from "@/components/MovieCarousel";
import { fetchMoviesTrending } from "@/lib/server/action";

export default async function Home() {
  const trendingMovies = await fetchMoviesTrending();

  return (
    <>
      <SearchBar placeholder="Search for movies or TV series" />

      <MovieCarousel
        queryKey="carousel-movies"
        queryFn={trendingMovies}
        moviesData={trendingMovies}
      />

      <LoadMoreGrid />
    </>
  );
}
